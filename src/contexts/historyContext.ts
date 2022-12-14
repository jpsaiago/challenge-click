import { createContext } from "react";
import { User } from "../types/user";

interface IUserContext {
  history: User.profile[] | null;
  setHistory: CallableFunction;
}

export const HistoryContext = createContext<IUserContext>({
  history: null,
  setHistory: () => {
    return;
  },
});
