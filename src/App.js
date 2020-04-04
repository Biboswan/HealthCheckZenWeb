import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Loader from './components/Loader';
import Footer from './components/Footer';
import THEME from "./theme";
import Header from './components/Header';

const Landing = lazy(() => import("./pages/Landing"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import('./pages/Home'));
const Signup = lazy(() => import("./pages/Signup"));
const PrivateRoute = lazy(() => import('./components/PrivateRoute'));

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    font-size: 1rem;
  }
  h1,h2,h3,h4,h5,p,span,section,article,ul,li {
    margin:0;
    padding:0;
  }
`;


const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <Header />
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
