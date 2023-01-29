import Atom, { atom } from "recoil";

export interface AuthModalState {
  open: boolean;
  view: "login" | "signup" | "resetPassword";
}

const defaultModalState: AuthModalState = {
  open: false,
  view: "login",
};

export const authModalStaea = atom<AuthModalState>({
  key: "authModalState",
  default: defaultModalState,
});
