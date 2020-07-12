import React from 'react';

import { articles } from './articles';
import ArticleView from './ArticleView';


export default function All() {
  return (
    <ArticleView articles={articles} />
  );
};
