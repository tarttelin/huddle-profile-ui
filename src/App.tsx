import React, { useState } from 'react';
import { Route } from 'wouter';
import Auth, { loadUser } from './auth/Auth';
import { User } from './auth/User';
import { Header, Button, NavDrawer, NavItem } from '@tarttelin/ops-react-components';
import MyProfile from "./profile/MyProfile";
import './main.css';

function App() {
  const [user, setUser] = useState(() => loadUser());
  const [toggleMainMenu, setToggleMainMenu] = useState(false);
  const [toggleUserMenu, setToggleUserMenu] = useState(false);
  let title = import.meta.env.OPS_TITLE;
  let authUrl = import.meta.env.OPS_AUTH_URL;
  let qs = `redirect_uri=${encodeURIComponent(import.meta.env.OPS_AUTH_REDIRECT!!)}&response_type=token&client_id=${import.meta.env.OPS_AUTH_CLIENT_ID}&identity_provider=COGNITO&scopes=email%2Cprofile%2Copenid&state=Te0hKuTqkLpIx1o02viQVaitt1p6aRRK`;
  return (
    <>
      <Header toggleMainMenu={toggleMainMenu} setToggleMainMenu={setToggleMainMenu} toggleUserMenu={toggleUserMenu} setToggleUserMenu={setToggleUserMenu} />

      <div className="main">
        {user && user.isValid() ? <div><span>User: {user.name}</span>
        <MyProfile/></div> : <Button as="a" href={`${authUrl}?${qs}`}>Login</Button>}
        <br />
        <Route path="/auth-callback" component={() => <Auth setUser={setUser} user={user} />} />
      </div>

      <NavDrawer isOpen={toggleMainMenu} side="left">
        <NavItem side="left" text="Home" />
        <NavItem side="left" text="Profile" />
        <NavItem side="left" text="Timesheets" />
      </NavDrawer>

      <NavDrawer isOpen={toggleUserMenu} side="right">

        <NavItem side="right" text="Logout" />
        <NavItem side="right" text="Profile" />
        <NavItem side="right" text="Preferences" />
      </NavDrawer>

      <div className="footer">
        Some footer
      </div>

    </>
  )
}

export default App
