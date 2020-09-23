// @flow strict
import React from 'react';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import type { Node } from '../../types';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

type Props = {
  post: Node,
  containerCss: string
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date, featuredImage } = post.frontmatter;

  return (
    <div className="post-start">

      <div className="">
        <Content body={html} title={title} banner={featuredImage} />
      </div>

      <div className={containerCss}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags className="border border-white text-lg rounded-lg p-3 my-4" tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={containerCss}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
      <div className={containerCss}>
        <div className="text-center">
          <button title="Back to top" className="border border-white text-lg rounded-lg p-3" onClick={() => scrollTo('#topofpage')}><FontAwesomeIcon icon={ faChevronUp } />&nbsp;&nbsp;To The Top </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
