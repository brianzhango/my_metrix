import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ShipmentTable } from "./ShipmentTable";
import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

export function ShipmentDisplay() {
  const [shipment, setShipment] = useState([]);

  const { job_number } = useParams()

  const navigate = useNavigate()

  const {user} = useSelector((state) => state.auth)

  
  useEffect(() => {
    if(user == null)
    {
      navigate('/login')
    }
    else {
    axios
      .get(`/api/jobs/${job_number}`, { headers: {
        'Authorization': 'Bearer ' + user.token
      }})
      .then((response) => setShipment(response.data))
      .catch(error => {
        console.log(error.response)});
      }
      console.log(shipment)
    }, [job_number]);
  

 

  // const shipments = shipment.map(item => {
  //         return (
  //             <ShipmentTable
  //                 key={item._id}
  //                 {...item}
  //             />
  //         )
  // })

  return (
    // [shipments]
    // console.log("hey")
    <ShipmentTable item={shipment} />
  );
}
