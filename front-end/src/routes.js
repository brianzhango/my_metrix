import React from 'react'
import { ProjectDisplay } from './components/ProjectComponents/ProjectDisplay'

const Error404 = React.lazy(() => import('./views/pages/page404/Page404'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/jobs', name: 'Job', element: ProjectDisplay},
  { path: '/*', name: 'Error404', element: Error404}
]

export default routes
