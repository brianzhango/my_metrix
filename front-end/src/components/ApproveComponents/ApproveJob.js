import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCardText,
    CCol,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHeaderCell,
    CTableRow,
    CBadge,
    CButton,
    CImage,
    CContainer,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle
  } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilArrowThickLeft } from '@coreui/icons';
import emailjs from '@emailjs/browser';

export function ApproveJob() {
    const [detail, setDetail] = useState([])

    const [materialStatus, setMaterialStatus] = useState(false)
    const [patternStatus, setPatternStatus] = useState(false)
    const [colourStatus, setColourStatus] = useState(false)
    const [priceStatus, setPriceStatus] = useState(false)
    const [drawingStatus, setDrawingStatus] = useState(false)
    const [approveStatus, setApproveStatus] = useState(false)
    const [visible, setVisible] = useState(false)

    const {user} = useSelector((state) => state.auth)

    const {job_number} = useParams()

    const navigate = useNavigate()

    const pdfLink = `/api/upload/${job_number}.pdf`

    const emailData ={
        email : user.email,
        first_name : user.fName,
        last_name : user.lName,
        jobNumber : job_number,
        phone : user.phone,
        company : user.company,
        dateTime : Date().toLocaleString()

    }

    const handleClick = (e) =>{
        setApproveStatus(prevstate => !prevstate)
        
        emailjs.send('service_g5rdo8x', 'template_6v29faf', emailData, 'W2DBytpBdKSHHqY9y')
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
        });

    }

    useEffect(() => {if(user == null)
        {
          navigate('/login')
        }
        else {
        
        axios
          .get(`/api/jobs/${job_number}/approve`, { headers: {
            'Authorization': 'Bearer ' + user.token
          }})
          .then((response) => setDetail(response.data))
          .catch(function (error) {
            // handle error
            console.log(error);
          })
         }
        },[0]);
    
    if (materialStatus == false)
    {
    return(

        <>
                <CContainer style={{'maxWidth': '700px'}}>
                    <div className="row justify-content-md-center">
                        <CCard 
                            className={'mb-3 border-top-info border-top-3'}
                            style={{'textAlign':'center'}}
                            >
                            <CCardHeader >
                                <div><h3 style={{'color':'rgb(51, 153, 255)'}}>Review</h3></div>
                                <div><h4 style={{'color':'rgb(51, 153, 255)'}}>Material Type and Thickness</h4></div>
                            </CCardHeader>
                            <CCardBody>
                            <CCardTitle style={{'fontSize':'35px', 'marginBottom':'41px', 'marginTop':'25px'}}><strong>{detail.material_type}</strong></CCardTitle>
                            <CCardTitle style={{'fontSize':'35px', 'marginBottom':'41px', 'marginTop':'25px'}}><strong>{detail.thickness}</strong></CCardTitle>
                            <hr style={{'borderColor':'rgb(51, 153, 255)', 'borderWidth':'3px'}}></hr>
                            <div>
                            <CButton color="danger" variant="outline" size="lg" style={{'marginRight':'100px'}}>Decline</CButton>
                            <CButton color="primary" variant="outline" size="lg" onClick={(e)=>{setMaterialStatus(prevstate => !prevstate)}}>Accept</CButton>
                            </div>
                            </CCardBody>
                        </CCard>
                    </div>
                </CContainer>
        </>
        )
    } else if (patternStatus == false){
        return (
            <>

                <CIcon icon={ cilArrowThickLeft } size="3xl" onClick={(e)=>{setMaterialStatus(prevstate => !prevstate)}}/>
                <CContainer style={{'maxWidth': '700px'}}>
                    <div className="row justify-content-md-center">
                        <CCard 
                            className={'mb-3 border-top-info border-top-3'}
                            style={{'textAlign':'center'}}
                            >
                            <CCardHeader >
                                <div><h3 style={{'color':'rgb(51, 153, 255)'}}>Review</h3></div>
                                <div><h4 style={{'color':'rgb(51, 153, 255)'}}>Pattern</h4></div>
                            </CCardHeader>
                            <CCardBody>
                            <CCardTitle style={{'fontSize':'35px', 'marginBottom':'41px', 'marginTop':'25px'}}><strong>{detail.pattern}</strong></CCardTitle>
                            <hr style={{'borderColor':'rgb(51, 153, 255)', 'borderWidth':'3px'}}></hr>
                            <div>
                            <CButton color="danger" variant="outline" size="lg" style={{'marginRight':'100px'}}>Decline</CButton>
                            <CButton color="primary" variant="outline" size="lg" onClick={(e)=>{setPatternStatus(prevstate => !prevstate)}}>Accept</CButton>
                            </div>
                            </CCardBody>
                        </CCard>
                    </div>
                </CContainer>
            </>
        )
    } else if (colourStatus == false){

        return (
            <>

                <CIcon icon={ cilArrowThickLeft } size="3xl" onClick={(e)=>{setPatternStatus(prevstate => !prevstate)}}/>
                <CContainer style={{'maxWidth': '700px'}}>
                    <div className="row justify-content-md-center">
                        <CCard 
                            className={'mb-3 border-top-info border-top-3'}
                            style={{'textAlign':'center'}}
                            >
                            <CCardHeader >
                                <div><h3 style={{'color':'rgb(51, 153, 255)'}}>Review</h3></div>
                                <div><h4 style={{'color':'rgb(51, 153, 255)'}}>Colour</h4></div>
                            </CCardHeader>
                            <CCardBody>
                            <CCardTitle style={{'fontSize':'35px', 'marginBottom':'41px', 'marginTop':'25px'}}><strong>{detail.colour}</strong></CCardTitle>
                            <div style={{'backgroundColor':`rgba(${detail.rgba[0]}, ${detail.rgba[1]}, ${detail.rgba[2]}, ${detail.rgba[3]})`, 'height':'200px'}}></div>
                            <hr style={{'borderColor':'rgb(51, 153, 255)', 'borderWidth':'3px'}}></hr>
                            <div>
                            <CButton color="danger" variant="outline" size="lg" style={{'marginRight':'100px'}}>Decline</CButton>
                            <CButton color="primary" variant="outline" size="lg" onClick={(e)=>{setColourStatus(prevstate => !prevstate)}}>Accept</CButton>
                            </div>
                            </CCardBody>
                        </CCard>
                    </div>
                </CContainer>
            </>
        )

    } else if (priceStatus == false){

        return(   
             <>
                <CIcon icon={ cilArrowThickLeft } size="3xl" onClick={(e)=>{setColourStatus(prevstate => !prevstate)}}/>
                <CContainer style={{'maxWidth': '700px'}}>
                    <div className="row justify-content-md-center">
                        <CCard 
                            className={'mb-3 border-top-info border-top-3'}
                            style={{'textAlign':'center'}}
                            >
                            <CCardHeader >
                                <div><h3 style={{'color':'rgb(51, 153, 255)'}}>Review</h3></div>
                                <div><h4 style={{'color':'rgb(51, 153, 255)'}}>Price</h4></div>
                            </CCardHeader>
                            <CCardBody>
                            <CTable style={{'textAlign':'center'}}>
                                <CTableBody style={{'fontSize':'25px'}}>
                                    <CTableRow>
                                    <CTableHeaderCell scope="row"><strong>Total Panels</strong></CTableHeaderCell>
                                    <CTableDataCell><strong>{detail.panel_num}</strong></CTableDataCell>
                                    </CTableRow>
                                    <CTableRow color="primary">
                                    <CTableHeaderCell scope="row"><strong>Total SQM</strong></CTableHeaderCell>
                                    <CTableDataCell><strong>{detail.sqm}</strong></CTableDataCell>
                                    </CTableRow>
                                    <CTableRow color="secondary">
                                    <CTableHeaderCell scope="row"><strong>Total Ex.GST</strong></CTableHeaderCell>
                                    <CTableDataCell><strong>${detail.price}</strong></CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                            <hr style={{'borderColor':'rgb(51, 153, 255)', 'borderWidth':'3px'}}></hr>
                            <div>
                            <CButton color="danger" variant="outline" size="lg" style={{'marginRight':'100px'}}>Decline</CButton>
                            <CButton color="primary" variant="outline" size="lg" onClick={(e)=>{setPriceStatus(prevstate => !prevstate)}}>Accept</CButton>
                            </div>
                            </CCardBody>
                        </CCard>
                    </div>
                </CContainer>
            </>
        )
    } else if (drawingStatus == false){
        return(   
            <>
               <CIcon icon={ cilArrowThickLeft } size="3xl" onClick={(e)=>{setPriceStatus(prevstate => !prevstate)}}/>
               <CContainer style={{'maxWidth': '700px'}}>
                   <div className="row justify-content-md-center">
                       <CCard 
                           className={'mb-3 border-top-info border-top-3'}
                           style={{'textAlign':'center'}}
                           >
                           <CCardHeader >
                               <div><h3 style={{'color':'rgb(51, 153, 255)'}}>Review</h3></div>
                               <div><h4 style={{'color':'rgb(51, 153, 255)'}}>Drawing</h4></div>
                           </CCardHeader>
                           <CCardBody>
                           <CButton style={{'color':'white'}} color="info" size="lg" href={pdfLink}>
                            Drawing PDF
                            </CButton>
                           <hr style={{'borderColor':'rgb(51, 153, 255)', 'borderWidth':'3px'}}></hr>
                           <div>
                           <CButton color="danger" variant="outline" size="lg" style={{'marginRight':'100px'}}>Decline</CButton>
                           <CButton color="primary" variant="outline" size="lg" onClick={(e)=>{setDrawingStatus(prevstate => !prevstate)}}>Accept</CButton>
                           </div>
                           </CCardBody>
                       </CCard>
                   </div>
               </CContainer>
           </>
       )
    } else {
        return(   
            <>
               <CModal visible={approveStatus} onClose={() => {setVisible(false); navigate('/jobs') }}>
                    <CModalHeader onClose={() => {setVisible(false); navigate('/jobs')}}>
                        <CModalTitle>Success</CModalTitle>
                    </CModalHeader>
                    <CModalBody style={{'textAlign':'center'}}>
                        Thanks for approving Job: <strong>{detail.job_number}!</strong>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="primary" onClick={() => {setVisible(false); navigate('/jobs')}}>
                        Close
                        </CButton>
                    </CModalFooter>
               </CModal>
               <CIcon icon={ cilArrowThickLeft } size="3xl" onClick={(e)=>{setDrawingStatus(prevstate => !prevstate)}}/>
               <CContainer style={{'maxWidth': '700px'}}>
                   <div className="row justify-content-md-center">
                       <CCard 
                           className={'mb-3 border-top-info border-top-3'}
                           style={{'textAlign':'center'}}
                           >
                           <CCardHeader >
                               <div><h3 style={{'color':'rgb(51, 153, 255)'}}>Approve</h3></div>
                           </CCardHeader>
                           <CCardBody>
                           <CTable style={{'textAlign':'center'}} bordered>
                                <CTableBody style={{'fontSize':'25px'}}>
                                    <CTableRow style={{'fontSize':'20px'}}>
                                    <CTableDataCell><strong style={{'color':'red'}}>Decline</strong>: If changes need to be made, please detail this in the pop up window by pressing Decline button.</CTableDataCell>
                                    <CTableDataCell><strong style={{'color':'blue'}}>Approve</strong>: If the PDF drawings are correct and no further changes are required, please acknowledge by pressing the Approval button below that your order is ready for manufacturing. Changes after this point will not be accepted.</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                           </CTable>
                           <hr style={{'borderColor':'rgb(51, 153, 255)', 'borderWidth':'3px'}}></hr>
                           <div>
                           <CButton color="danger" variant="outline" size="lg" style={{'marginRight':'100px'}}>Decline</CButton>
                           <CButton color="primary" variant="outline" size="lg" onClick={handleClick}>Approve</CButton>
                           </div>
                           </CCardBody>
                       </CCard>
                   </div>
               </CContainer>
           </>
       )
    }
    
}