import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';

import Footer from './components/footer.component';
import Homepage from './components/home.component';
import AuthorQs from './components/multiplequotes';

function App() {

  return (
    <>
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/:author" component={AuthorQs}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
