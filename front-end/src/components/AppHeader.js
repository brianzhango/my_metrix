import React from "react";
import { NavLink } from "react-router-dom";
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CImage,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilPhone, cilHome } from "@coreui/icons";

import { AppHeaderDropdown } from "./header/index";
import Logo from "src/assets/images/metrix-logo.jpg";

const AppHeader = () => {
  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CImage fluid src={Logo} width={180} />

        <CHeaderNav className="ms-3">
          <CHeaderNav fluid="true" className="d-md-flex me-auto">
            <CNavItem>
              <CNavLink to="/jobs" component={NavLink}>
                <CIcon icon={cilHome} size="xxl" />
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="https://www.metrixgroup.com.au/contact-details/">
                <CIcon icon={cilPhone} size="xxl" />
              </CNavLink>
            </CNavItem>
          </CHeaderNav>
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
