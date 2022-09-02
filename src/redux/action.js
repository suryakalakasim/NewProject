import { CREATE_EMPOLYEES, CREATE_EMPOLYEES_ERROR, CREATE_EMPOLYEES_SUCCESS, DELETE_EMPOLYEES, DELETE_EMPOLYEES_ERROR, DELETE_EMPOLYEES_SUCCESS, GET_EMPOLYEES, GET_EMPOLYEES_ERROR, GET_EMPOLYEES_SUCCESS } from "./actionTypes";
 export const getEmpolyees=({
    type:GET_EMPOLYEES
 });
 export const getEmpolyeesSuccess=(empolyees)=>({
    type:GET_EMPOLYEES_SUCCESS,
    payload:empolyees
 });
 export const getEmpolyeesError=(error)=>({
    type:GET_EMPOLYEES_ERROR,
    payload:error
 });
 export const createEmpolyees=(empolyee)=>({
  type:CREATE_EMPOLYEES,
  payload:empolyee
 });
 export const createEmpolyeesSuccess=(empolyees)=>({
type:CREATE_EMPOLYEES_SUCCESS,
payload:empolyees
 });
 export const createEmpolyeesError=(error)=>({
  type:CREATE_EMPOLYEES_ERROR,
  payload:error
 });
 export const deleteEmpolyees=(id)=>({
   type:DELETE_EMPOLYEES,
   payload:id
  });
  export const deleteEmpolyeesSuccess=(empolyeeId)=>({
 type:DELETE_EMPOLYEES_SUCCESS,
 payload:empolyeeId
  });
  export const deleteEmpolyeesError=(error)=>({
   type:DELETE_EMPOLYEES_ERROR,
   payload:error
  });