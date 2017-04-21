import './vendors';
import { Router, Route, browserHistory } from 'react-router';
import Layout from './layout/layout';
import Index from './pages/index';
import Profile from './pages/profile';
import Help from './pages/help';

let page = document.getElementById('page');

ReactDOM.render(
    <Router history={browserHistory}>
       <Route component={Layout} >
          <Route path="/" component={Index} />
          <Route path="/profile" component={Profile} />
          <Route path="/help" component={() => (<Help text="value" />)}/>
       </Route>
    </Router>, page);




