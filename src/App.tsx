import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter as Router, Link,
} from 'react-router-dom';
import {Container} from "@material-ui/core";

function App() : JSX.Element {
  return (
    <div className="App">
      <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            <Link to="/" className="logo">
              Unegma.Work
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      {/*<Switch>*/}
      {/*  <Route exact path="/" component={DashboardPage} />*/}
      {/*  <Redirect to="/" />*/}
      {/*</Switch>*/}

      <Container className="site-container" maxWidth="sm">
        <Typography>This site contains links to various Projects and Proofs of Concept (POCs).</Typography>
        <a href="https://shopping.unegma.work" target="_blank" className="hi">Shopping POC</a>
      </Container>

      </Router>
    </div>
  );
}

export default App;
