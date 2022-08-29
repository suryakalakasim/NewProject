import { GET_EMPOLYEES, GET_EMPOLYEES_ERROR, GET_EMPOLYEES_SUCCESS } from "./actionTypes";
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