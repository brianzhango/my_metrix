import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CImage
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilEnvelopeOpen, cilPhone, cilHome} from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import Logo from 'src/assets/images/metrix-logo.jpg'

const AppHeader = () => {

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        {/* <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler> */}
        {/* <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand> */}
        
        <CImage fluid src={Logo} width={180}/>
        
        <CHeaderNav className="ms-3">
        <CHeaderNav fluid="true" className="d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink}>
            <CIcon icon={cilHome} size="xxl" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink herf="">
            <CIcon icon={cilPhone} size="xxl" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      {/* <CContainer fluid>
        <AppBreadcrumb />
      </CContainer> */}
    </CHeader>
  )
}

export default AppHeader
