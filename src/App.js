import NoComponent from "components/NoComponent";
import Pm from "components/Pm";
import User from "components/User";
import Login from "components/login";
import React, { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

const PrivateWrapper = ({ auth: { isAuthenticated } }) => {
  console.log(isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

const App = () => {
  const [users, setUsers] = useState({
    user: false,
    pm: false,
  });
  return (
    <BrowserRouter>
      <Routes>
        {users.user && (
          <Route
            element={<PrivateWrapper auth={{ isAuthenticated: users.user }} />}
          >
            <Route path="/Dashboard" element={<User />} />
          </Route>
        )}

        {users.pm && (
          <Route
            element={<PrivateWrapper auth={{ isAuthenticated: users.pm }} />}
          >
            <Route path="/Dashboard" element={<Pm />} />
          </Route>
        )}
        <Route path="/" element={<Login />} />
        {/* <Route path="*" element={<NoComponent />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
