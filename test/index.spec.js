// se importan las funciones de index.js
import {
  login,
  logout,
  register,
  getLoggedInUser,
  createPost,
  getPosts,
  editPost,
} from '../src/lib/index';

import { init } from '../src/lib/services';

// Configura el entorno simulado antes de cada prueba
beforeEach(() => {
  const users = [{ email: 'prueba@example.com', password: 'abcdefg' }];
  const loggedInUser = { email: 'prueba@example.com', password: 'abcdefg' };
  const posts = [
    { id: 'posta', content: 'contenidoa', email: 'prueba1@example.com' },
    { id: 'postb', content: 'contenidob', email: 'prueba2@example.com' },
  ];

  // Simula el objeto global con las propiedades necesarias
  global.localStorage = {
    getItem: jest.fn((key) => {
      switch (key) {
        case 'users':
          return JSON.stringify(users);
        case 'user':
          return JSON.stringify(loggedInUser);
        case 'posts':
          return JSON.stringify(posts);
        default:
          return null;
      }
    }),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };
});

// TEST para la función init
describe('init function', () => {
  it('Should clear the localStorage', () => {
    init();
    expect(localStorage.clear).toHaveBeenCalled();
  });
});

// TEST para la funcion de login
describe('Login function', () => {
  it('Should return true for valid credentials', () => {
    const result = login('prueba@example.com', 'abcdefg');

    expect(result).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('user', JSON.stringify({ email: 'prueba@example.com', password: 'abcdefg' }));
  });

  it('Should return undefined for invalid credentials', () => {
    const result = login('prueba@example.com', 'nopassword');
    expect(result).toBeUndefined();
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

  it('Should return false when there are no users', () => {
  // simula que no hay usuarios en localStorage
    localStorage.getItem.mockReturnValueOnce(null);

    const result = login('noemail@example.com', 'nopassword');

    expect(result).toBe(false);
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });
});

// TEST para la funcion logout
describe('Logout function', () => {
  it('Should remove user from localStorage', () => {
    // Se llama a la función que se quiere testear
    logout();

    // Se verifica que removeItem haya sido llamado con el argumento correcto
    expect(localStorage.removeItem).toHaveBeenCalledWith('user');
  });
});

// TEST para la funcion register
describe('Register function', () => {
  it('Should register a new user', () => {
    localStorage.getItem.mockReturnValueOnce(null); // No hay usuarios previamente registrados
    const result = register('prueba@example.com', 'abcdefg');
    expect(result).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('users', JSON.stringify([{ email: 'prueba@example.com', password: 'abcdefg' }]));
  });

  it('Should throw an error with an invalid email', () => {
    expect(() => {
      register('otheremail', 'abcdefg3');
    }).toThrow('Invalid email');
  });

  it('Should throw an error with a short password', () => {
    expect(() => {
      register('prueba@example.com', 'hola');
    }).toThrow('Password must be at least 6 characters long');
  });

  it('Should throw an error if user already exists', () => {
    localStorage.getItem.mockReturnValueOnce(JSON.stringify([{ email: 'prueba@example.com', password: 'abcdefg' }]));
    expect(() => {
      register('prueba@example.com', 'abcdefg');
    }).toThrow('User already exists');
  });
});

// TEST para la funcion getLoggedInUser
describe('getLoggedInUser function', () => {
  it('Should return the logged-in user if it exists', () => {
    const result = getLoggedInUser();
    expect(result).toEqual({ email: 'prueba@example.com', password: 'abcdefg' });
  });

  it('Should return null if no user is logged in', () => {
    localStorage.getItem.mockReturnValueOnce(null);
    const result = getLoggedInUser();
    expect(result).toBeNull();
  });
});

// TEST para la funcion createPost
describe('createPost function', () => {
  it('Should create a post successfully', () => {
    const id = createPost('validpost', 'prueba@example.com');
    expect(typeof id).toBe('string');
    expect(id.length).toBeGreaterThan(0);

    const existingPosts = [
      { id: 'posta', content: 'contenidoa', email: 'prueba1@example.com' },
      { id: 'postb', content: 'contenidob', email: 'prueba2@example.com' },
    ];

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'posts',
      JSON.stringify([...existingPosts, { id, content: 'validpost', email: 'prueba@example.com' }]),
    );
  });

  it('Should trow an error woth too short content', () => {
    expect(() => {
      createPost('', 'test@example.com');
    }).toThrow('Content must be at least 1 character long');
  });

  it('Should throw an error with an invalid email', () => {
    expect(() => {
      createPost('validcontent', 'noemail');
    }).toThrow('Invalid email');
  });

  it('Should save posts to localStorage', () => {
    const beforePosts = [{
      id: 'anID',
      content: 'beforecontent',
      email: 'before@example.com',
    }];
    localStorage.getItem.mockReturnValueOnce(JSON.stringify(beforePosts));

    const id = createPost('validcontenta', 'prueba@example.com');
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'posts',
      JSON.stringify([...beforePosts, { id, content: 'validcontenta', email: 'prueba@example.com' }]),
    );
  });
});

// TEST para la funcion getPosts
describe('getPosts function', () => {
  it('Should return an empty array if there are no posts in localStorage', () => {
    // Mock para simular que no hay posts en localStorage
    localStorage.getItem.mockReturnValueOnce(null);

    const result = getPosts();
    expect(result).toEqual([]);
  });

  it('Should return an array of posts if they exist in localStorage', () => {
    const mockPosts = [
      { id: 'posta', content: 'contenidoa', email: 'prueba1@example.com' },
      { id: 'postb', content: 'contenidob', email: 'prueba2@example.com' },
    ];

    localStorage.getItem.mockReturnValueOnce(JSON.stringify(mockPosts));

    const result = getPosts();
    expect(result).toEqual(mockPosts);
  });
});

// TEST para la funcion editPost
describe('editPost function', () => {
  it('Should throw an error with too short content', () => {
    expect(() => {
      editPost('someID', '');
    }).toThrow('Content must be at least 1 character long');
  });

  it('Should throw an error if there are no post in localStorage', () => {
    localStorage.getItem.mockReturnValueOnce(null);
    expect(() => {
      editPost('someID', 'Valid content');
    }).toThrow('Post does not exist');
  });

  it('Should throw an error if the post to edit does not exist', () => {
    const mockPosts = [
      { id: 'post1', content: 'Test content 1', email: 'prueba1@example.com' },
      { id: 'post2', content: 'Test content 2', email: 'prueba2@example.com' },
    ];
    localStorage.getItem.mockReturnValueOnce(JSON.stringify(mockPosts));

    expect(() => {
      editPost('nonExistentID', 'Valid content');
    }).toThrow('Post does not exist');
  });

  it('Should edit the post content correctly', () => {
    const mockPosts = [
      { id: 'post1', content: 'Test content 1', email: 'prueba1@example.com' },
      { id: 'post2', content: 'Test content 2', email: 'prueba2@example.com' },
    ];
    const updatedContent = 'Updated content for post1';
    localStorage.getItem.mockReturnValueOnce(JSON.stringify(mockPosts));

    editPost('post1', updatedContent);

    const updatedPosts = [
      { id: 'post1', content: updatedContent, email: 'prueba1@example.com' },
      { id: 'post2', content: 'Test content 2', email: 'prueba2@example.com' },
    ];
    expect(localStorage.setItem).toHaveBeenCalledWith('posts', JSON.stringify(updatedPosts));
  });
});
