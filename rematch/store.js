import { init } from "@rematch/core";
import { users } from "./models";
// import * as models from "./models";

const store = init({
  models: {
    users,
  },
});
export default store;
