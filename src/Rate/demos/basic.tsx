import React from 'react';
// @ts-ignore
import { Rate } from 'banana-ui';

const Demo = () => {
  return (
    <>
      <Rate
        defaultValue={0}
        onChange={(value: number) => alert(`你选中了${value}`)}
      />
    </>
  );
};

export default Demo;
