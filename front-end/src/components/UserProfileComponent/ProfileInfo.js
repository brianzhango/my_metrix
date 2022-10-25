import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProfileCard } from "./ProfileCard";
import { AddressCard } from "./AddressCard";

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
  CNav,
  CNavItem,
  CNavLink
} from "@coreui/react";

export function ProfileInfo() {
  
  const [status, setStatus] = useState({
    pstatus: true,
    astatus: false,
    nstatus: false
  })

  const handleClick1 = (e) => {
      setStatus(prevstate => ({
        ...prevstate,
        pstatus: true,
        astatus: false,
        nstatus: false
      }))
  }

  const handleClick2 = (e) => {
    setStatus(prevstate => ({
      ...prevstate,
      pstatus: false,
      astatus: true,
      nstatus: false
    }))
}

  const handleClick3 = (e) => {
    setStatus(prevstate => ({
      ...prevstate,
      pstatus: false,
      astatus: false,
      nstatus: true
    }))
  }


  return (
    <>
      <CNav variant="tabs">
          <CNavItem>
            <CNavLink onClick={handleClick1} active={status.pstatus}>
              Profile
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink onClick={handleClick2} active={status.astatus}>
              Address
            </CNavLink>
            </CNavItem>
          <CNavItem>
            <CNavLink onClick={handleClick3} active={status.nstatus}>
              Notification
            </CNavLink>
            </CNavItem>
      </CNav>
      {status.pstatus ? <ProfileCard />
        : status.astatus ? <AddressCard /> : <ProfileCard />}
    </>
  )
}
