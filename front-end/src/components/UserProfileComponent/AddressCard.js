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

    let address = JSON.parse(localStorage.getItem('address'))

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
        <CCard style={{'maxWidth':'700px'}}>
          <CListGroup flush>
            <CListGroupItem>
              <CContainer>
                <CRow>
                  <CCol>
                    <label className="form-label" style={{'fontWeight':'bold'}}>Unit Number</label>
                    <CFormInput type="text" value={address.unit_num} placeholder="Unit Number" readOnly></CFormInput>
                  </CCol>
                  <CCol>
                    <label className="form-label" style={{'fontWeight':'bold'}}>Street Number</label>
                    <CFormInput type="text" value={address.street_num} placeholder="Street Number" readOnly></CFormInput>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer>
                <CRow>
                  <CCol>
                    <label className="form-label" style={{'fontWeight':'bold'}}>Street Name</label>
                    <CFormInput type="text" value={address.street_name} placeholder="Street Name" readOnly></CFormInput>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer>
                <CRow>
                  <CCol>
                    <label className="form-label" style={{'fontWeight':'bold'}}>Suburb</label>
                    <CFormInput type="text" value={address.suburb} placeholder="Suburb" readOnly></CFormInput>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer>
                <CRow>
                  <CCol>
                    <label className="form-label" style={{'fontWeight':'bold'}}>State</label>
                    <CFormInput type="text" value={address.state} placeholder="State" readOnly></CFormInput>
                  </CCol>
                  <CCol>
                    <label className="form-label" style={{'fontWeight':'bold'}}>Postcode</label>
                    <CFormInput type="text" value={address.postcode} placeholder="Postcode" readOnly></CFormInput>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer>
                <CRow>
                  <CCol>
                    <label className="form-label" style={{'fontWeight':'bold'}}>Country</label>
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