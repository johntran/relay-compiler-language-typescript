import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

const BlogHeader = ({header}) => (<div>header</div>)

export default createFragmentContainer(BlogHeader, {
  blogPost: graphql`
    fragment BlogHeader_blogPost on BlogPost {
      header
    }
  `,
});