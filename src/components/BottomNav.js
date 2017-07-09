import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import stylePresets from '../util/stylePresets';
import colors from '../util/colors';


class BottomNav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: 'home',
    }

    this.setSelected = this.setSelected.bind(this)
  }

  setSelected(selected) {
    console.log('triggered')
    this.setState({ selected })
  }

  render() {

    console.log(this.state.selected)
    return (
      <View style={styles.container}>

        <Link
          to='/'
          underlayColor='white'
          style={styles.button}
          onPress={() => this.setSelected('home')}
        >
          <Icon name='home' style={[styles.icon, this.state.selected === 'home' && styles.selected]} />
        </Link>

        <Link
          to='/search'
          underlayColor='white'
          style={styles.button}
          onPress={() => this.setSelected('search')}
        >
          <Icon name='search' style={[styles.icon, this.state.selected === 'search' && styles.selected]} />
        </Link>

        <Link
          to={`/user/${this.props.currentUser.id}`}
          underlayColor='white'
          onPress={() => this.setSelected('user')}
          style={styles.button}
        >
          <Icon name='user' style={[styles.icon, this.state.selected === 'user' && styles.selected]} />
        </Link>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',

    position: 'absolute',
    bottom: 0,
    left: 0,

    borderTopWidth: 1,
    borderColor: colors.lightGrey,
    backgroundColor: 'white',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    zIndex: 1,
  },

  button: {
    width: '33%',
    height: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    color: colors.midGrey,
    fontSize: 20,
  },

  selected: {
    color: colors.blue,
  },
})

export default BottomNav;
