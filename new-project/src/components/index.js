import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getEmpolyees } from '../redux/action';
import {Card,CardHeader,ListGroup,ListGroupItem} from 'reactstrap';
function Index() {
    const empolyeeData=useSelector(state=>state.empolyees);
    console.log("EMPOLYEEDATA",empolyeeData)
    const dispatch=useDispatch();
useEffect(()=>{
dispatch(getEmpolyees)
},[])
  return (
    <div>
        <center>
            {empolyeeData.length>0&&empolyeeData?empolyeeData.map((x,i)=><Card key={i} style={{ width: '18rem',marginTop:"5px" }}>
            <CardHeader>
    Id:{x.id}
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
  </ListGroup>

            </Card>):<h3>data not found</h3>}
</center>
    </div>
  )
}

export default Index