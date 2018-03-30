import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import AppQuery from './queries/App';
import TodoApp from './components/TodoApp';
import BlogPostPage from './pages/BlogPostPage'
import BlogPostPageQuery from './queries/BlogPostPage';

const noopComponent = ({children}: any) => <div>{children}</div>;

export default makeRouteConfig(
  <Route path="/" Component={noopComponent}>
    <Route query={AppQuery} Component={TodoApp}/>
    <Route path="blog/:slug" query={BlogPostPageQuery} Component={BlogPostPage}/>
  </Route>
)