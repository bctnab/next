import React from 'react';

import WikiContent from './WikiContent';
import BriefContent from './BriefContent';
import DiaryContent from './DiaryContent';
import OrderedContent from './OrderedContent';

const ArticleContext = React.createContext({
  type: 'original'
});

const Article = ({ type = 'ordered', data = {}, ...delegated }) => {
  return (
    <ArticleContext.Provider value={{ type }}>
      { type === 'ordered' && <OrderedContent data={data} /> }
      { type === 'brief' && <BriefContent data={data} /> }
      { type === 'wiki' && <WikiContent data={delegated} /> }
      { type === 'diary' && <DiaryContent data={data} /> }
    </ArticleContext.Provider>
  );
};

export default Article;
