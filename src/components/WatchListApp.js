import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { userStorageKey } from "./auth/authSettings"
import { NavBar } from "./nav/NavBar"

export const WatchListApp = () => (
  <>
    <Route render={() => {
      if (sessionStorage.getItem(userStorageKey)) {
        return (
          <>
            <NavBar />
          </>
        )
      } else {
        return <Redirect to="/login" />;
      }
      }} 
    />

  <Route path="/login">
    <Login />
  </Route>
  <Route path="/register">
    <Register />
  </Route>
</>
)