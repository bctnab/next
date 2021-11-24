import React from 'react';

import OrderedContent from './OrderedContent';
import BriefContent from './BriefContent';
import WikiContent from './WikiContent';

const ArticleContext = React.createContext({
  type: 'original'
});

const Article = ({ type = 'ordered', data = {}, ...delegated }) => {
  return (
    <ArticleContext.Provider value={{ type }}>
      { type === 'ordered' && <OrderedContent data={data} /> }
      { type === 'brief' && <BriefContent data={data} /> }
      { type === 'wiki' && <WikiContent data={delegated} /> }
    </ArticleContext.Provider>
  );
};

export default Article;
