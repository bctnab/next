import { uniq } from 'lodash';
import { join } from 'path';
import { formatDate, sortPosts, postGroupBy } from '../utils/utils';
import matter from 'gray-matter';
import { readdirSync, readFileSync } from 'fs';

type articleQuery = {
  limit?: number,
  categorie?: string
}

// get posts
export async function getBlogPostContent(params: articleQuery) {
  const { limit, categorie } = params;
  const postsDirectory = join(process.cwd(), 'data/blog');
  const filenames = readdirSync(postsDirectory);

  let posts = filenames.map((filename) => {
    const filePath = join(postsDirectory, filename, 'index.mdx')
    const fileContents = readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents);
    return {
      slug: data.slub,
      title: data.title,
      preview: data.preview || '',
      categorie: data.categorie,
      time: data.date.toString(),
      date: formatDate(data.date, 'yyyy-MM-dd'),
      abstract: data.abstract,
      isPublished: data.isPublished,
    }
  });
  posts = posts.filter(function (item) {
    return (item.isPublished === true) && (!categorie || (!!categorie && item.categorie === categorie));
  });
  return sortPosts(posts, limit);
}

// get categories
export async function getCategories() {
  const postsDirectory = join(process.cwd(), 'data/blog');
  const filenames = readdirSync(postsDirectory);
  const categories = {};

  filenames.map((filename) => {
    const filePath = join(postsDirectory, filename, 'index.mdx');
    const fileContents = readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    categories[data.categorie] = ((categories[data.categorie] || 0) + 1);
  });

  return categories;
}

// get post paths
export async function getPostPaths() {
  const postsDirectory = join(process.cwd(), 'data/blog');
  const filenames = readdirSync(postsDirectory);

  let posts = filenames.map((filename) => {
    const filePath = join(postsDirectory, filename, 'index.mdx')
    const fileContents = readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents);

    return {
      params:{
        slug: data.slub
      }
    };
  });
  return posts;
}

// get popular post
export async function getPopularContent() {
  const postsDirectory = join(process.cwd(), 'data/blog');
  const filenames = readdirSync(postsDirectory);

  let posts = filenames.map((filename) => {
    const filePath = join(postsDirectory, filename, 'index.mdx')
    const fileContents = readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents);
    return {
      slug: data.slub,
      title: data.title,
      time: data.date.toString(),
      date: formatDate(data.date, 'yyyy-MM-dd'),
      isPopular: data.isPopular,
      isPublished: data.isPublished,
    }
  });
  posts = posts.filter(function (item) {
    return (item.isPublished === true && item.isPopular === true);
  });

  return posts;
}

// post time axis
export async function getPostTimeAxis() {
  const postsDirectory = join(process.cwd(), 'data/blog');
  let filenames = readdirSync(postsDirectory);

  let posts = filenames.map((filename) => {
    const filePath = join(postsDirectory, filename, 'index.mdx')
    const fileContents = readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents);
    return {
      slug: data.slub,
      title: data.title,
      time: data.date.toString(),
      year: formatDate(data.date, 'yyyy'),
      date: formatDate(data.date, 'yyyy-MM-dd'),
      isPublished: data.isPublished,
    }
  });
  posts = posts.filter(function (item) {
    return (item.isPublished === true);
  });
  posts = sortPosts(posts, undefined);
  posts = postGroupBy(posts, 'year');
  return posts;
}

// get tags
export async function getTags() {
  const postsDirectory = join(process.cwd(), 'data/blog');
  let filenames = readdirSync(postsDirectory);
  const tags = [];
  
  filenames.map((filename) => {
    const filePath = join(postsDirectory, filename, 'index.mdx');
    const fileContents = readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    if(data.tags) tags.push(...data.tags);
  });
  return uniq(tags);
}

// get tag paths
export async function getTagsPaths() {
  const postsDirectory = join(process.cwd(), 'data/blog');
  let filenames = readdirSync(postsDirectory);
  const tags = [];

  filenames.map((filename) => {
    const filePath = join(postsDirectory, filename, 'index.mdx');
    const fileContents = readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    if(data.tags) tags.push(...data.tags);
  });
  return uniq(tags).map(item => ({
    params: {
      tag: item
    }
  }));
}

// query post by tag
export async function queryPostByTag(tag) {
  const postsDirectory = join(process.cwd(), 'data/blog');
  const filenames = readdirSync(postsDirectory);

  let posts = filenames.map((filename) => {
    const filePath = join(postsDirectory, filename, 'index.mdx')
    const fileContents = readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents);
    return {
      slug: data.slub,
      title: data.title,
      tags: data.tags || [],
      preview: data.preview || '',
      categorie: data.categorie,
      time: data.date.toString(),
      date: formatDate(data.date, 'yyyy-MM-dd'),
      abstract: data.abstract,
      isPublished: data.isPublished,
    }
  });
  posts = posts.filter(function (item) {
    return (item.isPublished === true) && (item.tags.indexOf(tag) >= 0);
  });
  return sortPosts(posts, undefined);
}

// get post content
export async function getPostContent(slug) {
  const postsDirectory = join(process.cwd(), 'data/blog');
  const filenames = readdirSync(postsDirectory);

  for(let i = 0; i < filenames.length; i++){
    const filePath = join(postsDirectory, filenames[i], 'index.mdx')
    const fileContents = readFileSync(filePath, 'utf8')
    const { content, data } = matter(fileContents);
    if( slug === data.slub ){
      return {
        title: data.title,
        content: content,
        preview: data.preview || '',
        categorie: data.categorie,
        tags: data.tags || [],
        time: data.date.toString(),
        date: formatDate(data.date, 'yyyy-MM-dd'),
        abstract: data.abstract,
      }
    }
  }
}

// get tag paths
export async function getCategoriesPaths() {
  const postsDirectory = join(process.cwd(), 'data/blog');
  const filenames = readdirSync(postsDirectory);
  const categories = filenames.map((filename) => {
    const filePath = join(postsDirectory, filename, 'index.mdx');
    const fileContents = readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return data.categorie;
  });
  return uniq(categories).map(item => ({
    params: {
      categorie: item
    }
  }));
}

// query post by categorie
export async function queryPostByCategorie(categorie) {
  const postsDirectory = join(process.cwd(), 'data/blog');
  const filenames = readdirSync(postsDirectory);

  let posts = filenames.map((filename) => {
    const filePath = join(postsDirectory, filename, 'index.mdx')
    const fileContents = readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents);
    return {
      slug: data.slub,
      title: data.title,
      tags: data.tags || [],
      preview: data.preview || '',
      categorie: data.categorie,
      time: data.date.toString(),
      date: formatDate(data.date, 'yyyy-MM-dd'),
      abstract: data.abstract,
      isPublished: data.isPublished,
    }
  });
  posts = posts.filter(function (item) {
    return (item.isPublished === true) && (item.categorie === categorie);
  });
  return sortPosts(posts, undefined);
}