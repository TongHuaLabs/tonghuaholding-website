import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import MainLayout from '../layouts/MainLayout';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => {
  return <MainLayout {...props}>{element}</MainLayout>;
};
