import { CREATE_EMPOLYEES, CREATE_EMPOLYEES_ERROR, CREATE_EMPOLYEES_SUCCESS, GET_EMPOLYEES, GET_EMPOLYEES_ERROR, GET_EMPOLYEES_SUCCESS } from "./actionTypes";
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