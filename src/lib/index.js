// aqui exportaras las funciones que necesites

import { createPost, deletePost, editPost, getPosts, init, login, register as registerPage } from "./services";

export const register=(email,password)=>registerPage(email,password)

export const myFunction = () => {
  
  console.log('Hola mundo!');
};

