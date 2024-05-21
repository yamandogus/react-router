import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Archived, LoaderData, LoaderDataUser, Root} from './routes';
import Users from './routes/Users';
import User from './routes/User';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children: [
      {
        path:"users",
        loader: LoaderData,
        element: <Users/>,
        children: [
          {
            path:"archived",
            element: <Archived/>
          },
          {
            path:":userId",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            loader: LoaderDataUser as any,
            element: <User/>
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
