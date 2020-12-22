//jshint esversion:6

import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import React from "react";
import NoteList from "./notes/NoteList";
import NoteInfo from "./notes/NoteInfo";
import NoteAdd from "./notes/NoteAdd";
import NoteEdit from "./notes/NoteEdit";
import AboutPage from "./notes/AboutPage";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Navigation />
      <Main />
      <Footer />
    </Router>
  );
}

function Navigation() {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className='container'>
      <a className="navbar-brand" href="/"><span class="navbar-brand mb-0 h1">Keeper</span></a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/notes">Notes</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/about">About</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

function Main() {
  return(
    <Switch>
      <Route exact path="/" component={NoteAdd} />
      <Route exact path="/notes" component={NoteList} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/notes/new" component={NoteAdd} />
      <Route exact path="/notes/:_id" component={NoteInfo} />
      <Route exact path="/notes/:_id/edit" component={NoteEdit} />
    </Switch>
  );
}


export default App;
