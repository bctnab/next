import PostImage from '../components/PostImage/PostImage';
import CssTransition from '../post-helpers/css-transition';
import MarginCollapse from '../post-helpers/rules-margin-collapse';

export const COMPONENTS = {
  CssTransition,
  MarginCollapse,
  pre: props => <div className="highlight highlight-source-js" {...props} />,
  code: props => <pre {...props} />,
  PostImage: PostImage,
}