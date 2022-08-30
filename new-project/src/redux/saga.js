import { GET_EMPOLYEES,CREATE_EMPOLYEES } from "./actionTypes";
import {takeLatest,put,call,fork,all, delay,} from "redux-saga/effects";
import { createEmpolyeesApi, getEmpolyeesApi } from "./api";
import { createEmpolyeesError, createEmpolyeesSuccess, getEmpolyeesError, getEmpolyeesSuccess } from "./action";
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
function* ongetEmpolyees(){
    yield takeLatest(GET_EMPOLYEES,ongetEmpolyeesAyc)
}
function* oncreateEmpolyees(){
  yield takeLatest(CREATE_EMPOLYEES,oncreateEmpolyeesAyc)
}
 
const empolyeeSaga=[
fork(ongetEmpolyees),
fork(oncreateEmpolyees)]


export default function* rootSaga(){
yield all ([...empolyeeSaga])
}