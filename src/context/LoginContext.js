import { createContext, useReducer } from "react";
export const LoginContext = createContext(null);
export const LoginDispatchContext = createContext(null);
const initialState = {
  name: "",
  username: "",
  password: "",
  email: "",
  aitoken: 0,
  isAuth: false,
  message: "Please Log In",
};

export const LoginProvider = ({ children }) => {
  const [login, dispatch] = useReducer(loginReducer, initialState);
  return (
    <LoginContext.Provider value={login}>
      <LoginDispatchContext.Provider value={dispatch}>
        <div>{children}</div>
      </LoginDispatchContext.Provider>
    </LoginContext.Provider>
  );
};

const loginReducer = (login, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...action.data.userObj,
        message: `Thank you for logging in ${action.data.userObj.username}`,
        token: action.data.token,
      };
    case "REGISTER":
      return {
        ...action.data,
        message: `Thank you for registering ${action.data.username}`,
      };
    case "LOGOUT":
      return {
        username: "",
        password: "",
      };
    case "ERROR":
      return {
        username: "",
        password: "",
        message: action.data.message,
      };
    case "DELETE":
      return {
        ...login,
        message: action.data.message,
      };
    default:
      alert("default");
      break;
  }
};
