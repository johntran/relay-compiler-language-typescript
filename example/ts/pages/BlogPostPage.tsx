import * as React from 'react';
import { graphql, createRefetchContainer } from 'react-relay';
import BlogHeader from './BlogHeader';

interface BlogPostPageProps {
  viewerTwo: {
    blogPost: {
      header: string;
      content: string;
      datePublished: string;
      category: string;
      images: {
        hero: string;
        preview: string;
      };
      slug: string;
      isValidPage: boolean;
    };
  };
}

class BlogPostPage extends React.Component<BlogPostPageProps, {}> {
  createContent = () => ({
    __html: this.props.viewerTwo.blogPost.content,
  });
  render() {
    if (!this.props.viewerTwo.blogPost.isValidPage) return <div />;
    return (
      <div className="BlogPostPage-container">
        <BlogHeader blogPost={this.props.viewerTwo.blogPost} />
        <div
          className="BlogPostPage-content"
          dangerouslySetInnerHTML={this.createContent()}
        /> 
      </div>
    );
  }
}

export default createRefetchContainer(
  BlogPostPage,
  {
    viewerTwo: graphql`
      fragment BlogPostPage_viewerTwo on ViewerTwo
        @argumentDefinitions(slug: { type: "String" }) {
        blogPost(slug: $slug) {
          header
          content
          slug
          datePublished
          category
          images {
            hero
            preview
          }
          ...BlogHeader_blogPost
          isValidPage
        }
      }
    `,
  },
  graphql`
    query BlogPostPageRefetchQuery($slug: String!) {
      viewerTwo {
        ...BlogPostPage_viewerTwo @arguments(slug: $slug)
      }
    }
  `,
);
