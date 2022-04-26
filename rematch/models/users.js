const users = {
  state: {
    users: [],
    loading: false,
  }, // initial state
  reducers: {
    requestUsers(state) {
      return {
        users: [],
        loading: true,
      };
    },
    receiveUsers(state, payload) {
      return {
        loading: false,
        users: payload,
      };
    },
    addUser(state, payload) {
      return {
        ...state,
        users: [payload, ...state.users],
      };
    },
    removeUser(state, payload) {
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload.id),
      };
    },
  },
  effects: {
    // handle state changes with impure functions.
    // use async/await for async actions
    async fetchUsers() {
      try {
        this.requestUsers();
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        this.receiveUsers(users);
        return users;
      } catch (err) {
        // console.log(err);
        this.receiveUsers([]);
      }
    },
  },
};

export default users;
