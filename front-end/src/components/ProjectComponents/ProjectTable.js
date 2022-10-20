import React, { useState, useEffect } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CBadge,
  CButton,
  CLink,
  CContainer,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilList, cilMagnifyingGlass } from '@coreui/icons';
export function ProjectTable(props) {
  const columns = [
    {
      key: "job_number",
      label: "Job Number",
      _props: { scope: "col" },
    },
    {
      key: "status",
      label: "Status",
      _props: { scope: "col" },
    },
    {
      key: "ETA",
      label: "ETA",
      _props: { scope: "col" },
    },
  ];

  console.log(props.jobs);

  const vars = {
    "--cui-badge-font-size": "0.9em",
  };

  const buttonStyle = {
    "marginTop": "5px"
  }

  return (
    <div>
      <CRow>
      <CCol></CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <h3>{props.name}</h3>
              <strong>{props.po_ref}</strong>
            </CCardHeader>
            <CCardBody  style={{"padding":"8px"}}>
              {/* <CTable striped columns={columns} items={props.jobs} tableHeadProps={{ color: 'dark' }} />    */}
              <CTable
                responsive
                hover
                striped
                columns={columns}
                tableHeadProps={{ color: "dark" }}
              >
                <CTableBody>
                  {props.jobs.map((listValue, index) => {
                    let badgeColour =
                      listValue.status === "Order Received"
                        ? "secondary"
                        : listValue.status === "Drafting"
                        ? "info"
                        : listValue.status === "Awaiting Approval"
                        ? "danger"
                        : listValue.status === "In Production"
                        ? "warning"
                        : listValue.status === "Preparing Shipment"
                        ? "primary"
                        : "success";

                    let button =
                      listValue.status === "Awaiting Approval" && listValue.approved === false
                        ? "Approve"
                        : listValue.status === "In Transit"
                        ? "Shipment"
                        : false;

                    let link =
                      button === "Shipment"
                        ? `/jobs/${listValue.job_number}`
                        : `/jobs/${listValue.job_number}/approve`;
                    return (
                      <CTableRow key={index}>
                        <CTableHeaderCell scope="row">
                          {listValue.job_number}
                          <CContainer style={{"paddingLeft": "0", "paddingRight": "0"}}>
                          {button && (
                            <CButton
                              style={buttonStyle}
                              color="primary"
                              href={link}
                              target="_self"
                              size="sm"
                            >
                              {" "}
                              <CIcon icon={cilMagnifyingGlass} size="sm" style={{'marginRight':'4px'}}/>
                              View
                            </CButton>
                          )}
                        </CContainer>
                        </CTableHeaderCell>
                        <CTableDataCell>
                        <CContainer style={{"paddingLeft": "0", "paddingRight": "0"}}>
                          <CBadge style={vars} color={badgeColour}>
                            {listValue.status}
                          </CBadge>
                        </CContainer>
                        </CTableDataCell>
                        <CTableDataCell>{listValue.ETA}</CTableDataCell>
                      </CTableRow>
                    );
                  })}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol></CCol>
      </CRow>
    </div>
  );
}
