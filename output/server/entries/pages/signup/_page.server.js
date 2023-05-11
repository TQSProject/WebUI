import { r as redirect } from "../../../chunks/index.js";
const actions = {
  default: async () => {
    console.log("Here");
    await new Promise((r) => setTimeout(r, 2e3));
    throw redirect(303, "/");
  }
};
export {
  actions
};
