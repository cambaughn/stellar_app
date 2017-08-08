
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { Link } from 'react-router-native';

import colors from '../../util/colors';


class ProfileSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.user.name,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>

          {/* <Text style={styles.text}>{this.props.user.profile_photo || 'Photo goes here'}</Text> */}

          <TextInput
            style={styles.input}
            placeholder={`Name`}
            placeholderTextColor={colors.midGrey}
            autoCorrect={false}
            returnKeyType={'next'}

            // onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />

          <Link to={'/'} style={styles.optionLink}>
            <Text style={styles.text}>{this.props.user.name}</Text>
          </Link>

          <Link to={'/'} style={styles.optionLink}>
            <Text style={styles.text}>{this.props.user.email}</Text>
          </Link>

          <Link to={'/'} style={styles.optionLink}>
            <Text style={styles.text}>{this.props.user.bio || 'Write your bio!'}</Text>
          </Link>

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

  // ------------------------ LINK

  optionLink: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,

    paddingLeft: 20,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,

    paddingLeft: 20,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  // ------------------------ TEXT

  text: {
    fontSize: 16,
  }
})


export default ProfileSettings;
