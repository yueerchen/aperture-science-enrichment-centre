import axios from "axios";
import jwt from "jwt-decode";

export function login(username, password) {
  return axios.post("/auth/login", { username, password }).then(res => {
    const token = res.data.access_token;
    localStorage.setItem("jwt_token", token);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.jwt_token}`;
    return token;
  });
}

export function logout() {
  localStorage.removeItem("jwt_token");
}

export function isLogin() {
  let token = localStorage.jwt_token;
  // check token expire
  // jwt_decode(token).exp
  if (token) {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.jwt_token}`;
  }
  return !!token;
}

export function isGLaDOS() {
  let isGLaDOS = false;
  if (jwt(localStorage.jwt_token).role === "GLaDOS") {
    isGLaDOS = true;
  }
  return !!isGLaDOS;
}

export function isSubject() {
  let isSubject = false;
  if (jwt(localStorage.jwt_token).role === "Subject") {
    isSubject = true;
  }
  return !!isSubject;
}
