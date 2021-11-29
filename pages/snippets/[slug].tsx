import React from 'react';
import { serialize } from 'next-mdx-remote/serialize';

import SnippetLayout from '../../layouts/Snippets';
import { getSnippePaths, getSnippeContent } from '../../lib/content';

const SnippetBlog = ({
  content,
  mdx
}) => {
  return (
    <SnippetLayout mdx={mdx} content={content} />
  );
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  const content = await getSnippeContent(slug);
  const mdx = await serialize(content.content);

  return {
    props: {
      content,
      mdx
    },
  };
}

export async function getStaticPaths() {
  const paths = await getSnippePaths();
  return {
    paths,
    fallback: false,
  };
}

export default SnippetBlog;
