import axios from 'axios';
export const getEmpolyeesApi=()=>
    axios.get("http://localhost:4002/empolyees");
    export const createEmpolyeesApi=(empolyee)=>
    axios.post("http://localhost:4002/empolyees",empolyee)
