import React from 'react';

const PageTitle = ({children }) => {
  return (
    <>
      <h2 className="text-4xl font-bold text-primary mb-6">{children }</h2>
    </>
  );
};

export default PageTitle;