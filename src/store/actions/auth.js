import history from "../../utils/browserHistory";
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export function signIn(id) {
  localStorage.setItem("user_id", id);
  history.push("/home");
  return {
    type: SIGN_IN,
    id,
  };
}

export function signOut() {
  localStorage.removeItem("user_id");
  history.push("/");
  return {
    type: SIGN_OUT,
  };
}
