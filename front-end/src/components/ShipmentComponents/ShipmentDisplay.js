import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ShipmentTable } from "./ShipmentTable";

export function ShipmentDisplay() {
  const [shipment, setShipment] = useState([]);

  const { job_number } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/jobs/${job_number}`)
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
