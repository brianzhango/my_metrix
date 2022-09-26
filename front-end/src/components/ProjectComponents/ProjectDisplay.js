import React, {useState, useEffect} from "react";
import axios from "axios";

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
    CDataTable
  } from '@coreui/react'
  import { DocsExample } from 'src/components'
  

export function ProjectDisplay() {

    const [project, setProject] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8082/projects')
         .then(response => setProject(response.data) )

    },[0])
    
    console.log(project)

    const columns = [
        {
          key: 'id',
          label: 'ID',
          _props: { scope: 'col' },
        },
        {
          key: 'name',
          label: 'NAME',
          _props: { scope: 'col' },
        },
        {
          key: 'po_ref',
          label: 'PO REF',
          _props: { scope: 'col' },
        },
        // {
        //   key: 'user_id',
        //   label: 'USER ID',
        //   _props: { scope: 'col' },
        // },
      ]

    return (
        <div>
            <CRow>
                <CCol xs={12}>
                    <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Projects</strong>
                    </CCardHeader>
                    <CCardBody>
                    <CTable striped columns={columns} items={project} tableHeadProps={{ color: 'dark' }} />   
                    </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    )

}
