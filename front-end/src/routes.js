import React from 'react'
import { ProjectDisplay } from './components/ProjectComponents/ProjectDisplay'
import { ShipmentDisplay } from './components/ShipmentComponents/ShipmentDisplay'

const Error404 = React.lazy(() => import('./views/pages/page404/Page404'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/jobs', name: 'Job', element: ProjectDisplay},
  { path: '/jobs/:job_number', name: 'Shipment', element: ShipmentDisplay},
  { path: '/*', name: 'Error404', element: Error404}
]

export default routes
