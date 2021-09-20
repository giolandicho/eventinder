import React, { useEffect } from 'react';
import Header from './components/Header';
import UserCards from './components/UserCards';
import Settings from './Settings';
import Messages from './components/Messages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Event from "./components/Event";
import './App.css';
import { auth } from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./redux/userSlice";
import Login from './Login';
import { verifyUser } from './redux/userSlice';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
          })
        )
        dispatch(verifyUser(authUser))
      }
      else{
        dispatch(logout())
      }
    })
  }, [dispatch])


  return (
      <div className='app'>
        {user ? <Router>
        <Header/>
        <Switch>
          <Route path="/Settings" component={Settings}/>
          <Route path="/Messages" component={Messages}/>
          <Route path="/addevent" component={Event}/>
          <Route exact path="/" component={UserCards}/>
        </Switch>
        </Router> 
        :
        <Login/>}
      </div>
  );
}

export default App;
