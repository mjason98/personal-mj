import React from 'react';

type ArticlePageProps = {
  params: {
    articleId: string;
  };
};

const ArticlePage: React.FC<ArticlePageProps> = ({ params: { articleId } }) => {
  return (
    <div>
      <h1>Article Page</h1>
      <p>Article ID: {articleId}</p>
    </div>
  );
};

export default ArticlePage;
