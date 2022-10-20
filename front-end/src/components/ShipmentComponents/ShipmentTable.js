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
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilList, cilMagnifyingGlass } from '@coreui/icons';

export function ShipmentTable(props) {
  console.log(props);
  const columns = [
    {
      key: "ship_id",
      label: "Shipment Number",
      _props: { scope: "col" },
    },
    {
      key: "track_num",
      label: "Tracking Number",
      _props: { scope: "col" },
    },
    {
      key: "",
      label: "Action",
      _props: { scope: "col" },
    },
  ];

  return (
    <div>
      <CRow>
      <CCol></CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <h3>Shipment</h3>
              <strong></strong>
            </CCardHeader>
            <CCardBody>
              {/* <CTable striped columns={columns} items={props.jobs} tableHeadProps={{ color: 'dark' }} />    */}
              <CTable
                responsive
                hover
                striped
                columns={columns}
                tableHeadProps={{ color: "dark" }}
              >
                <CTableBody>
                  {props.item.map((listValue, index) => {
                    let link = `/jobs/${listValue.job_number}/${listValue.ship_id}`
                    const trackLink = `https://www.mainfreight.com/en-nz/tracking?trackingnumber=${listValue.track_number}`
                    return (
                      <CTableRow key={index}>
                        <CTableHeaderCell scope="row">
                          {listValue.ship_id}
                        </CTableHeaderCell>
                        <CTableDataCell>
                          {" "}
                          <CLink href={trackLink} target="_blank">
                            {listValue.track_number}
                          </CLink>
                        </CTableDataCell>
                        <CTableDataCell>
                          <CButton
                            color="primary"
                            href={link}
                            target="_self"
                            size="sm"
                          >
                            <CIcon icon={cilMagnifyingGlass} size="sm" style={{'marginRight':'4px'}}/>
                            View
                          </CButton>
                        </CTableDataCell>
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
