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
              ZK.Contact
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className="site-container" maxWidth="sm">
        <Typography>The definitive list for projects in the Zero Knowledge Space</Typography>

        <br/>

        <Typography variant="h6"></Typography>
        <p><a href="https://www.zeroknowledge.fm/" target="_blank" className="hi">Zero Knowledge Podcast</a> - Where we talk about zero knowledge research and the decentralised web</p>
        <p><a href="https://aztec.network/" target="_blank" className="hi">Aztec</a> - Scalable Privacy on Ethereum</p>
        <p><a href="https://zksync.io/" target="_blank" className="hi">ZK Sync</a> - Rely on math, not validators</p>

        <br/>

      </Container>

      </Router>
    </div>
  );
}

export default App;
