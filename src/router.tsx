import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Quemsomos from './pages/Quemsomos'
import Historico from './pages/Historico'
import Linha from './pages/Linha'

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/quemsomos', element: <Quemsomos /> },
  { path: '/historico', element: <Historico /> },
  { path: '/linha-do-tempo', element: <Linha /> },
])
