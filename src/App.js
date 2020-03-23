import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import THEME from "./theme";

const Landing = lazy(() => import("./pages/Landing"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import('./pages/Home'));

const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route excat path="/login" component={Login} />
            <Route excat path="/home" component={Home} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
