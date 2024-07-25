import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./pages/Error/Error";
import Dashboard from "./pages/Dashboard/Dashboard";
import Notes from "./pages/Notes/Notes";
import Tasks from "./pages/Tasks/Tasks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    // loader: "rootLoader",
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "notes",
        element: <Notes />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
