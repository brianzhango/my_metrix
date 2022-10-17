import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CListGroup,
  CListGroupItem,
  CCardLink,
  CContainer,
  CRow,
  CCol,
  CLink,
  CButton,
} from "@coreui/react";

export function ShipmentDetail() {
  const [shipment, setShipment] = useState([]);

  const { job_number, ship_id } = useParams();

  const navigate = useNavigate()

  const {user} = useSelector((state) => state.auth)

  useEffect(() => {
    if(user == null)
    {
      navigate('/login')
    }
    else {
    axios
      .get(`/api/jobs/${job_number}/${ship_id}`, { headers: {
        'Authorization': 'Bearer ' + user.token
      }})
      .then((response) => setShipment(response.data[0]))
      
  }}, [ship_id]);

  console.log(shipment);

  // const shipments = shipment.map(item => {
  //         return (
  //             <ShipmentTable
  //                 key={item._id}
  //                 {...item}
  //             />
  //         )
  // })

  const vars = {
    textAlign: "center",
  };

  const TittleVars = {
    textAlign: "center",
    marginBottom: "0px",
  };

  const fontSize = {
    fontSize: "lager",
  };

  const color = {
    color: "white",
  };

  const padding = {
    paddingTop: "7px",
  };

  const margin = {
    marginBottom: "4px",
  };

  const pdfLink = `/api/upload/${ship_id}.pdf`

  // const handleClick = () => {

  //   navigate(`/jobs/${job_number}/${ship_id}/file`)

  // }
  return (
    // [shipments]
    // console.log("hey")
    // <ShipmentTable item = {shipment}/>
    <div>
      <CRow>
        <CCol></CCol>
        <CCol style={{ flex: "auto"}}>
        <CCard style={{ width: "23rem" }}>
          <CCardBody>
            <CCardTitle style={TittleVars}>
              <div style={margin}>Shipment ID</div>
              <strong style={fontSize}>{shipment.ship_id}</strong>
            </CCardTitle>
          </CCardBody>
          <CListGroup flush>
            <CListGroupItem>
              <CContainer style={vars}>
                <CRow>
                  <CCol>Ship Date </CCol>
                  <CCol></CCol>
                  <CCol>
                    <strong style={fontSize}>{shipment.ship_date} </strong>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer style={vars}>
                <CRow>
                  <CCol>Freighter </CCol>
                  <CCol></CCol>
                  <CCol>
                    <strong style={fontSize}>{shipment.freighter} </strong>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer style={vars}>
                <CRow>
                  <CCol>Tracking Number </CCol>
                  <CCol></CCol>
                  <CCol style={padding}>
                    <CLink href="https://coreui.io" target="_blank">
                      <strong>{shipment.track_number} </strong>
                    </CLink>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
          </CListGroup>
          <CCardBody style={vars}>
            <CButton style={color} color="info" size="lg" href={pdfLink}>
              Packing Slip PDF
            </CButton>
          </CCardBody>
        </CCard>
        </CCol>
        <CCol></CCol>
      </CRow>
    </div>
  );
}
