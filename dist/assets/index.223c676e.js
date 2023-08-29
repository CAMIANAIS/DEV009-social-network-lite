(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const style = "";
const imagenfondo = "/assets/fondo.fc2cd157.jpg";
function home(navigateTo2) {
  const section = document.createElement("section");
  const title = document.createElement("h1");
  const button = document.createElement("button");
  const button2 = document.createElement("button");
  const description = document.createElement("p");
  const containerBtn = document.createElement("div");
  const background = document.createElement("img");
  background.src = imagenfondo;
  background.alt = "fondo";
  background.classList.add("img");
  button.textContent = "Login";
  button.addEventListener("click", () => {
    navigateTo2("/login");
  });
  button2.textContent = "Register";
  button2.addEventListener("click", () => {
    navigateTo2("/register");
  });
  title.textContent = "Welcome to Arequipa 360";
  description.innerHTML = `
  <p class="stroked-text"> Arequipa has it all. Yes, absolutely everything you can imagine, you find on the territory of the "White City". History, adventure, fabulous landscapes, wildlife, gastronomy, art and much more.Join us and discover it.</p>
  `;
  containerBtn.classList.add("container-btn");
  description.classList.add("description");
  button.classList.add("btn1");
  button2.classList.add("btn1");
  containerBtn.appendChild(button);
  containerBtn.appendChild(button2);
  section.append(title, description, containerBtn, background);
  return section;
}
const imagenlogo = "/assets/logo.f09a6b72.png";
const login$1 = (email, password) => {
  const usersStr = localStorage.getItem("users");
  if (usersStr) {
    const users = JSON.parse(usersStr);
    const user = users.find((user4) => user4.email === email && user4.password === password);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    }
  } else {
    return false;
  }
};
const getLoggedInUser$1 = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) {
    return JSON.parse(userStr);
  }
  return null;
};
const logout$1 = () => {
  localStorage.removeItem("user");
};
const register$1 = (email, password) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email");
  }
  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters long");
  }
  let users = [];
  const usersStr = localStorage.getItem("users");
  if (usersStr) {
    users = JSON.parse(usersStr);
  }
  const user = users.find((user4) => user4.email === email);
  if (user) {
    throw new Error("User already exists");
  } else {
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  }
};
const getPosts$1 = () => {
  const postsStr = localStorage.getItem("posts");
  if (postsStr) {
    return JSON.parse(postsStr);
  }
  return [];
};
const createPost$1 = (content, email) => {
  if (content.length < 1) {
    throw new Error("Content must be at least 1 character long");
  }
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email");
  }
  const id = Math.random().toString(36).substr(2, 9);
  let posts = [];
  const postsStr = localStorage.getItem("posts");
  if (postsStr) {
    posts = JSON.parse(postsStr);
  }
  posts.push({ id, content, email });
  localStorage.setItem("posts", JSON.stringify(posts));
  return id;
};
const editPost$1 = (idPost, content) => {
  if (content.length < 1) {
    throw new Error("Content must be at least 1 character long");
  }
  const postsStr = localStorage.getItem("posts");
  if (postsStr) {
    const posts = JSON.parse(postsStr);
    const post = posts.find((post2) => post2.id === idPost);
    if (post) {
      post.content = content;
      localStorage.setItem("posts", JSON.stringify(posts));
    } else {
      throw new Error("Post does not exist");
    }
  } else {
    throw new Error("Post does not exist");
  }
};
const deletePost$1 = (idPost) => {
  const postsStr = localStorage.getItem("posts");
  if (postsStr) {
    const posts = JSON.parse(postsStr);
    const post = posts.find((post2) => post2.id === idPost);
    if (post) {
      const index = posts.indexOf(post);
      posts.splice(index, 1);
      localStorage.setItem("posts", JSON.stringify(posts));
    } else {
      throw new Error("Post does not exist");
    }
  } else {
    throw new Error("Post does not exist");
  }
};
const login = (email, password) => login$1(email, password);
const register = (email, password) => register$1(email, password);
const logout = () => logout$1();
const getLoggedInUser = () => getLoggedInUser$1();
const createPost = (content, userEmail) => createPost$1(content, userEmail);
const getPosts = () => getPosts$1();
const editPost = (idPost, content) => editPost$1(idPost, content);
const deletePost = (idPost) => deletePost$1(idPost);
function createLogin(navigateTo2) {
  const section = document.createElement("section");
  const title = document.createElement("h1");
  const containerContent = document.createElement("div");
  const inputEmail = document.createElement("input");
  const inputPass = document.createElement("input");
  inputPass.type = "password";
  const buttonLogin = document.createElement("button");
  const buttonReturn = document.createElement("button");
  const background = document.createElement("img");
  background.src = imagenfondo;
  background.alt = "fondo";
  background.classList.add("img");
  const logo = document.createElement("img");
  logo.src = imagenlogo;
  logo.alt = "logo";
  logo.classList.add("logo");
  inputEmail.classList.add("input-fieldEmail");
  inputPass.classList.add("input-fieldPassword");
  buttonLogin.classList.add("btn");
  buttonReturn.classList.add("btn");
  containerContent.classList.add("container-content");
  inputEmail.placeholder = "Email";
  inputPass.placeholder = "Password";
  title.textContent = "Welcome to Arequipa 360";
  buttonLogin.textContent = "Log in";
  buttonReturn.textContent = "Return to home";
  buttonReturn.addEventListener("click", () => {
    navigateTo2("/");
  });
  buttonLogin.addEventListener("click", () => {
    const email = document.querySelector(".input-fieldEmail").value;
    const password = document.querySelector(".input-fieldPassword").value;
    const success1 = login(email, password);
    if (success1) {
      alert("Cargando tus preferencias");
      navigateTo2("/publish");
    } else {
      alert("Error. Verifique su correo o contrase\xF1a, por favor");
    }
  });
  containerContent.append(logo, inputEmail, inputPass, buttonLogin, buttonReturn);
  section.append(title, containerContent, background);
  return section;
}
function error() {
  const title = document.createElement("h2");
  title.textContent = "Error 404 page not found";
  return title;
}
function createRegisterForm(navigateTo2) {
  const section1 = document.createElement("section");
  const title = document.createElement("h1");
  const containerContent = document.createElement("div");
  const inputName = document.createElement("input");
  const inputApellidos = document.createElement("input");
  const inputEmail = document.createElement("input");
  const inputPass = document.createElement("input");
  inputPass.type = "password";
  const buttonRegister = document.createElement("button");
  const buttonReturn1 = document.createElement("button");
  const background = document.createElement("img");
  background.src = imagenfondo;
  background.alt = "fondo";
  background.classList.add("img");
  const logo = document.createElement("img");
  logo.src = imagenlogo;
  logo.alt = "logo";
  logo.classList.add("logo");
  section1.classList.add("containerRegister");
  inputName.classList.add("input-field");
  inputApellidos.classList.add("input-field");
  inputEmail.classList.add("input-fieldEmail");
  inputPass.classList.add("input-fieldPassword");
  buttonRegister.classList.add("btn");
  buttonReturn1.classList.add("btn");
  background.classList.add("img");
  logo.classList.add("logo");
  containerContent.classList.add("container-content");
  inputName.placeholder = "Names";
  inputApellidos.placeholder = "Surnames";
  inputEmail.placeholder = "Email";
  inputPass.placeholder = "Password";
  title.textContent = "Welcome to Arequipa 360";
  buttonRegister.textContent = "Registrarse";
  buttonReturn1.textContent = "Return to home";
  buttonReturn1.addEventListener("click", () => {
    navigateTo2("/");
  });
  buttonRegister.addEventListener("click", () => {
    const email = document.querySelector(".input-fieldEmail").value;
    const password = document.querySelector(".input-fieldPassword").value;
    try {
      if (register(email, password)) {
        alert("User registered successfully!");
        navigateTo2("/login");
      }
    } catch (error2) {
      switch (error2.message) {
        case "Invalid email":
          alert("Please enter a valid email.");
          break;
        case "Password must be at least 6 characters long":
          alert("Password must be at least 6 characters long.");
          break;
        case "User already exists":
          alert("This user is already registered. Please try logging in.");
          break;
        default:
          alert("An error occurred during registration");
      }
    }
  });
  containerContent.append(
    logo,
    inputName,
    inputApellidos,
    inputEmail,
    inputPass,
    buttonRegister,
    buttonReturn1
  );
  section1.append(
    title,
    containerContent,
    background
  );
  return section1;
}
const createDropdownMenu = () => {
  const nav = document.createElement("nav");
  nav.classList.add("menu");
  const asideMenu = document.createElement("aside");
  asideMenu.classList.add("sidebar-menu");
  asideMenu.innerHTML = `
    <div class="menu-title">Menu</div>
    <ul>
      <li id='home' class='home'>Home</li>
      <li id='search' class='search'>Search</li>
      <li id='notifications' class='notifications'>Notifications</li>
      <li id='profile' class='profile'>Profile</li>
      <li id='configuration' class='configuration'>Configuration</li>
    </ul>
  `;
  nav.appendChild(asideMenu);
  document.body.appendChild(nav);
  const menuTitle = asideMenu.querySelector(".menu-title");
  menuTitle.addEventListener("click", () => {
    asideMenu.classList.toggle("active");
  });
  return {
    navElement: nav,
    asideMenuElement: asideMenu
  };
};
const imagendesplegable = "/assets/bars-solid.58a93446.svg";
const user1 = "/assets/user1.9a7b892a.png";
const user2 = "/assets/user2.ed3be787.png";
const user3 = "/assets/user3.ee860230.png";
const experience1 = "/assets/experience1.e0ad3eae.jpg";
const like = "/assets/like.e78d7696.png";
const iconoDelete = "/assets/trash-can-regular.b4ab5cd0.svg";
const UserLogeado = () => !!localStorage.getItem("user");
const showConfirmationDialog = (message, callback) => {
  const modal = document.createElement("div");
  modal.className = "create-post-modal";
  const content = document.createElement("div");
  content.className = "modal-content";
  content.textContent = message;
  const confirmButton = document.createElement("button");
  confirmButton.classList.add("btn");
  confirmButton.textContent = "Confirm";
  const cancelButton = document.createElement("button");
  cancelButton.classList.add("btn");
  cancelButton.textContent = "Cancel";
  confirmButton.addEventListener("click", () => {
    document.body.removeChild(modal);
    callback(true);
  });
  cancelButton.addEventListener("click", () => {
    document.body.removeChild(modal);
    callback(false);
  });
  content.append(confirmButton, cancelButton);
  modal.append(content);
  document.body.appendChild(modal);
};
const createPostModal = () => {
  if (UserLogeado()) {
    const modal = document.createElement("div");
    modal.className = "create-post-modal";
    const content = document.createElement("div");
    content.className = "modal-content";
    const inputPost = document.createElement("input");
    inputPost.classList.add("input-field");
    const buttonPost = document.createElement("button");
    buttonPost.classList.add("btn");
    buttonPost.textContent = "Post";
    const postsList = document.createElement("ul");
    postsList.textContent = "Your Posts";
    postsList.className = "posts-list";
    const posts = getPosts();
    posts.forEach((post) => {
      const postItem = document.createElement("li");
      postItem.className = "li-posts";
      const postEmail = document.createElement("p");
      postEmail.className = "post-email";
      postEmail.textContent = post.email;
      const containerIcons = document.createElement("div");
      containerIcons.className = "container-btn";
      const postText = document.createElement("p");
      postText.textContent = post.content;
      const editBtn = document.createElement("img");
      editBtn.src = iconoDelete;
      editBtn.classList.add("edit");
      const deleteBtn = document.createElement("img");
      deleteBtn.src = iconoDelete;
      deleteBtn.classList.add("delete");
      editBtn.addEventListener("click", () => {
        const newContent = prompt("Edit your post:");
        if (newContent !== null) {
          editPost(post.id, newContent);
          postText.textContent = newContent;
        }
      });
      deleteBtn.addEventListener("click", () => {
        showConfirmationDialog("\xBFAre you sure you want to delete this post?", (confirmed) => {
          if (confirmed) {
            deletePost(post.id);
            postsList.removeChild(postItem);
          }
        });
      });
      containerIcons.append(editBtn, deleteBtn);
      postItem.append(postEmail, postText, containerIcons);
      postsList.appendChild(postItem);
    });
    buttonPost.addEventListener("click", () => {
      const userEmail = getLoggedInUser().email;
      const inputValue = inputPost.value;
      createPost(inputValue, userEmail);
      const newPostItem = document.createElement("li");
      postsList.appendChild(newPostItem);
      inputPost.value = "";
    });
    content.append(inputPost, buttonPost, postsList);
    modal.append(content);
    document.body.append(modal);
    const closeModal = () => {
      document.body.removeChild(modal);
    };
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
    return modal;
  }
  return null;
};
const logoutimg = "/assets/log-out.ca017e1b.svg";
const handleLoginClick = (event, navigateTo2) => {
  event.preventDefault();
  if (UserLogeado()) {
    logout();
    navigateTo2("/");
  } else {
    navigateTo2("/login");
  }
};
const createLoginArea = (navigateTo2) => {
  const login2 = document.createElement("div");
  login2.classList.add("login");
  const div4 = document.createElement("img");
  div4.src = logoutimg;
  div4.classList.add("log-out");
  const loginLink = document.createElement("a");
  loginLink.id = "login-link";
  loginLink.href = "";
  const updateLoginLink = () => {
    if (UserLogeado()) {
      loginLink.innerHTML = "Logout";
    } else {
      loginLink.innerHTML = "Login";
    }
  };
  updateLoginLink();
  div4.addEventListener("click", (event) => handleLoginClick(event, navigateTo2));
  login2.appendChild(div4);
  login2.appendChild(loginLink);
  return login2;
};
function publish(navigateTo2) {
  const section3 = document.createElement("section");
  const containerHeader = document.createElement("header");
  containerHeader.classList.add("header");
  const sandwich = document.createElement("img");
  const menuComponents = createDropdownMenu();
  sandwich.src = imagendesplegable;
  sandwich.classList.add("img-logo");
  const title = document.createElement("h2");
  title.textContent = "Arequipa 360";
  const postStart = document.createElement("div");
  postStart.classList.add("postInput");
  postStart.innerHTML = `

  <img src=${user1} class="user1" alt="user1">
  <input id="inputFeed" class="inputFeed" placeholder="Ali, let us to know about your experience">
  `;
  const postDefect1 = document.createElement("div");
  postDefect1.classList.add("idpost1");
  postDefect1.innerHTML = `
    <div id=1 class=post1>
      <img src=${user2} class="user2" alt="photo-user2">
      <p>Juan Rocas</p>
    </div>
    <div class="postDefect">
      <img src=${experience1} class="exp" alt="exp-user2">
      <p> We had an incredible 25th anniversary trip, planned by Elevate. Though we knew our itinerary, there were surprise experiences along the way as well, like interactions with the native people that were truly special..ver mas</p>
    </div>
    <div class="icono">
      <img id="like" src=${like} class="like" alt="like">
    </div>
  `;
  const postDefect2 = document.createElement("div");
  postDefect2.classList.add("idpost2");
  postDefect2.innerHTML = `
    <div id=2 class=post2>
      <img src=${user3} class="user3" alt="photo-user3">
      <p>Lola Morales</p>
    </div>
    <div class="postDefect">
      <img src=${experience1} class="exp" alt="exp-user2">
      <p> It is difficult to put into word the meaning of our trip to Peru. We feel so blessed to have spent time with so many wonderful people. It was the perfect balance of volunteering, getting to know the Peruvian culture...ver mas</p>
    </div>
    <div class="icono">
      <img id="like" src=${like} class="like" alt="like">
    </div>
  `;
  containerHeader.appendChild(sandwich);
  containerHeader.appendChild(createLoginArea(navigateTo2));
  containerHeader.appendChild(menuComponents.navElement);
  section3.appendChild(containerHeader);
  postStart.addEventListener("click", () => {
    createPostModal();
  });
  sandwich.addEventListener("click", () => {
    menuComponents.asideMenuElement.classList.toggle("open");
  });
  section3.append(postStart, postDefect1, postDefect2);
  return section3;
}
const root = document.getElementById("root");
const routes = [
  { path: "/", component: home },
  { path: "/login", component: createLogin },
  { path: "/error", component: error },
  { path: "/register", component: createRegisterForm },
  { path: "/publish", component: publish }
];
const defaultRoute = "/";
function navigateTo(hash) {
  const route = routes.find((routeFind) => routeFind.path === hash);
  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path
    );
    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo("/error");
  }
}
window.onpopstate = () => {
  navigateTo(window.location.pathname);
};
navigateTo(window.location.pathname || defaultRoute);
