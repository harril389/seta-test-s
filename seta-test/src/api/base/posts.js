import { createApiRequest } from "../index";

export const getPosts = () => {
  return createApiRequest({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "get",
  });
};

export const putPost = (data) => {
  return createApiRequest({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "post",
    data: data,
  });
};
