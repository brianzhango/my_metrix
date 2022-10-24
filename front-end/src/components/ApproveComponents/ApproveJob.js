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
import { cibFlask, cilArrowThickLeft } from '@coreui/icons';
import emailjs from '@emailjs/browser';
import { configs } from "eslint-plugin-prettier";

export function ApproveJob() {
    const [detail, setDetail] = useState([])

    const [materialStatus, setMaterialStatus] = useState(false)
    const [patternStatus, setPatternStatus] = useState(false)
    const [colourStatus, setColourStatus] = useState(false)
    const [priceStatus, setPriceStatus] = useState(false)
    const [drawingStatus, setDrawingStatus] = useState(false)
    const [approveStatus, setApproveStatus] = useState(false)
    const [declineStatus, setDeclineStatus] = useState(false)
    const [visible, setVisible] = useState(false)

    const [materialDecline, setMaterialDecline] = useState(false)
    const [patternDecline, setPatternDecline] = useState(false)
    const [colourDecline, setColourDecline] = useState(false)
    const [priceDecline, setPriceDecline] = useState(false)
    const [drawingDecline, setDrawingDecline] = useState(false)

    // If customers decline any of the parts, the final approve button will be disabled
    const buttonDisableStatus = materialDecline || patternDecline || colourDecline || priceDecline || drawingDecline ? true : false

    const [comment, setComment] = useState(
        {
            materialComment: "",
            patternComment: "",
            colourComment: "",
            priceComment: "",
            drawingComment: "",
            extraComment: ""
        }
    )

    const {user} = useSelector((state) => state.auth)

    const {job_number} = useParams()

    const navigate = useNavigate()

    const pdfLink = `/api/upload/${job_number}.pdf`

    // For approve 
    const emailData ={
        email : user.email,
        first_name : user.fName,
        last_name : user.lName,
        jobNumber : job_number,
        phone : user.phone,
        company : user.company,
        dateTime : Date().toLocaleString()

    }

    // For decline

    const emailDataDecline ={
        first_name : user.fName,
        last_name : user.lName,
        jobNumber : job_number,
        phone : user.phone,
        company : user.company,
        dateTime : Date().toLocaleString(),
        materialComment: comment.materialComment,
        patternComment: comment.patternComment,
        colourComment: comment.colourComment,
        priceComment: comment.priceComment,
        drawingComment: comment.drawingComment,
        extraComment: comment.extraComment

    }

    // Final Approve Button & Send Email
    const handleClick = (e) =>{
        setApproveStatus(prevstate => !prevstate)
        
        emailjs.send('service_g5rdo8x', 'template_6v29faf', emailData, 'W2DBytpBdKSHHqY9y')
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
        });

    }

    const handleDecline = (e) =>{
        setVisible(prevstate => !prevstate)

        emailjs.send('service_g5rdo8x', 'template_jkx97ng', emailDataDecline, 'W2DBytpBdKSHHqY9y')
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
        });

    }

    // Comment Form
    const handleChange = (e) => {
        setComment(preComment => {
            return {
                ...preComment,
                [e.target.name]: [e.target.value]
            }
        })
    }

    // Cancel Button Event for Material
    const handleCancelMaterial = (e) => {
        setMaterialDecline(prevstate => !prevstate)
        setComment(preComment => {
            return {
                ...preComment,
                materialComment: ""
            }
        })
    }

    // Cancel Button Event for Pattern
    const handleCancelPattern = (e) => {
        setPatternDecline(prevstate => !prevstate)
        setComment(preComment => {
            return {
                ...preComment,
                patternComment: ""
            }
        })
    }

    // Cancel Button Event for Colour
    const handleCancelColour = (e) => {
        setColourDecline(prevstate => !prevstate)
        setComment(preComment => {
            return {
                ...preComment,
                colourComment: ""
            }
        })
    }

     // Cancel Button Event for Price
     const handleCancelPrice = (e) => {
        setPriceDecline(prevstate => !prevstate)
        setComment(preComment => {
            return {
                ...preComment,
                priceComment: ""
            }
        })
    }

     // Cancel Button Event for Drawing
     const handleCancelDrawing = (e) => {
        setDrawingDecline(prevstate => !prevstate)
        setComment(preComment => {
            return {
                ...preComment,
                drawingComment: ""
            }
        })
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
                            {materialDecline ?
                            <CButton color="danger" variant="outline" size="lg" style={{'marginRight':'100px'}} onClick={handleCancelMaterial}>Cancel</CButton> :
                            <CButton color="danger" variant="outline" size="lg" style={{'marginRight':'100px'}} onClick={(e)=>{setMaterialDecline(prevstate => !prevstate)}}>Decline</CButton>
                            }
                            {materialDecline ?
                            <CButton color="primary" variant="outline" size="lg" onClick={(e)=>{setMaterialStatus(prevstate => !prevstate)}}>Next</CButton> :
                            <CButton color="primary" variant="outline" size="lg" onClick={(e)=>{setMaterialStatus(prevstate => !prevstate)}}>Accept</CButton>
                            }
                            </div>
                            </CCardBody>
                        </CCard>
                        {materialDecline &&(<textarea onChange={handleChange} name="materialComment" value={comment.materialComment} placeholder="Comments" style={{'height':'90px'}}/>)}
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
                            {patternDecline ?
                            <CButton color="danger" variant="outline" size="lg" style={{'marginRight':'100px'}} onClick={handleCancelPattern}>Cancel</CButton> :
                            <CButton color="danger" variant="outline" size="lg" style={{'marginRight':'100px'}} onClick={(e)=>{setPatternDecline(prevstate => !prevstate)}}>Decline</CButton>
                            }
                            {patternDecline ?
                            <CButton color="primary" variant="outline" size="lg" onClick={(e)=>{setPatternStatus(prevstate => !prevstate)}}>Next</CButton> :
                            <CButton color="primary" variant="outline" size="lg" onClick={(e)=>{setPatternStatus(prevstate => !prevstate)}}>Accept</CButton>
                            }
                            </div>
                            </CCardBody>
                        </CCard>
                        {patternDecline &&(<textarea onChange={handleChange} name="patternComment" value={comment.patternComment} placeholder="Comments" style={{'height':'90px'}}/>)}
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
                            {colourDecline ?
                            <CButton color="danger" variant="outline" size="lg" style={{'marginRight':'100px'}} onClick={handleCancelColour}>Cancel</CButton> :
                            <CButton color="danger" variant="outline" size="lg" style={{'marginRight':'100px'}} onClick={(e)=>{setColourDecline(prevstate => !prevstate)}}>Decline</CButton>
                            }
                            {colourDecline ?
                            <CButton color="primary" variant="outline" size="lg" onClick={(e)=>{setColourStatus(prevstate => !prevstate)}}>Next</CButton> :
                            <CButton color="primary" variant="outline" size="lg" onClick={(e)=>{setColourStatus(prevstate => !prevstate)}}>Accept</CButton>
                            }
                            </div>
                            </CCardBody>
                        </CCard>
                        {colourDecline &&(<textarea onChange={handleChange} name="colourComment" value={comment.colourComment} placeholder="Comments" style={{'height':'90px'}}/>)}
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
                            {priceDecline ?
                            <CButton color="danger" variant="outline" size="lg" style={{'marginRight':'100px'}} onClick={handleCancelPrice}>Cancel</CButton> :
                            <CButton color="danger" variant="outline" size="lg" style={{'marginRight':'100px'}} onClick={(e)=>{setPriceDecline(prevstate => !prevstate)}}>Decline</CButton>
                            }
                            {priceDecline ?
                            <CButton color="primary" variant="outline" size="lg" onClick={(e)=>{setPriceStatus(prevstate => !prevstate)}}>Next</CButton> :
                            <CButton color="primary" variant="outline" size="lg" onClick={(e)=>{setPriceStatus(prevstate => !prevstate)}}>Accept</CButton>
                            }
                            </div>
                            </CCardBody>
                        </CCard>
                        {priceDecline &&(<textarea onChange={handleChange} name="priceComment" value={comment.priceComment} placeholder="Comments" style={{'height':'90px'}}/>)}
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
                           {drawingDecline ?
                            <CButton color="danger" variant="outline" size="lg" style={{'marginRight':'100px'}} onClick={handleCancelDrawing}>Cancel</CButton> :
                            <CButton color="danger" variant="outline" size="lg" style={{'marginRight':'100px'}} onClick={(e)=>{setDrawingDecline(prevstate => !prevstate)}}>Decline</CButton>
                            }
                            {drawingDecline ?
                            <CButton color="primary" variant="outline" size="lg" onClick={(e)=>{setDrawingStatus(prevstate => !prevstate)}}>Next</CButton> :
                            <CButton color="primary" variant="outline" size="lg" onClick={(e)=>{setDrawingStatus(prevstate => !prevstate)}}>Accept</CButton>
                            }
                           </div>
                           </CCardBody>
                       </CCard>
                       {drawingDecline &&(<textarea onChange={handleChange} name="drawingComment" value={comment.drawingComment} placeholder="Comments" style={{'height':'90px'}}/>)}
                   </div>
               </CContainer>
           </>
       )
    } else if (declineStatus == false){
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
                           <CButton color="danger" variant="outline" size="lg" style={{'marginRight':'100px'}} onClick={(e)=>{setDeclineStatus(prevstate => !prevstate)}}>Decline</CButton>
                           <CButton color="primary" variant="outline" size="lg" onClick={handleClick} disabled={buttonDisableStatus}>Approve</CButton>
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
                <CModal visible={visible} onClose={() => {setVisible(false); navigate('/jobs') }}>
                    <CModalHeader onClose={() => {setVisible(false); navigate('/jobs')}}>
                        <CModalTitle>Declined</CModalTitle>
                    </CModalHeader>
                    <CModalBody style={{'textAlign':'center'}}>
                        Your Job <strong>{detail.job_number} has been declined!</strong>
                         We will get back to you soon!
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="primary" onClick={() => {setVisible(false); navigate('/jobs')}}>
                        Close
                        </CButton>
                    </CModalFooter>
               </CModal>
                <CIcon icon={ cilArrowThickLeft } size="3xl" onClick={(e)=>{setDeclineStatus(prevstate => !prevstate)}}/>
                <CContainer style={{'maxWidth': '700px'}}>
                <div className="row justify-content-md-center">
                    <CCard 
                        className={'mb-3 border-top-info border-top-3'}
                        style={{'textAlign':'center'}}
                        >
                        <CCardHeader >
                            <div><h3 style={{'color':'rgb(51, 153, 255)'}}>Decline</h3></div>
                        </CCardHeader>
                        <CCardBody>
                        <CTable style={{'textAlign':'center'}} bordered>
                            <CTableBody style={{'fontSize':'25px'}}>
                                {/* Decline Comments */}
                                <CTableRow style={{'fontSize':'20px'}}>
                                <CTableHeaderCell>Material Type and Thickness</CTableHeaderCell>
                                <CTableDataCell>{comment.materialComment}</CTableDataCell>
                                </CTableRow>
                                <CTableRow style={{'fontSize':'20px'}}>
                                <CTableHeaderCell>Pattern</CTableHeaderCell>
                                <CTableDataCell>{comment.patternComment}</CTableDataCell>
                                </CTableRow>
                                <CTableRow style={{'fontSize':'20px'}}>
                                <CTableHeaderCell>Colour</CTableHeaderCell>
                                <CTableDataCell>{comment.colourComment}</CTableDataCell>
                                </CTableRow>
                                <CTableRow style={{'fontSize':'20px'}}>
                                <CTableHeaderCell>Price</CTableHeaderCell>
                                <CTableDataCell>{comment.priceComment}</CTableDataCell>
                                </CTableRow>
                                <CTableRow style={{'fontSize':'20px'}}>
                                <CTableHeaderCell>Drawing</CTableHeaderCell>
                                <CTableDataCell>{comment.drawingComment}</CTableDataCell>
                                </CTableRow>
                            </CTableBody>
                        </CTable>
                        <hr style={{'borderColor':'rgb(51, 153, 255)', 'borderWidth':'3px'}}></hr>
                        <div>
                        <CButton color="danger" variant="outline" size="lg" style={{'marginRight':'100px'}} onClick={(e)=>{setDeclineStatus(prevstate => !prevstate)}}>Cancel</CButton>
                        <CButton color="primary" variant="outline" size="lg" onClick={handleDecline}>Decline</CButton>
                        </div>
                        </CCardBody>
                    </CCard>
                {declineStatus &&(<textarea onChange={handleChange} name="extraComment" value={comment.extraComment} placeholder="Extra Comments" style={{'height':'90px'}}/>)}
                </div>

                </CContainer>
            </>
        )
    }
    
}