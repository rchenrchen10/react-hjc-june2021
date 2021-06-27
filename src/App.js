import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ArticleListPage } from './pages/ArticleListPage';
import { ArticlePage } from './pages/ArticlePage';
import {Menu}  from './pages/MenuWithNavLinks';
import './App.css';
import { NavBar } from './components/NavBar';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <div>
    <BrowserRouter>
      <div className="app">
      
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/a" exact component={HomePage}></Route>
            <Route path="/" exact>
              <p>maintainece alert</p>
              <HomePage myProp="hello" />
            </Route>
            <Route path="/about">
              <AboutPage /> 
            </Route>
            <Route path="/articles/:name">
              <ArticlePage />
            </Route>
            <Route path="/articles">
              <ArticleListPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </div>

      </div>

    </BrowserRouter>


    </div>
  );
}

export default App;
