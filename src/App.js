import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Loader from './components/Loader';
import LanguageBar from './components/LanguageBar';
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
    font-family: Arial;
    background-color: ${props => props.theme.color.bg};
  }

  main {
    height: 85vh;
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
        <BrowserRouter>
          <Header />
          <LanguageBar />
          <main>
            <Suspense fallback={<Loader/>}>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <PrivateRoute exact path="/home" component={Home} />
              </Switch>
            </Suspense>
          </main>
        </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
