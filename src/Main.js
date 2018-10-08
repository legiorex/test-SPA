import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Создаю тестовое SPA</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">О нас</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Контакты</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default Main;
