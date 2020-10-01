const initialState = {
  user: {},
  loading: false,
  error: "",
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN_REQUEST":
      state.loading = true;
      return { ...state };

    case "LOGIN_SUCCESS":
      state.loading = false;
      state.user = payload;
      console.log(state.user);
      return { ...state };

    case "LOGIN_FAIL":
      state.error = payload;
      state.loading = false;
      return { ...state };

    case "LOG_OUT":
      state.user = {};
      return { ...state };

    default:
      return { ...state };
  }
};

export default authReducer;
