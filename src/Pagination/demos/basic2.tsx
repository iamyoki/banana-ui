import React, { useState } from 'react';
// @ts-ignore
import { Pagination } from 'banana-ui';

const PaginationPage: React.FC = () => {
  const [p, setP] = useState(1);
  return (
    <>
      <div>当前是第{p}页</div>
      <Pagination
        totalPage={10}
        curPage={p}
        onChange={(page: number) => setP(page)}
      />
    </>
  );
};

export default PaginationPage;
