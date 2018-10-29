import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiData } from "../actions/inbox";
import { REQUEST_INBOX_DATA, receiveInboxData } from "../actions/inboxMail";
//import { fetchData } from "../apis/api";

const fetchInbox = async () => {
  try {
    console.log('inside fetch inbox');  
    const response = await fetch("http:/localhost:3000/data/inbox.json");
    //const data = await response.json();
  const data =[

      {"Subject":"Hello from toronto","id":0,"msg":"Hey, I just wanted to check in with you from Toronto. I got here earlier today.","from":"Dave"},
      {"Subject":"Hello from toronto","id":1,"msg":"Hey, I just wanted to check in with you from Toronto. I got here earlier today.","from":"Dave"},
      {"Subject":"Hello from toronto","id":2,"msg":"Hey, I just wanted to check in with you from Toronto. I got here earlier today.","from":"Dave"},
      {"Subject":"Hello from toronto","id":3,"msg":"Hey, I just wanted to check in with you from Toronto. I got here earlier today.","from":"Dave"},
      {"Subject":"Hello from toronto","id":4,"msg":"Hey, I just wanted to check in with you from Toronto. I got here earlier today.","from":"Dave"},
      {"Subject":"Hello from toronto","id":4,"msg":"Hey, I just wanted to check in with you from Toronto. I got here earlier today.","from":"Dave1"}
      
      
    ]
    console.log('inside fetch inbox')
    return data;
  } catch (e) {
    console.log(e);
  }
};

const fetchInboxData = async id => {
  try {
    const response = await fetch("" + id);
    const inboxData = await response.json();
    return inboxData;
  } catch (e) {
    console.log(e);
  }
};

function* getApiData(action) {
  try {
    console.log('inside get api data of saga')
    // do api call
    const data = yield call(fetchInbox);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

function* getInboxData(action) {
  try {
    // do api call
    const inboxData = yield call(fetchInboxData, action.payload);
    yield put(receiveInboxData(inboxData));
  } catch (e) {
    console.log(e);
  }
}
export function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}

export function* myInbox() {
  yield takeLatest(REQUEST_INBOX_DATA, getInboxData);
}
