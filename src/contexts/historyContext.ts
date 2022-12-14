import { createContext } from "react";
import { User } from "../types/user";

interface IUserContext {
  history: User.profile[];
  setHistory: CallableFunction;
}

export const HistoryContext = createContext<IUserContext>({
  history: [],
  setHistory: () => {
    return;
  },
});
