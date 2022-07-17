interface User {
  id: number;
  name: string;
  username: string;
  age: number;
  height: number;
  isMarried: boolean;
  nationality: string;
  friends: Array<User>;
  movieLiked: Array<Movie>;
}

interface CreateUserInput {
  name: string;
  username: string;
  age?: number;
  height: number;
  isMarried: boolean;
  nationality: string;
}

interface UpdateUsernameInput {
  id: number;
  newUsername: string;
}

interface DeleteUserInput {}

interface Movie {
  id: number;
  name: string;
  year: number;
  isInTheater: boolean;
}

export { User, Movie, CreateUserInput, UpdateUsernameInput };
