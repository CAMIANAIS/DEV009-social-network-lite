// aqui exportaras las funciones que necesites
import {
  login as userLogin,
  register as registerPage,
  logout as userLogout,
  getLoggedInUser as loggedInUser,
  createPost as createPostForRecipe,
  getPosts as getPostsRecipe,
  editPost as editPostRecipe,
  deletePost as deletePostRecipe,
} from './services.js';

const login = (email, password) => userLogin(email, password);
const register = (email, password) => registerPage(email, password);
const logout = () => userLogout();
const getLoggedInUser = () => loggedInUser();
const createPost = (content, userEmail) => createPostForRecipe(content, userEmail);
const getPosts = () => getPostsRecipe();
const editPost = (idPost, content) => editPostRecipe(idPost, content);
const deletePost = (idPost) => deletePostRecipe(idPost);

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
