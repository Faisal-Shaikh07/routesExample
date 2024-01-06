import NoComponent from "components/NoComponent";
import Pm from "components/Pm";
import User from "components/User";
import Login from "components/login";
import React, { useState } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";

const PrivateWrapper = ({ auth, children }) => {
  return auth.isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  const [users, setUsers] = useState({
    user: false,
    pm: true,
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route
          path="/userDashboard/"
          element={
            <PrivateWrapper auth={{ isAuthenticated: users.user }}>
              <Outlet />
            </PrivateWrapper>
          }
        >
          <Route index element={<User />} />
        </Route>
        
        <Route
          path="/pmDashboard/"
          element={
            <PrivateWrapper auth={{ isAuthenticated: users.pm }}>
              <Outlet />
            </PrivateWrapper>
          }
        >
          <Route index element={<Pm />} />
        </Route>

        <Route path="*" element={<NoComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
