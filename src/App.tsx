import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Home from "./pages/Home"
import Buy from "./pages/Buy"
import Layout from "./layout/Layout"
import Page404 from "./pages/Page404"
import { PATHS } from "./core/enums/paths.enum"

function App() {
    const router = createBrowserRouter([
    {
        element: <Layout />,
            errorElement: <Page404 />,
      children: [
        {
          path: PATHS.HOME,
          element: <Home />,
        },
        {
          path: PATHS.BUY,
          element: <Buy />,
        },
      ],
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App
