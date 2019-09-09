import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PhotoListContainer from './containers/PhotoListContainer';
import ShoppingCartContainer from './containers/ShoppingCartContainer';
import PhotoDetailContainer from './containers/PhotoDetailContainer';
// import ScrollToTop from './components/ScrollToTop';

function PhotoListRoute(routeProps) {
	return <PhotoListContainer {...routeProps}/>;
}

function PhotoDetailRoute(routeProps) {
	return <PhotoDetailContainer {...routeProps}/>;
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
            <Route path="/photo/:number" component={PhotoDetailRoute} />
            <Route exact path="/cart" component={ShoppingCartRoute} />
        </div>
      </Router>
  );
}

export default App;
