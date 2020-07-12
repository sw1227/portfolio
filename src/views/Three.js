import React from 'react';

import { articles, categories } from './articles';
import ArticleView from './ArticleView';


export default function Three() {

  return (
    <ArticleView
      articles={articles.filter(d => d.category.includes(categories.three))}
    />
  );
};
