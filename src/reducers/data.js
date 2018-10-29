import { RECEIVE_API_DATA, DELETE_INBOX_MAIL } from "../actions/inbox.js";

let initialState = {};

export default (state = {}, action) => {
  console.log('this action ',action);
  switch (action.type) {
    
    case RECEIVE_API_DATA:
    console.log('inside receive api data',state)
    console.log('inside receive api data',action)
    
   return {...state ,['data']:action.payload}
      break;
    case DELETE_INBOX_MAIL:
    return {...state ,['data']:action.payload}
      break;

    default:
      return state;
  }
};
