const login = (user) => (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST", payload: null });

  try {
    if (!user.mail || !user.pass) {
      dispatch({ type: "LOGIN_FAIL", payload: "you need email and password" });
      return;
    }
  } catch (err) {
    console.log(err.message);
  }

  dispatch({ type: "LOGIN_SUCCESS", payload: user });
};

const logout = () => (dispatch) => {
  dispatch({ type: "LOG_OUT", payload: null });
};

export const authAction = {
  login,
  logout,
};
