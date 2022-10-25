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

export function ProfileCard() {

    const {user} = useSelector((state) => state.auth)

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
      
      const fullName = `${user.fName} ${user.lName}`

    return(
        <>
        <CRow>
        <CCard style={{'maxWidth':'700px'}}>
          <CListGroup flush>
            <CListGroupItem>
              <CContainer >
                <CRow>
                  <CCol>
                    <CFormInput label="First Name" type="text" value={user.fName} placeholder="First Name" readOnly></CFormInput>
                  </CCol>
                  <CCol>
                    <CFormInput label="Last Name" type="text" value={user.lName} placeholder="Last Name" readOnly></CFormInput>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer>
                <CRow>
                  <CCol>
                    <CFormInput label="Department" type="text" value={user.department} placeholder="Department" readOnly></CFormInput>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer>
                <CRow>
                  <CCol>
                    <CFormInput label="Company" type="text" value={user.company} placeholder="Company" readOnly></CFormInput>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer>
                <CRow>
                  <CCol>
                    <CFormInput label="Mobile Phone" type="text" value={user.phone} placeholder="Mobile Phone" readOnly></CFormInput>
                  </CCol>
                  <CCol>
                    <CFormInput label="Work Phone" type="text" value={user.workPhone} placeholder="Work Phone" readOnly></CFormInput>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer>
                <CRow>
                  <CCol>
                    <CFormInput label="Email" type="text" value={user.email} placeholder="Email" readOnly></CFormInput>
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