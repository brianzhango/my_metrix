import React, { useRef, useState } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CRow,
  CCol,
  CToast,
  CToastBody,
  CToastClose,
  CToastHeader,
  CToaster,
} from "@coreui/react";

const Toast = (props) => {
    return (
        <CToast autohide={false} visible={true} className="align-items-center">
            <div className="d-flex">
                <CToastBody>{props.message}</CToastBody>
                <CToastClose className="me-2 m-auto" />
            </div>
         </CToast>
     )
}

export default Toast;