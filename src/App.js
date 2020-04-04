import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Loader from './components/Loader'
import Footer from './components/Footer';
import THEME from "./theme";

const Landing = lazy(() => import("./pages/Landing"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import('./pages/Home'));
const Signup = lazy(() => import("./pages/Signup"));
const PrivateRoute = lazy(() => import('./components/PrivateRoute'));

const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <BrowserRouter>
        <Suspense fallback={<Loader/>}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/home" component={Home} />
          </Switch>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
