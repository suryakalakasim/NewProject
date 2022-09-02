import { CREATE_EMPOLYEES, CREATE_EMPOLYEES_ERROR, CREATE_EMPOLYEES_SUCCESS, DELETE_EMPOLYEES, DELETE_EMPOLYEES_ERROR, DELETE_EMPOLYEES_SUCCESS, GET_EMPOLYEES, GET_EMPOLYEES_ERROR, GET_EMPOLYEES_SUCCESS } from "./actionTypes";

const inistialState={
    empolyees:[],
    loading:true
};

const empolyeeReducers=(state=inistialState,action)=>{
 switch(action.type){
    case GET_EMPOLYEES:
    case CREATE_EMPOLYEES:
     case DELETE_EMPOLYEES:       
        return{
            ...state,
            loading:true
        }
        case GET_EMPOLYEES_SUCCESS:
         case CREATE_EMPOLYEES_SUCCESS:   
            return{
                ...state,
                empolyees:action.payload,
            }
            case DELETE_EMPOLYEES_SUCCESS:
                return{
                    ...state,
                    loading:false,
                   empolyees:state.empolyees.filter((item) => item.id !== action.payload )
                }
            case GET_EMPOLYEES_ERROR:
                case CREATE_EMPOLYEES_ERROR:
                case DELETE_EMPOLYEES_ERROR:    
                return{
                    ...state,
               error:action.payload
                }
                default:
                    return state;
 }
}
export default empolyeeReducers;