import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { deleteEmpolyees, getEmpolyees } from '../redux/action';
import {Card,CardHeader,ListGroup,ListGroupItem,Button} from 'reactstrap';
function Index() {
    const empolyeeData=useSelector(state=>state.empolyees);
    console.log("EMPOLYEEDATA",empolyeeData)
    const dispatch=useDispatch();
useEffect(()=>{
dispatch(getEmpolyees)
},[]);
const handelDelete=(id)=>{
  dispatch(deleteEmpolyees(id))
};

  return (
    <div>
        {/* <center> */}
            {empolyeeData.length>0&&empolyeeData?empolyeeData.map((x,i)=><Card key={i} style={{ width: '18rem',marginTop:"5px",display:'inline-block',marginLeft:"5px"}}>
            <CardHeader>
    Id:{i+1}
  </CardHeader>
  <ListGroup flush>
    <ListGroupItem>
      Name:{x.name}
    </ListGroupItem>
    <ListGroupItem>
     Mobile: {x.mobile}
    </ListGroupItem>
    <ListGroupItem>
      Email:{x.email}
    </ListGroupItem>
    <ListGroupItem>
      Company:{x.company}
    </ListGroupItem>
    <ListGroupItem>
    <Button color="danger" onClick={()=>handelDelete(x.id)}>
    deleteEmpolyee
  </Button>
    </ListGroupItem>
  </ListGroup>

            </Card>):<h3>data not found</h3>}
{/* </center> */}
    </div>
  )
}

export default Index