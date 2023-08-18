import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../layouts/Public";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/inicio",
    element: <div>Hello world inicio!</div>,
  },
]);

export default router;