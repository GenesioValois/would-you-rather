import history from "../../utils/browserHistory";
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export function signIn(id) {
  return {
    type: SIGN_IN,
    id,
  };
}

export function signOut() {
  history.push("/");
  return {
    type: SIGN_OUT,
  };
}
