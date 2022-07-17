import USER_DATA from "./USER_DATA.json";
import MOVIE_DATA from "./MOVIE_DATA.json";
import { User, Movie, CreateUserInput, UpdateUsernameInput } from "./types";
const _ = require("lodash");

const resolvers = {
  Query: {
    users: () => {
      return USER_DATA;
    },
    user: (parent: any, args: { id: string }) => {
      const id = args.id;
      const user = _.find(USER_DATA, { id: Number(id) });
      return user;
    },
    movies: () => {
      return MOVIE_DATA;
    },
    movie: (parent: any, args: { name: string }) => {
      const name = args.name;
      const movie = _.find(MOVIE_DATA, { name: String(name) });
      return movie;
    },
  },
  User: {
    latestMovie: (parent: any, args: { id: number }) => {
      const id = args.id;
      const user = _.find(USER_DATA, { id: Number(id) });
      return _.maxBy(user.movieLiked, "year");
    },
  },
  Mutation: {
    createUser(parent: any, args: { input: CreateUserInput }) {
      const user: User = {
        id: USER_DATA[USER_DATA.length - 1].id + 1,
        name: args.input.name,
        username: args.input.username,
        age: args.input.age!,
        height: args.input.height,
        isMarried: args.input.isMarried,
        nationality: args.input.nationality,
        friends: [],
        movieLiked: [],
      };

      console.log(user);
      console.log(typeof USER_DATA);
      USER_DATA.push(user);
      console.log(USER_DATA);
      return user;
    },

    updateUsername(parent: any, args: { input: UpdateUsernameInput }) {
      const { id, newUsername } = args.input;
      let userUpdated;
      USER_DATA.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = newUsername;
          userUpdated = user;
        }
      });
      return userUpdated;
    },

    deleteUser(parent: any, args: { id: number }) {
      const id = args.id;
      _.remove(USER_DATA, { id: Number(id) });
      return USER_DATA;
    },
  },
};

export { resolvers };
