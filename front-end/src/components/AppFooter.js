import React from "react";
import { CFooter } from "@coreui/react";

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a
          href="https://www.metrixgroup.com.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Metrix Group
        </a>
        <span className="ms-1">&copy; 2022</span>
      </div>
    </CFooter>
  );
};

export default React.memo(AppFooter);
