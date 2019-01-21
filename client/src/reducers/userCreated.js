const initialState = {
  userCreatedSuccess: false,

};

const userCreatedReducer = (state=initialState, action) => {
  if (action.type === 'REGISTER_USER_SUCCESS') {

    return {
      ...state,

      userCreatedSuccess: true,
    }
  }
  else {
    return state;
  }
};

export default userCreatedReducer
