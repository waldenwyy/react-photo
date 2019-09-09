import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PhotoListContainer from './containers/PhotoListContainer';
import ShoppingCartContainer from './containers/ShoppingCartContainer';
// import ScrollToTop from './components/ScrollToTop';

function PhotoListRoute(routeProps) {
	return <PhotoListContainer {...routeProps}/>;
}

function ShoppingCartRoute(routeProps) {
	return <ShoppingCartContainer {...routeProps}/>;
}

function App() {
  return (
      <Router>
        <div className="App">
            {/* <ScrollToTop /> */}
            <Route exact path="/" component={PhotoListRoute} />
            <Route path="/page/:number" component={PhotoListRoute} />
            <Route exact path="/cart" component={ShoppingCartRoute} />
        </div>
      </Router>
  );
}

export default App;
