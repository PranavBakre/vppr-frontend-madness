import { useCallback } from "react";
import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const initState = {};

function authReducer(state, action) {
  let newState = undefined;
  switch (action.type) {
    case "REFRESH":
      newState = JSON.parse(localStorage.getItem("vppr"));
      if (newState) {
        const { accessToken, expiry } = newState;
        if (expiry && new Date(expiry) > new Date()) {
          return { accessToken, expiry, isLoggedIn: true };
        } else {
          localStorage.removeItem("vppr");
        }
      }
      return {};

    case "LOGIN":
      const { access_token, expiry } = action.payload;
      newState = {
        accessToken: access_token,
        isLoggedIn: true,
        expiry,
      };
      localStorage.setItem("vppr", JSON.stringify(newState));
      return newState;
    case "LOGOUT":
      localStorage.removeItem("vppr");
      return {};
    case "FETCH_USER_SELF":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [authState, dispatch] = useReducer(authReducer, initState);
  const refresh = useCallback(() => {
    dispatch({ type: "REFRESH" });
  }, [dispatch]);
  const login = useCallback(
    (token) => {
      dispatch({
        type: "LOGIN",
        payload: token,
      });
    },
    [dispatch]
  );
  const logout = useCallback(() => {
    dispatch({
      type: "LOGOUT",
    });
  }, [dispatch]);

  const fetchUserSelf = useCallback(
    (user) => {
      dispatch({
        type: "FETCH_USER_SELF",
        payoad: user,
      });
    },
    [dispatch]
  );

  return (
    <AuthContext.Provider
      value={{ authState, login, logout, fetchUserSelf, refresh }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthProvider not present");
  }
  return context;
}
