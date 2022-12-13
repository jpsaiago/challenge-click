import { createContext } from "react";
import { User } from "../types/user";

interface IUserContext {
  profile: User.profile | null;
  setProfile: CallableFunction;
}

export const UserContext = createContext<IUserContext>({
  profile: null,
  setProfile: () => {
    return;
  },
});
