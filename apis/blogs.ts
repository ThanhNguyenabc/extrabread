/* eslint-disable no-async-promise-executor */
import { BLOGS_API } from '@/constants';

export const getBlogsAPI = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const blogs = await fetch(BLOGS_API).then(response => response.json());
      resolve(blogs);
    } catch (error) {
      reject(error);
    }
  });
};

export const getBlogDetailBySlug = (slug: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const blogs = await fetch(`${BLOGS_API}?slug=${slug}`).then(response => response.json());
      resolve(blogs);
    } catch (error) {
      reject(error);
    }
  });
};
