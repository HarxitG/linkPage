import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserPage from "./Pages/userPage";
import Login from "./Pages/Login";
import Signup from "./Pages/signup";
import LandingPage from "./Pages/LandingPage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,  
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/userPage",
      element: <UserPage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


