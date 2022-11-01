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
  CButton,
  CForm,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CModalFooter
} from "@coreui/react";

export function NotificationCard() {

    const {user} = useSelector((state) => state.auth)

    const { user_id } = useParams()

    const [visible, setVisible] = useState(false)

    const vars = {
        textAlign: "center",
      };
      
    const checkBoxStyle = {
        marginTop:'7px', 
        width:'1.5em',
        height:'1.5em'
    };

    let profileSession = JSON.parse(localStorage.getItem('profile'))

    let profile = profileSession[0]

    const [subscribe, setSubscribe] = useState ({
      ordEmail: profile.notifications.ordEmail,
      ordSms: profile.notifications.ordSms,
      draEmail: profile.notifications.draEmail,
      draSms: profile.notifications.draSms,
      awaSms: profile.notifications.awaSms,
      awaEmail: profile.notifications.awaEmail,
      proSms: profile.notifications.proSms,
      proEmail: profile.notifications.proEmail,
      preSms: profile.notifications.preSms,
      preEmail: profile.notifications.preEmail,
      traSms: profile.notifications.traSms,
      traEmail: profile.notifications.traEmail,

    })

    const handleChange = (e) => {

      setSubscribe(presub => {
        return {
          ...presub,
          [e.target.name] : e.target.checked
        }
      })

    }

    const handleSubmit = (e) =>{
      e.preventDefault()
    
      axios
          .put(`/api/users/${user_id}`, subscribe)
      
      setVisible(previ => !previ)
    }

    return(
        <>
        <CModal visible={visible} onClose={() => {setVisible(false); window.location.reload(false)}}>
            <CModalHeader onClose={() => {setVisible(false); window.location.reload(false)}}>
                <CModalTitle>Success</CModalTitle>
            </CModalHeader>
            <CModalBody style={{'textAlign':'center'}}>
                Your notification preference has been saved!
            </CModalBody>
            <CModalFooter>
                <CButton color="primary" onClick={() => {setVisible(false); window.location.reload(false)}}>
                Close
                </CButton>
            </CModalFooter>
         </CModal>
        <CForm onSubmit={handleSubmit}>
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
                    <CFormLabel className="col-form-label">Order Received</CFormLabel>
                  </CCol>
                  <CCol>
                    <CFormCheck id="ordEmail" name="ordEmail" checked={subscribe.ordEmail} onChange={handleChange} style={checkBoxStyle}/>
                  </CCol>
                  <CCol>
                    <CFormCheck id="ordSms" name="ordSms" checked={subscribe.ordSms} onChange={handleChange} style={checkBoxStyle}/>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer style={vars}>
              <CRow>
                  <CCol>
                    <CFormLabel className="col-form-label">Drafting</CFormLabel>
                  </CCol>
                  <CCol>
                    <CFormCheck id="draEmail" name="draEmail" checked={subscribe.draEmail} onChange={handleChange} style={checkBoxStyle}/>
                  </CCol>
                  <CCol>
                    <CFormCheck id="draSms" name="draSms" checked={subscribe.draSms} onChange={handleChange} style={checkBoxStyle}/>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer style={vars}>
              <CRow>
                  <CCol>
                    <CFormLabel className="col-form-label">Awaiting Approval</CFormLabel>
                  </CCol>
                  <CCol>
                    <CFormCheck id="awaEmail" name="awaEmail" checked={subscribe.awaEmail} onChange={handleChange} style={checkBoxStyle}/>
                  </CCol>
                  <CCol>
                    <CFormCheck id="awaSms" name="awaSms" checked={subscribe.awaSms} onChange={handleChange} style={checkBoxStyle}/>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer style={vars}>
              <CRow>
                  <CCol>
                    <CFormLabel className="col-form-label">In Production</CFormLabel>
                  </CCol>
                  <CCol>
                    <CFormCheck id="proEmail" name="proEmail" checked={subscribe.proEmail} onChange={handleChange} style={checkBoxStyle}/>
                  </CCol>
                  <CCol>
                    <CFormCheck id="proSms" name="proSms" checked={subscribe.proSms} onChange={handleChange} style={checkBoxStyle}/>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer style={vars}>
              <CRow>
                  <CCol>
                    <CFormLabel className="col-form-label">Preparing Shipment</CFormLabel>
                  </CCol>
                  <CCol>
                    <CFormCheck id="preEmail" name="preEmail" checked={subscribe.preEmail} onChange={handleChange} style={checkBoxStyle}/>
                  </CCol>
                  <CCol>
                    <CFormCheck id="preSms" name="preSms" checked={subscribe.preSms} onChange={handleChange} style={checkBoxStyle}/>
                  </CCol>
                </CRow>
              </CContainer>
            </CListGroupItem>
            <CListGroupItem>
              <CContainer style={vars}>
              <CRow>
                  <CCol>
                    <CFormLabel className="col-form-label">In Transit</CFormLabel>
                  </CCol>
                  <CCol>
                    <CFormCheck id="traEmail" name="traEmail" checked={subscribe.traEmail} onChange={handleChange} style={checkBoxStyle}/>
                  </CCol>
                  <CCol>
                    <CFormCheck id="traSms" name="traSms" checked={subscribe.traSms} onChange={handleChange} style={checkBoxStyle}/>
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
                type="submit"
                >
                {" "}
                Save
                </CButton>

        </div>
        </CForm> 
        </>
    )
}


