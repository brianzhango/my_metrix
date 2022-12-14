import React from "react";
import { ProjectDisplay } from "./components/ProjectComponents/ProjectDisplay";
import { ShipmentDisplay } from "./components/ShipmentComponents/ShipmentDisplay";
import { ShipmentDetail } from "./components/ShipmentComponents/ShipmentDetail";
import { ViewFile } from "./components/ShipmentComponents/ViewFile"
import { ApproveJob } from "./components/ApproveComponents/ApproveJob"
import { ProfileInfo } from "./components/UserProfileComponent/ProfileInfo"

const Error404 = React.lazy(() => import("./views/pages/page404/Page404"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/jobs", name: "Job", element: ProjectDisplay },
  { path: "/jobs/:job_number", name: "Shipment", element: ShipmentDisplay },
  {
    path: "/jobs/:job_number/:ship_id",
    name: "ShipmentDetail",
    element: ShipmentDetail,
  },
  {
    path: "/jobs/:job_number/:ship_id/file",
    name: "ViewFile",
    element: ViewFile,
  },
  { path: "/jobs/:job_number/approve", exact: true, name: "Approve", element: ApproveJob },
  { path: "/*", name: "Error404", element: Error404 },
  { path: "/users/:user_id", name:"UserProfile", element: ProfileInfo}
];

export default routes;
