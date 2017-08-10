
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { Link, Redirect } from 'react-router-native';

import TopNavOverlay from '../TopNav/TopNavOverlay';
import colors from '../../util/colors';
import { updateUser } from '../../util/updateUserProfile';


class ProfileSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.user.name,
      email: this.props.user.email,
      bio: this.props.user.bio,

      cancel: false,
    }

    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCancel() {
    this.setState({ cancel: true });
  }

  handleSubmit() {

    let userSettings = {
      id: this.props.user.id,
      name: this.state.name,
      email: this.state.email,
      bio: this.state.bio,
    }

    if (userSettings.name.length >= 3 && userSettings.email.length >= 3) {
      updateUser(userSettings, this.handleCancel);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TopNavOverlay leftText={'Cancel'}
          rightText={'Save'}
          leftOnPress={this.handleCancel}
          rightOnPress={this.handleSubmit}
          show={this.state.name.length >= 3 && this.state.email.length > 3}
        />

        { this.state.cancel &&
          <Redirect to={`/user/${this.props.user.id}`} />
        }

        <ScrollView style={styles.scrollView}>

          {/* <Text style={styles.text}>{this.props.user.profile_photo || 'Photo goes here'}</Text> */}

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder={`Name`}
              placeholderTextColor={colors.midGrey}
              autoCorrect={false}
              returnKeyType={'next'}

              onChangeText={name => this.setState({ name })}
              value={this.state.name}
            />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder={`Email`}
              placeholderTextColor={colors.midGrey}
              autoCorrect={false}
              returnKeyType={'next'}

              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.multilineInput}
              placeholder={`Write your bio`}
              placeholderTextColor={colors.midGrey}
              autoCorrect={true}
              returnKeyType={'next'}
              multiline = {true}
              numberOfLines = {4}

              onChangeText={bio => this.setState({ bio })}
              value={this.state.bio}
            />
          </View>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // ------------------------ CONTAINER

  container: {
  },

  scrollView: {
    height: '100%',
  },

  // ------------------------ INPUT

  inputWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,

    // backgroundColor: 'pink',
  },

  input: {
    minHeight: 50,
    paddingLeft: 20,

    fontSize: 16,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',

    // backgroundColor: 'lightgreen',
  },

  multilineInput: {
    minHeight: 80,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,

    fontSize: 16,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',

    // backgroundColor: 'lightgreen',
  },


})


export default ProfileSettings;
