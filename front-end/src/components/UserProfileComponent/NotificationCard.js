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
  CFormLabel,
  CFormCheck,
  CButton
} from "@coreui/react";

export function NotificationCard() {

    const vars = {
        textAlign: "center",
      };
      
    const checkBoxStyle = {
        marginTop:'7px', 
        width:'1.5em',
        height:'1.5em'
    };

    return(
        <>
        <CRow>
        <CCard style={{'maxWidth':'700px'}}>
          <CListGroup flush>
            <CListGroupItem>
              <CContainer style={vars}>
              <CRow>
                  <CCol></CCol>
                  <CCol>
                    <p>Email</p>
                  </CCol>
                  <CCol>
                    <p>SMS</p>
                  </CCol>
                </CRow>
              <hr style={{'borderColor':'rgb(51, 153, 255)', 'borderWidth':'3px', 'marginTop': '0'}}></hr>
                <CRow>
                  <CCol>
                    <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">Order Received</CFormLabel>
                  </CCol>
                  <CCol>
                    <CFormCheck id="flexCheckDefault" style={checkBoxStyle}/>
                  </CCol>
                  <CCol>
                    <CFormCheck id="flexCheckDefault" style={checkBoxStyle}/>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer style={vars}>
              <CRow>
                  <CCol>
                    <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">Drafting</CFormLabel>
                  </CCol>
                  <CCol>
                    <CFormCheck id="flexCheckDefault" style={checkBoxStyle}/>
                  </CCol>
                  <CCol>
                    <CFormCheck id="flexCheckDefault" style={checkBoxStyle}/>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer style={vars}>
              <CRow>
                  <CCol>
                    <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">Awaiting Approval</CFormLabel>
                  </CCol>
                  <CCol>
                    <CFormCheck id="flexCheckDefault" style={checkBoxStyle}/>
                  </CCol>
                  <CCol>
                    <CFormCheck id="flexCheckDefault" style={checkBoxStyle}/>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer style={vars}>
              <CRow>
                  <CCol>
                    <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">In Production</CFormLabel>
                  </CCol>
                  <CCol>
                    <CFormCheck id="flexCheckDefault" style={checkBoxStyle}/>
                  </CCol>
                  <CCol>
                    <CFormCheck id="flexCheckDefault" style={checkBoxStyle}/>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer style={vars}>
              <CRow>
                  <CCol>
                    <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">Preparing Shipment</CFormLabel>
                  </CCol>
                  <CCol>
                    <CFormCheck id="flexCheckDefault" style={checkBoxStyle}/>
                  </CCol>
                  <CCol>
                    <CFormCheck id="flexCheckDefault" style={checkBoxStyle}/>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer style={vars}>
              <CRow>
                  <CCol>
                    <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">In Transit</CFormLabel>
                  </CCol>
                  <CCol>
                    <CFormCheck id="flexCheckDefault" style={checkBoxStyle}/>
                  </CCol>
                  <CCol>
                    <CFormCheck id="flexCheckDefault" style={checkBoxStyle}/>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
          </CListGroup>
        </CCard>
        </CRow>
        <div style={{'textAlign':'center', 'marginTop':'12px'}}>
            <CButton
                color="primary"
                target="_self"
                size="lg"
                >
                {" "}
                Save
                </CButton>

        </div>
            
        </>
    )
}


