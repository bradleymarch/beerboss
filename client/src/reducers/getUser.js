const initialState = {
  user: {},

};

const getUserReducer = (state=initialState, action) => {
  if (action.type === 'GET_LOGGEDIN_USER') {

    return {
      ...state,
      user: action.user
    }
  }
  else {
    return state;
  }
};

export default getUserReducer
