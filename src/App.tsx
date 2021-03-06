import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter as Router, Link,
} from 'react-router-dom';
import {Container, Divider} from "@material-ui/core";

function App() : JSX.Element {
  return (
    <div className="App">
      <Router>
      <AppBar position="static" style={{ background: '#8932ca' }}>
        <Toolbar>
          <Typography variant="h6" >
            <Link to="/" className="logo">
              ZK.Contact
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className="site-container" maxWidth="sm">

        <br/>
        <Typography>The definitive list for projects in the Zero Knowledge Space</Typography>
        <Typography className="red">This site is in Beta, please <a target="_blank" href="https://unegma.com/contact">drop a message</a> if you feel there is any error</Typography>
        <br/>

        <br/>
        <Divider/>
        <br/>

        <Typography variant="h5">Community</Typography>
        <p className="bold"><a href="https://www.zeroknowledge.fm/" target="_blank" className="hi">Zero Knowledge Podcast</a> - Where we talk about zero knowledge research and the decentralised web</p>
        <p className="bold"><a href="https://zkproof.org/" target="_blank" className="hi">ZKProof Standards</a> - A global movement to standardize and mainstream advanced cryptography by building a community-driven trust ecosystem</p>

        <br/>
        <Divider/>
        <br/>

        <Typography variant="h5">Privacy Tools</Typography>
        <p><a href="https://www.hyperledger.org/use/ursa" target="_blank" className="hi">Hyperledger Ursa</a> - Hyperledger Ursa is a shared cryptographic library, it enables implementations to avoid duplicating other cryptographic work and hopefully increase security in the process</p>
        <p><a href="https://github.com/EYBlockchain/nightfall" target="_blank" className="hi">Nightfall</a> - EY Nightfall</p>
        <p><a href="https://github.com/EYBlockchain/starlight" target="_blank" className="hi">Starlight</a> - Generate a zApp from a Solidity contract</p>
        <p><a href="https://github.com/haael/white-box-fapkc" target="_blank" className="hi">White-box-fapkc</a> - White-Box Cryptography based on FAPKC algorithm</p>
        <p><a href="https://zokrates.github.io/" target="_blank" className="hi">ZoKrates</a> - ZoKrates is a toolbox for zkSNARKs on Ethereum</p>

        <br/>
        <Divider/>
        <br/>

        <Typography variant="h5">Consultancy</Typography>
        <p><a href="http://extropy.foundation/" target="_blank" className="hi">Extropy Foundation</a> - Blockchain Consultancy</p>
        <p><a href="http://extropy.io/" target="_blank" className="hi">Extropy.io</a> - Making blockchain knowledge accessible</p>

        <br/>
        <Divider/>
        <br/>

        <Typography variant="h5">Info/Research</Typography>
        <p><a href="https://matter-labs.io/" target="_blank" className="hi">Matter Labs</a> - We are an engineering team passionate about liberty, blockchain, and math</p>
        <p><a href="https://vitalik.ca/" target="_blank" className="hi">Vitalik Buterin's website</a> - Articles and info by Vitalik Buterin</p>
        <p><a href="https://zkvalidator.com/" target="_blank" className="hi">ZKValidator</a> - Stake & Support ZKP Research</p>

        <br/>
        <Divider/>
        <br/>

        <Typography variant="h5">Layer 2</Typography>
        <p><a href="https://aztec.network/" target="_blank" className="hi">Aztec</a> - Scalable Privacy on Ethereum</p>
        <p><a href="https://zksync.io/" target="_blank" className="hi">ZK Sync</a> - Rely on math, not validators</p>
        <p><a href="https://starkware.co/" target="_blank" className="hi">Starkware</a> - Bringing scalability and privacy to a blockchain near you</p>

        <br/>
        <Divider/>
        <br/>

        <Typography variant="h5">DEX/DApps</Typography>
        <p><a href="https://www.fluidex.io/" target="_blank" className="hi">Fluidex</a> - zk-rollup orderbook DEX on Ethereum using PLONK</p>
        <p><a href="https://hermez.io/" target="_blank" className="hi">Hermez</a> - Scalable payments. Decentralised by design, open for everyone</p>
        <p><a href="https://tornado.cash/" target="_blank" className="hi">Tornado Cash</a> - A fully decentralized protocol for private transactions on Ethereum</p>
        <p><a href="https://zks.org/" target="_blank" className="hi">ZKSwap</a> - ZK-Rollups based layer-2 DEX with the AMM model</p>

        <br/>
        <Divider/>
        <br/>

        <Typography variant="h5">Blockchain</Typography>
        <p><a href="https://minaprotocol.com/" target="_blank" className="hi">Mina Protocol</a> - The world's lightest blockchain, powered by participants</p>
        <p><a href="https://www.horizen.io/" target="_blank" className="hi">Horizen.io</a> - Unlock the power of blockchain for real-world use cases</p>
        <p><a href="https://ironfish.network" target="_blank" className="hi">Ironfish.network</a> - Enable the free flow of assets through accessible and private cryptocurrency</p>

        <br/>
        <Divider/>
        <br/>


        <Typography variant="h5">Various</Typography>
        <p><a href="https://celo.org/" target="_blank" className="hi">Celo</a> - Global payments infrastructure built for mobile</p>
        <p><a href="https://twitter.com/JoshuaWBaron/status/1384217010419101697" target="_blank" className="hi">DARPA SIEVE</a> - SIEVE is one of many cryptography programs that DARPA has run over the last decade</p>

        <br/>
        <Divider/>
        <br/>


        <p><a href="https://unegma.com" target="_blank" className="hi">By Unegma</a><br/>Thanks to the wider blockchain/zkp community for contributions</p>
        <p className="bold"><a href="https://github.com/unegma/zk.contact" target="_blank">Add to this site</a> - Github</p>
        <br/>

      </Container>

      </Router>
    </div>
  );
}

export default App;
