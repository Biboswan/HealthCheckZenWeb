import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import THEME from "./theme";

const Landing = lazy(() => import("./pages/Landing"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import('./pages/Home'));
const PrivateRoute = lazy(() => import('./components/PrivateRoute'));

const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/home" component={Home} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
