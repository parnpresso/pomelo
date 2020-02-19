import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import pic1 from './img/pic1.jpg';
import pic2 from './img/pic2.jpg';
import pic3 from './img/pic3.jpg';
import pic4 from './img/pic4.jpg';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/shirt">
          <Product />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

function Home() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'center'  }}>
      <div style={mystyle}>
       <a href='https://www.pomelofashion.com/th/en/tops/33759-floral-lace-sweetheart-smock-top-white.html'>
       <img style={{ width: '100%' }} src={pic1} />
       </a>
        <h3> Name: A </h3>

      </div>
      <div style={mystyle}>
        <Link to={'/shirt'}>
          <img style={{ width: '100%' }} src={pic2}/>
        </Link>
        <h3> Name: B </h3>
      </div>
      <div style={mystyle }>
        <img style={{ width: '100%' }} src={pic3}/>
        <h3> Name: C </h3>
      </div>
      <div style={mystyle }>
       <img style={{ width: '100%' }} src={pic4}/>
        <h3> Name: D </h3>
      </div>
    </div>
  );
}

function Product() {
  return (<h1>PRODUCT!!!</h1>);
}

const mystyle = {
  backgroundColor: 'green',
  color: 'orange',
  width: '40%',
  margin: '10px'
};
