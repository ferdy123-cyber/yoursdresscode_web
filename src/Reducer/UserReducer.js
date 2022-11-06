const initialstate = {
  listAdmin: [],
  fetching: false,
  fetching2: false,
};

const UserReducer = (state = initialstate, action) => {
  if (action.type === "CHANGE_FETCHING_USER_REDUCER") {
    return {
      ...state,
      fetching: action.value,
    };
  }
  if (action.type === "CHANGE_FETCHING2_USER_REDUCER") {
    return {
      ...state,
      fetching2: action.value,
    };
  }
  if (action.type === "GET_LIST_ADMIN") {
    return {
      ...state,
      listAdmin: action.value,
    };
  }
  return state;
};

export default UserReducer;
