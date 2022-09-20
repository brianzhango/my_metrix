import React from "react";
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
            <CCol xs={12}>
                <CCard className="mb-4">
                <CCardHeader>
                    <strong>React Table</strong> <small>Variants</small>
                </CCardHeader>
                <CCardBody>
                    <p className="text-medium-emphasis small">
                    Use contextual classes to color tables, table rows or individual cells.
                    </p>
                    <DocsExample href="components/table#variants">
                    <CTable>
                        <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                        </CTableHead>
                        <CTableBody>
                        <CTableRow>
                            <CTableHeaderCell scope="row">Default</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow color="primary">
                            <CTableHeaderCell scope="row">Primary</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow color="secondary">
                            <CTableHeaderCell scope="row">Secondary</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow color="success">
                            <CTableHeaderCell scope="row">Success</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow color="danger">
                            <CTableHeaderCell scope="row">Danger</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow color="warning">
                            <CTableHeaderCell scope="row">Warning</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow color="info">
                            <CTableHeaderCell scope="row">Info</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow color="light">
                            <CTableHeaderCell scope="row">Light</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow color="dark">
                            <CTableHeaderCell scope="row">Dark</CTableHeaderCell>
                            <CTableDataCell>Cell</CTableDataCell>
                            <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        </CTableBody>
                    </CTable>
                    </DocsExample>
                </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )

}