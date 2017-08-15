import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Redirect, Switch } from 'react-router-native';


import UserList from './UserList/UserList';
import Home from './Home';
import BottomNav from './BottomNav';
import TopNav from './TopNav';
import Login from './Login';
import Search from './Search/Search';
import UserProfileContainer from './User/UserProfileContainer';
import RecordAnswer from './RecordAnswer';
import Settings from './Settings/Settings';

import { getAllUsers } from '../util/getUsers';
import { getAllQuestions } from '../util/getQuestions';
import { setUsers, setQuestions, updateCurrentUser } from '../redux/actionCreators';


class App extends Component {

  constructor(props) {
    super(props);

    this.store = this.props.store;
    this.getUsers = this.getUsers.bind(this);
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.props.store.subscribe(this.forceUpdate.bind(this))
  }

  getUsers() {
    return this.store.getState().users;
  }

  getQuestions() {
    return this.store.getState().questions;
  }

  getCurrentUser() {
    return this.store.getState().currentUser;
  }

  setCurrentUser(user) {
    this.store.dispatch(updateCurrentUser(user));
  }


  componentDidMount() {
    getAllQuestions(questions => {
      this.store.dispatch(setQuestions(questions));
    })

    getAllUsers(users => {
      this.store.dispatch(setUsers(users));
    })

  }


  render() {
    if (!this.store.getState().currentUser.id) {
      return (
        <View>
          <Login setCurrentUser={this.setCurrentUser} />
        </View>
      )
    } else {
      return (
        <NativeRouter>
          <View style={styles.container}>
            <TopNav />
            <Switch>


              <Route exact path='/' render={() => <Redirect to={'/search'} />} />

              {/* <Route exact path='/' render={() => <Home questions={this.getQuestions()} /> }/> */}
              <Route path='/search' render={() => <Search users={this.getUsers()} /> }/>

              <Route path='/record_answer/:questionId' component={RecordAnswer} />

              <Route path='/user/:userId' render={({ match }) =>  <UserProfileContainer match={match} store={this.store} /> } />

              <Route path='/settings' render={({ match }) =>  <Settings user={this.getCurrentUser()} /> } />

              <Route path='/login' component={Login} />

            </Switch>

            <Route path='/' render={({match, location}) => <BottomNav currentUser={this.getCurrentUser()} selectedTab={this.store.getState().selectedTab} store={this.store} /> }/>

          </View>
        </NativeRouter>
      );
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
