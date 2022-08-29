import axios from 'axios';
export const getEmpolyeesApi=()=>
    axios.get("http://localhost:4002/empolyees");
