import React from 'react';

import { articles, categories } from './articles';
import ArticleView from './ArticleView';


export default function Visualization() {

  return (
    <ArticleView
      articles={articles.filter(d => d.category.includes(categories.vis))}
    />
  );
};
