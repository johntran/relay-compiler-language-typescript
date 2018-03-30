import { graphql } from 'react-relay';

export default graphql`
  query App_Query {
    viewer {
    ...TodoApp_viewer
  }
  }
`;