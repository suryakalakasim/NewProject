import { GET_EMPOLYEES } from "./actionTypes";
import {takeLatest,put,call,fork,all, delay,} from "redux-saga/effects";
import { getEmpolyeesApi } from "./api";
import { getEmpolyeesError, getEmpolyeesSuccess } from "./action";
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
}
function* ongetEmpolyees(){
    yield takeLatest(GET_EMPOLYEES,ongetEmpolyeesAyc)
}
 
const empolyeeSaga=[
fork(ongetEmpolyees)]


export default function* rootSaga(){
yield all ([...empolyeeSaga])
}