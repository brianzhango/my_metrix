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
  } from '@coreui/react'
  import { DocsExample } from 'src/components'
  

export function ProjectDisplay() {

    const [project, setProject] = useState({})

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                <CCardHeader>
                    <strong>React Table</strong> <small>Basic example</small>
                </CCardHeader>
                <CCardBody>
                    <CTable>
                        <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">PO Ref</CTableHeaderCell>
                            <CTableHeaderCell scope="col">User ID</CTableHeaderCell>
                        </CTableRow>
                        </CTableHead>
                        <CTableBody>
                        <CTableRow>
                            <CTableHeaderCell scope="row">1</CTableHeaderCell>
                            <CTableDataCell>Mark</CTableDataCell>
                            <CTableDataCell>Otto</CTableDataCell>
                            <CTableDataCell>@mdo</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                            <CTableHeaderCell scope="row">2</CTableHeaderCell>
                            <CTableDataCell>Jacob</CTableDataCell>
                            <CTableDataCell>Thornton</CTableDataCell>
                            <CTableDataCell>@fat</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                            <CTableHeaderCell scope="row">3</CTableHeaderCell>
                            <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
                            <CTableDataCell>@twitter</CTableDataCell>
                        </CTableRow>
                        </CTableBody>
                    </CTable>
                </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )

}