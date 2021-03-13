import './App.css';
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import UserPosts from './UserPosts' 
import ShowUser from './ShowUser'
import ShowDetails from './ShowDetails'




function App() {
  return (
    <div>
      <div class="navbar expand-lg bg-dark">
        <div className="row col-lg-12">
          <div className="col-md-2 " >
            <Link className="home" to="/">Home</Link>
          </div>
          <div className="col-md-2">
            <Link className="users" to="/users">Users</Link>
          </div>
          <div className="col-md-2 ">
            <Link className="posts" to="/posts">Posts</Link>
          </div>
        </div>
        </div>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/users" component={Users} exact={true}/>
        <Route path="/users/:id" component={ShowUser}/>
        <Route path="/posts" component={UserPosts} exact={true}/>
        <Route path="/posts/:id" component={ShowDetails}/>
    </div>
  );
}

export default App;
