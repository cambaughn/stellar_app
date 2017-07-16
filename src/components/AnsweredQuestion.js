import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import WatchVideoModal from './WatchVideoModal';
import colors from '../util/colors';

class AnsweredQuestion extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    }

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topRow}>
          <View style={styles.questionAnswerer}>
            <Link to={`/user/${this.props.question.answerer.id}`} style={styles.link} underlayColor='white'>
              <Text style={styles.bold}>{this.props.question.answerer.name}</Text>
            </Link>
          </View>

          <TouchableHighlight
            underlayColor={'white'}
            onPress={this.toggleModal}
          >
            <Icon name={'play'} style={styles.replyText} />
          </TouchableHighlight>

        </View>

        <Text style={styles.questionText}>{this.props.question.text}</Text>

        <WatchVideoModal
          visible={this.state.modalVisible}
          toggleModal={this.toggleModal}
          question={this.props.question}
        />

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    minHeight: 50,

    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 25,

    borderBottomWidth: 1,
    borderColor: '#ecf0f1',

    width: Dimensions.get('window').width - 20,
  },

  topRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  questionAnswerer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },

  bold: {
    fontWeight: 'bold',
  },

  link: {
    marginBottom: 10,
  },

  questionText: {
    marginBottom: 10,
  },

  replyText: {
    color: colors.midGrey,
    fontSize: 15,
  }
})

export default AnsweredQuestion;
