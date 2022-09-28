import React, {useState, useEffect} from "react";
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
    CLink
  } from '@coreui/react'
import CIcon from '@coreui/icons-react'
export function ProjectTable(props) {

    const columns = [
        {
          key: 'job_number',
          label: 'Job Number',
          _props: { scope: 'col' },
        },
        {
          key: 'status',
          label: 'Status',
          _props: { scope: 'col' },
        },
        {
          key: 'ETA',
          label: 'ETA',
          _props: { scope: 'col' },
        },
        {
          key: '',
          label: 'Action',
          _props: { scope: 'col' },
        },
      ]

    console.log(props.jobs)

    const vars = { 
        "--cui-badge-font-size" : "0.9em"
      }

    return (
        <div>
            <CRow>
                <CCol xs={12}>
                    <CCard className="mb-4">
                    <CCardHeader>
                        <h3>{props.name}</h3><strong>{props.po_ref}</strong>
                    </CCardHeader>
                        <CCardBody>
                        {/* <CTable striped columns={columns} items={props.jobs} tableHeadProps={{ color: 'dark' }} />    */}
                            <CTable responsive hover striped columns={columns} tableHeadProps={{ color: 'dark' }}>
                                <CTableBody>
                                    
                                        {props.jobs.map((listValue, index) => {
                                            let badgeColour = listValue.status === "Order Received"  ? "secondary"
                                                              : listValue.status === "Drafting" ? "info"
                                                              : listValue.status === "Awaiting Approval" ? "danger"
                                                              : listValue.status === "In Production" ? "warning"
                                                              : listValue.status === "Preparing Shipment" ? "primary"
                                                              : "success"

                                            let button = listValue.status === "Awaiting Approval" ? "Approve"
                                                          : listValue.status === "In Transit" ? "Shipment"
                                                          : false

                                            let link = button === "Shipment" ? `/jobs/${listValue.job_number}`: `${listValue.job_number}`
                                            return (
                                                <CTableRow key={index}>
                                                    <CTableHeaderCell scope="row">{listValue.job_number}</CTableHeaderCell>
                                                    <CTableDataCell><CBadge style={vars} color={badgeColour}>{listValue.status}</CBadge></CTableDataCell>
                                                    <CTableDataCell>{listValue.ETA}</CTableDataCell>
                                                    <CTableDataCell>{button && <CButton color="dark" href={link} target="_self" size="sm" shape="rounded-pill"> {button}</CButton>}</CTableDataCell>
                                                </CTableRow>
                                            )
                                        })}
                                </CTableBody>
                            </CTable> 
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>

    )

}
