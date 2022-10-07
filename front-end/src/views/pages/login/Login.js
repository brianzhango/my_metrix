import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../../features/auth/authSlice";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CImage,
  CSpinner,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import Logo from "src/assets/images/metrix-logo.jpg";

const Login = () => {
  const vars = {
    textAlign: "center",
  };
   
  
  const [formData, setFormData] = useState({
      username: '',
      password: '',

  });
 
  const { username, password} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/jobs')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
      setFormData((prevState) => ({
          ...prevState,
          [e.target.name] : e.target.value,

      }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    }

    dispatch(login(userData))
  };

  if(isLoading) {
    return <CSpinner color="primary"/>
  }

  return (
    <>
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
          <CContainer>
            <CRow className="justify-content-center">
              <CCol md={4}>
                <CCardGroup>
                  <CCard className="p-4">
                    <div style={vars}>
                      <CImage fluid src={Logo} width={180} />
                    </div>
                    <CCardBody>
                      <CForm onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <p className="text-medium-emphasis">
                          Sign In to your account
                        </p>
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            <CIcon icon={cilUser} />
                          </CInputGroupText>
                          <CFormInput
                            placeholder="Username"
                            autoComplete="off"
                            id="username"
                            onChange={onChange} 
                            value={username}
                            required
                            name="username"
                          />
                        </CInputGroup>
                        <CInputGroup className="mb-4">
                          <CInputGroupText>
                            <CIcon icon={cilLockLocked} />
                          </CInputGroupText>
                          <CFormInput
                            type="password"
                            placeholder="Password"
                            autoComplete="off"
                            id="password"
                            value={password}
                            onChange={onChange}
                            required
                            name="password"
                          />
                        </CInputGroup>
                        <CRow>
                          <CCol xs={6}>
                            <CButton
                              type="submit"
                              color="primary"
                              className="px-4"
                            >
                              Login
                            </CButton>
                          </CCol>
                          <CCol xs={6} className="text-right">
                            <CButton color="link" className="px-0">
                              Forgot password?
                            </CButton>
                          </CCol>
                        </CRow>
                      </CForm>
                    </CCardBody>
                  </CCard>
                  {/* <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                <div>
                <h2>Sign up</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to="/register">
                <CButton color="primary" className="mt-3" active tabIndex={-1}>
                Register Now!
                </CButton>
                </Link>
                </div>
                </CCardBody>
              </CCard> */}
                </CCardGroup>
              </CCol>
            </CRow>
          </CContainer>
        </div>
    </>
  );
};

export default Login;
