// aqui exportaras las funciones que necesites
import {
  login as userLogin,
  register as registerPage,
  logout as userLogout,
  getLoggedInUser as loggedInUser,
  createPost as createPostExp,
  getPosts as getPostsExp,
  editPost as editPostExp,
  deletePost as deletePostExp,
} from './services.js';

const login = (email, password) => userLogin(email, password);
const register = (email, password) => registerPage(email, password);
const logout = () => userLogout();
const getLoggedInUser = () => loggedInUser();
const createPost = (content, userEmail) => createPostExp(content, userEmail);
const getPosts = () => getPostsExp();
const editPost = (idPost, content) => editPostExp(idPost, content);
const deletePost = (idPost) => deletePostExp(idPost);

export {
  login,
  register,
  logout,
  getLoggedInUser,
  createPost,
  getPosts,
  editPost,
  deletePost,
};
