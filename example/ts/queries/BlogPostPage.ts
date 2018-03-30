import { graphql } from 'graphql-relay';

export default graphql`
  query BlogPostPage_Query($slug: String!) {
    viewerTwo {
      ...BlogPostPage_viewerTwo @arguments(slug: $slug)
    }
  }
`;
