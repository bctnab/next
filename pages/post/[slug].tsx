import React from 'react';
import ArticleLayout from '../../layouts/Article';
import { serialize } from 'next-mdx-remote/serialize';

import { getPostPaths, getPostContent } from '../../lib/content';

const BlogPost = ({
  content,
  mdx
}) => {
  return (
    <ArticleLayout mdx={mdx} content={content} />
  );
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  const content: any = await getPostContent(slug);
  const mdx = await serialize(content.abstract + '<br /><br />' + content.content);

  return {
    props: {
      content,
      mdx
    },
  };
}

export async function getStaticPaths() {
  const paths = await getPostPaths();
  return {
    paths,
    fallback: false,
  };
}

export default BlogPost;
