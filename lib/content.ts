import { uniq } from 'lodash';
import { join } from 'path';
import matter from 'gray-matter';
import { readdirSync, readFileSync } from 'fs';
import { formatDate, sortPosts, postGroupBy, getPaths, getBlogContent, getDatas } from './utils';

type articleQuery = {
  limit?: number,
  categorie?: string
}

//! post
// get paths
export async function getPostPaths() {
  const paths = getPaths('data/blog', 'slug', 'slug');
  return paths;
}
// get posts
export async function getPosts(params: articleQuery) {
  const { limit, categorie } = params;
  let posts = getDatas('data/blog');

  posts = posts.map((item) => ({
    slug: item.slug,
    title: item.title,
    preview: item.preview || '',
    categorie: item.categorie,
    time: item.date.toString(),
    date: formatDate(item.date, 'yyyy-MM-dd'),
    abstract: item.abstract,
    isPublished: item.isPublished,
  }))
  posts = posts.filter(function (item) {
    return (item.isPublished === true) && (!categorie || (!!categorie && item.categorie === categorie));
  });
  return sortPosts(posts, limit);
}
// get popular posts
export async function getPopularBlogs() {
  let posts = getDatas('data/blog');

  posts = posts.map((item) => ({
    slug: item.slug,
    title: item.title,
    time: item.date.toString(),
    date: formatDate(item.date, 'yyyy-MM-dd'),
    isPopular: item.isPopular,
    isPublished: item.isPublished,
  }));
  posts = posts.filter(function (item) {
    return (item.isPublished === true && item.isPopular === true);
  });

  return sortPosts(posts, undefined);
}
// post time axis
export async function getPostTimeAxis() {
  let posts = getDatas('data/blog');

  posts = posts.map((item) => ({
    slug: item.slug,
    title: item.title,
    time: item.date.toString(),
    year: formatDate(item.date, 'yyyy'),
    date: formatDate(item.date, 'yyyy-MM-dd'),
    isPublished: item.isPublished,
  }));
  posts = posts.filter(function (item) {
    return (item.isPublished === true);
  });
  posts = sortPosts(posts, undefined);
  posts = postGroupBy(posts, 'year');
  return posts;
}
// get post content
export async function getPostContent(slug) {
  const content = getBlogContent('data/blog', slug);
  return content;
}
// query by categorie
export async function queryPostByCategorie(categorie) {
  let posts = getDatas('data/blog');

  posts = posts.map((item) => ({
    slug: item.slug,
    title: item.title,
    tags: item.tags || [],
    preview: item.preview || '',
    categorie: item.categorie,
    time: item.date.toString(),
    date: formatDate(item.date, 'yyyy-MM-dd'),
    abstract: item.abstract,
    isPublished: item.isPublished,
  }));
  posts = posts.filter(function (item) {
    return (item.isPublished === true) && (item.categorie === categorie);
  });
  return sortPosts(posts, undefined);
}
// query by tag
export async function queryPostByTag(tag) {
  let posts = getDatas('data/blog');

  posts = posts.map((item) => ({
    slug: item.slug,
    title: item.title,
    tags: item.tags || [],
    preview: item.preview || '',
    categorie: item.categorie,
    time: item.date.toString(),
    date: formatDate(item.date, 'yyyy-MM-dd'),
    abstract: item.abstract,
    isPublished: item.isPublished,
  }));
  posts = posts.filter(function (item) {
    return (item.isPublished === true) && (item.tags.indexOf(tag) >= 0);
  });
  return sortPosts(posts, undefined);
}

//! tag
// get paths
export async function getTagsPaths() {
  const paths = getPaths('data/blog', 'tags', 'tag');
  return paths;
}
// get tags
export async function getTags() {
  let posts = getDatas('data/blog');
  const tags = [];
  posts.map((item) => {
    if(item.tags) tags.push(...item.tags);
  });
  return uniq(tags);
}

//! categorie
// get paths
export async function getCategoriesPaths() {
  const paths = getPaths('data/blog', 'categorie', 'categorie');
  return paths;
}
// get categories
export async function getCategories() {
  let posts = getDatas('data/blog');
  const categories = {};

  posts.map((item) => {
    categories[item.categorie] = ((categories[item.categorie] || 0) + 1);
  });
  return categories;
}

//! Snippe
// get paths
export async function getSnippePaths() {
  const paths = getPaths('data/snippets', 'slug', 'slug');
  return paths;
}
// get snippets
export async function getSnippets() {
  let posts = getDatas('data/snippets');

  posts = posts.map((item) => {
    return {
      slug: item.slug,
      title: item.title,
      categorie: item.categorie,
      time: item.date.toString(),
      date: formatDate(item.date, 'yyyy-MM-dd'),
      abstract: item.abstract,
      isPublished: item.isPublished,
    }
  });

  posts = posts.filter(function (item) {
    return (item.isPublished === true);
  });
  return sortPosts(posts, undefined);
}
// get post content
export async function getSnippeContent(slug) {
  const postsDirectory = join(process.cwd(), 'data/snippets');
  const filenames = readdirSync(postsDirectory);

  for(let i = 0; i < filenames.length; i++){
    const filePath = join(postsDirectory, filenames[i], 'index.mdx')
    const fileContents = readFileSync(filePath, 'utf8')
    const { content, data } = matter(fileContents);
    if( slug === data.slug ){
      return {
        title: data.title,
        content: content,
        time: data.date.toString(),
        date: formatDate(data.date, 'yyyy-MM-dd'),
      }
    }
  }
}