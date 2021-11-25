import React from 'react';

import RowCollapse from './RowCollapse';
import ColumnCollapse from './ColumnCollapse';

const MarginCollapse = ({
  type = "column"
}) => {
  return (
    <>
      {
        (type === 'column') && <ColumnCollapse />
      }
      {
        (type === 'row') && <RowCollapse />
      }
    </>
  );
};

export default MarginCollapse;