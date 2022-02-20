import { join } from 'path';
import { uniq, groupBy } from 'lodash';
import matter from 'gray-matter';
import { readdirSync, readFileSync } from 'fs';

// 排序
export const sortPosts = (posts, limit) => {
  const sortedPosts = posts.sort((a, b) => {
    return Date.parse(b.time) - Date.parse(a.time);
  });
  if (limit && limit > 0 && limit < sortedPosts.length) return sortedPosts.splice(0, limit);
  return sortedPosts;
};

// 归档
export const postGroupBy = (posts, key) => {
  let data = groupBy(posts, key);
  let keys = Object.keys(data);
  let newArr = [];
  for (let key of keys) {
    newArr.push({
      title: key,
      data: data[key]
    });
  }
  newArr.sort((a, b) => {
    return parseInt(b.title) - parseInt(a.title);
  });
  return newArr;
};

// 格式化日期
export const formatDate = (dateStr, fmt) => {
  const date = new Date(dateStr);
  const o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    "S": date.getMilliseconds()
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }

  return fmt;
}

// 获取路径
export const getPaths = (pathname, slug, param) => {
  const postsDirectory = join(process.cwd(), pathname);
  const filenames = readdirSync(postsDirectory);
  let paths = [];

  filenames.map((filename) => {
    const filePath = join(postsDirectory, filename, 'index.mdx')
    const fileContents = readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents);

    if( data[slug] !== undefined ){
      if( data[slug].constructor === Array ){
        paths = paths.concat(data[slug]);
      }else{
        paths.push(data[slug]);
      }
    }else{
      throw new Error(`paths undefined: slug is ${ slug}`);
    }
  });
  return uniq(paths).map(item => ({
    params: {
      [param]: item
    }
  }));
}

// 获取内容
export const getBlogContent = (pathname, slug) => {
  const postsDirectory = join(process.cwd(), pathname);
  const filenames = readdirSync(postsDirectory);

  for(let i = 0; i < filenames.length; i++){
    const filePath = join(postsDirectory, filenames[i], 'index.mdx')
    const fileContents = readFileSync(filePath, 'utf8')
    const { content, data } = matter(fileContents);

    if( slug === data.slug ){
      return {
        content: content,
        title: data.title,
        preview: data.preview || '',
        categorie: data.categorie,
        tags: data.tags || [],
        time: data.date.toString(),
        date: formatDate(data.date, 'yyyy-MM-dd'),
        abstract: data.abstract,
      };
    }
  }
}

// 获取内容
export const getDatas = ( pathname ) => {
  const postsDirectory = join(process.cwd(), pathname);
  const filenames = readdirSync(postsDirectory);
  let posts = filenames.map((filename) => {
    const filePath = join(postsDirectory, filename, 'index.mdx')
    const fileContents = readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents);
    return data;
  });
  return posts;
}

// 获取日志
export const getContent = ( pathname ) => {
  const postsDirectory = join(process.cwd(), pathname);
  const filenames = readdirSync(postsDirectory);

  let posts = filenames.map((filename) => {
    const filePath = join(postsDirectory, filename, 'index.mdx')
    const fileContents = readFileSync(filePath, 'utf8');
    return {
      time: filename,
      content: fileContents
    };
  });
  return posts;
}