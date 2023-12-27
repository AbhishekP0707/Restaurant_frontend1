import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';



function ViewRest() {
  const[resDetails,setDetails]=useState({})
  //useParams - used to get path parameter from the url

  // const paraId=useParams()
  // console.log(paraId.id); //object->id=1/2/3...

  //destructure

  const {id}=useParams()
  console.log(id);//object-> id=1/2/3/...

  //API call to get details of the particular restaurant using the parameter

  const  base_url='https://restaurant-backend-g85j.onrender.com/restaurants'



  const fetchRest=async()=>{
    //http://localhost:3001/restaurants/4
    const result=await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setDetails(result.data);
  }

  useEffect(()=>{
    fetchRest()
  },[])


  return (
    <div>
      <Row>
        <Col>
        <img src={resDetails.photograph} alt="" style={{widt:'450px',height:'500px',margin:'40px'}} />
        </Col>
        <Col>
        <div class="container my-5 p-5">
        <ListGroup >
          <h1 className='text-center'>{resDetails.name}</h1>
       
        <ListGroup.Item >Address : {resDetails.address}</ListGroup.Item>
        <ListGroup.Item>Neighborhood : {resDetails.neighborhood}</ListGroup.Item>
        <ListGroup.Item >Cuisine : {resDetails.cuisine_type}</ListGroup.Item>
        <ListGroup.Item ><RestOp op={resDetails.operating_hours}/></ListGroup.Item>
        <ListGroup.Item ><RestReview review={resDetails.reviews}/></ListGroup.Item>
        </ListGroup>
        </div>
        </Col>
      </Row>
    </div>
  )
}

export default ViewRest