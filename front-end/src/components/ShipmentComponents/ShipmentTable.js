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

export function ShipmentTable(props) {

    console.log(props)
    const columns = [
        {
          key: 'ship_id',
          label: 'Shipment Number',
          _props: { scope: 'col' },
        },
        {
          key: 'track_num',
          label: 'Tracking Number',
          _props: { scope: 'col' },
        },
        {
          key: '',
          label: 'Action',
          _props: { scope: 'col' },
        },
      ]

    return (
        <div>
            <CRow>
                <CCol xs={12}>
                    <CCard className="mb-4">
                    <CCardHeader>
                        <h3>Shipment</h3><strong></strong>
                    </CCardHeader>
                        <CCardBody>
                        {/* <CTable striped columns={columns} items={props.jobs} tableHeadProps={{ color: 'dark' }} />    */}
                            <CTable responsive hover striped columns={columns} tableHeadProps={{ color: 'dark' }}>
                                <CTableBody>
                                    
                                        {props.item.map((listValue, index) => { 
                                             return (
                                                <CTableRow key={index}>
                                                    <CTableHeaderCell scope="row">{listValue.ship_id}</CTableHeaderCell>
                                                    <CTableDataCell> <CLink href="https://coreui.io" target="_blank">{listValue.track_number}</CLink></CTableDataCell>
                                                    <CTableDataCell><CButton color="dark" size="sm" shape="rounded-pill">View</CButton></CTableDataCell>
                                                </CTableRow>
                                            )
                                        }
                                        )}
                                </CTableBody>
                            </CTable> 
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>

    )

}
