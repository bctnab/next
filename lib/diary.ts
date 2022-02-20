import { sortPosts, getContent } from './utils';

// get diary
export async function getDiary() {
  let diary = getContent('data/diary');
  return sortPosts(diary, undefined);
}