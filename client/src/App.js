import logo from './logo.svg';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom";

// Redux
import { Provider } from 'react-redux';
import store from "./redux/store";
// Scroll component - once route has changed scroll to top
import ScrollToTop from "./components/components/ScrollToTop";
// App components
import Header from "./components/components/Header";
import Footer from "./components/components/Footer";
// App Pages
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <div className="App">
          <div className="app-container">
        <Header />
            <Switch>
              <Route path="/services">
                <Services />
              </Route>
              <Route  path="/portfolio">
                <Portfolio />
              </Route>
              <Route  path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
            </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
