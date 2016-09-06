const initialState = {
  isLoggedIn: false,
};

export function user(state = initialState, action) {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
}
