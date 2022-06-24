import React from 'react';

const MarkdownTemplate = ({ pageContext }: any) => {
  console.log(pageContext);
  return (
    <div>
      BLOG
      <h1 className="font-semibold text-red-500">{pageContext.title}</h1>
      {/* <div className="mt-4" dangerouslySetInnerHTML={{ __html: pageContext }} /> */}
    </div>
  );
};

export default MarkdownTemplate;
