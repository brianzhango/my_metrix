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

    let address = JSON.parse(localStorage.getItem('profile'))

    
      const labelWeight = {
        fontWeight: "bold",
      };
    
      
    return(
        <>
        <CRow>
        <CCard style={{'maxWidth':'700px'}}>
          <CListGroup flush>
            <CListGroupItem>
              <CContainer>
                <CRow>
                  <CCol>
                    <label className="form-label" style={labelWeight}>Unit Number</label>
                    <CFormInput type="text" value={address[0].unit_num} placeholder="Unit Number" readOnly></CFormInput>
                  </CCol>
                  <CCol>
                    <label className="form-label" style={labelWeight}>Street Number</label>
                    <CFormInput type="text" value={address[0].street_num} placeholder="Street Number" readOnly></CFormInput>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer>
                <CRow>
                  <CCol>
                    <label className="form-label" style={labelWeight}>Street Name</label>
                    <CFormInput type="text" value={address[0].street_name} placeholder="Street Name" readOnly></CFormInput>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer>
                <CRow>
                  <CCol>
                    <label className="form-label" style={labelWeight}>Suburb</label>
                    <CFormInput type="text" value={address[0].suburb} placeholder="Suburb" readOnly></CFormInput>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer>
                <CRow>
                  <CCol>
                    <label className="form-label" style={labelWeight}>State</label>
                    <CFormInput type="text" value={address[0].state} placeholder="State" readOnly></CFormInput>
                  </CCol>
                  <CCol>
                    <label className="form-label" style={labelWeight}>Postcode</label>
                    <CFormInput type="text" value={address[0].postcode} placeholder="Postcode" readOnly></CFormInput>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer>
                <CRow>
                  <CCol>
                    <label className="form-label" style={labelWeight}>Country</label>
                    <CFormInput type="text" value={address[0].country} placeholder="Country" readOnly></CFormInput>
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