import { api } from "../api";

export const GetUserList = async() => {
  console.log("api.get")
  return api.get("https://randomuser.me/api/?results=20");
};
