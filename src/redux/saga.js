import { GET_EMPOLYEES,CREATE_EMPOLYEES, DELETE_EMPOLYEES } from "./actionTypes";
import {takeLatest,put,call,fork,all, delay,take} from "redux-saga/effects";
import { createEmpolyeesApi, deleteEmpolyeesApi, getEmpolyeesApi } from "./api";
import { createEmpolyeesError, createEmpolyeesSuccess, deleteEmpolyeesError, deleteEmpolyeesSuccess, getEmpolyeesError, getEmpolyeesSuccess } from "./action";
function*ongetEmpolyeesAyc(){
  try{
    const response=yield call (getEmpolyeesApi);
    console.log("response>>",response)
    if(response.status===200){
        yield delay (500);
        yield put (getEmpolyeesSuccess(response.data))
    }
  }
  catch(error){
   yield put (getEmpolyeesError(error))
  }
};
function*oncreateEmpolyeesAyc({payload}){
   //const values={id:1, name: '', mobile: '', email: '',company:"" }
  try{
    const response=yield call (createEmpolyeesApi,payload);
    console.log("response>>",response)
    if(response.status===200){
        yield put (createEmpolyeesSuccess(response.data))
    }
  }
  catch(error){
   yield put (createEmpolyeesError(error))
  }
}
function*ondeleteEmpolyeesAyc (userId) {
  try {
    const response = yield call(deleteEmpolyeesApi, userId);
    if (response.status === 200) {
      yield delay(500);
      yield put(deleteEmpolyeesSuccess(userId));
    }
  } catch (error) {
    yield put(deleteEmpolyeesError(error));
  }
}


function* ongetEmpolyees(){
    yield takeLatest(GET_EMPOLYEES,ongetEmpolyeesAyc)
}
function* oncreateEmpolyees(){
  yield takeLatest(CREATE_EMPOLYEES,oncreateEmpolyeesAyc)
}
function* ondeleteEmpolyees(){
  while(true){
    const { payload: id } = yield take(DELETE_EMPOLYEES);
    yield call(ondeleteEmpolyeesAyc, id);
  }
}
 
const empolyeeSaga=[
fork(ongetEmpolyees),
fork(oncreateEmpolyees),
fork(ondeleteEmpolyees)]


export default function* rootSaga(){
yield all ([...empolyeeSaga])
}