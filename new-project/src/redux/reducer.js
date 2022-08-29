import { GET_EMPOLYEES, GET_EMPOLYEES_ERROR, GET_EMPOLYEES_SUCCESS } from "./actionTypes";

const inistialState={
    empolyees:[]
};

const empolyeeReducers=(state=inistialState,action)=>{
 switch(action.type){
    case GET_EMPOLYEES:
        return{
            ...state
        }
        case GET_EMPOLYEES_SUCCESS:
            return{
                ...state,
                empolyees:action.payload
            }
            case GET_EMPOLYEES_ERROR:
                return{
                    ...state,
               error:action.payload
                }
                default:
                    return state;
 }
}
export default empolyeeReducers;