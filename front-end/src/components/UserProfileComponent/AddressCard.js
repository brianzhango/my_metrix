import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  CCard,
  CCardBody,
  CListGroup,
  CListGroupItem,
  CContainer,
  CRow,
  CCol,
  CFormInput,
} from "@coreui/react";

export function AddressCard() {

    const {user} = useSelector((state) => state.auth)

    const [address, setAddress] = useState([]);

    const navigate = useNavigate()

    const { user_id } = useParams();

    useEffect(() => {
        if(user == null)
        {
          navigate('/login')
        }
        else {
        axios
          .get(`/api/users/${user_id}`, { headers: {
            'Authorization': 'Bearer ' + user.token
          }})
          .then((response) => setAddress(response.data))

      }}, [user_id]);

      console.log(address)

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
      
    return(
        <>
        <CRow>
        <CCard>
          <CListGroup flush>
            <CListGroupItem>
              <CContainer style={vars}>
                <CRow>
                  <CCol>
                    <CFormInput type="text" value={address.unit_num} placeholder="Unit Number" readOnly></CFormInput>
                  </CCol>
                  <CCol>
                    <CFormInput type="text" value={address.street_num} placeholder="Street Number" readOnly></CFormInput>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer style={vars}>
                <CRow>
                  <CCol>
                    <CFormInput type="text" value={address.street_name} placeholder="Street Name" readOnly></CFormInput>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer style={vars}>
                <CRow>
                  <CCol>
                    <CFormInput type="text" value={address.suburb} placeholder="Suburb" readOnly></CFormInput>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer style={vars}>
                <CRow>
                  <CCol>
                    <CFormInput type="text" value={address.state} placeholder="State" readOnly></CFormInput>
                  </CCol>
                  <CCol>
                    <CFormInput type="text" value={address.postcode} placeholder="Postcode" readOnly></CFormInput>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer style={vars}>
                <CRow>
                  <CCol>
                    <CFormInput type="text" value={address.country} placeholder="Country" readOnly></CFormInput>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
          </CListGroup>
        </CCard>
        </CRow>
        
        </>
    )
}