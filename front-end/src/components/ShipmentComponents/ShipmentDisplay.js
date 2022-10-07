import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ShipmentTable } from "./ShipmentTable";
import { useSelector} from "react-redux";

export function ShipmentDisplay() {
  const [shipment, setShipment] = useState([]);

  const { job_number } = useParams();


  const {user} = useSelector((state) => state.auth)

  useEffect(() => {
    axios
      .get(`http://localhost:8082/jobs/${job_number}`, { headers: {
        'Authorization': 'Bearer ' + user.token
      }})
      .then((response) => setShipment(response.data));
  }, [0]);

  console.log(shipment);

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
