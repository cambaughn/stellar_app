import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { postQuestion } from '../../util/postQuestion';
import colors from '../../util/colors';

class AskQuestionModal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleSubmit() {
    if (this.state.text.length > 3 && this.state.text.length <= 200 ) {
      let question = {
        text: this.state.text,
        askerId: this.props.asker.id,
        answererId: this.props.answerer.id
      }

      postQuestion(question, question => {
        this.setState({ text: '' });
        this.props.getData(this.props.answerer.id)
      });

      this.props.toggleModal();
      console.log('submitting! => ', this.state.text);
    }
  }

  handleClose() {
    this.props.toggleModal();
    this.setState({ text: '' });
  }

  render() {
      return (
        <View>
          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.props.visible}
          >
            <View style={styles.container}>

              <View style={styles.topNav}>
                <TouchableHighlight
                  onPress={this.handleClose}
                  style={styles.exitButton}
                  underlayColor={'transparent'}
                >
                  <Text style={styles.exitText}>Cancel</Text>
                </TouchableHighlight>


                <Text style={styles.header}>Ask Question</Text>


                <TouchableHighlight
                  onPress={this.handleSubmit}
                  style={styles.submitButton}
                  underlayColor={'white'}
                >
                  <Text style={[styles.submitText, this.state.text.length < 3 && styles.greyedOut, this.state.text.length >= 200 && styles.greyedOut]}>
                    Send
                  </Text>
                </TouchableHighlight>
              </View>

              <View style={styles.inputGroup}>
                <View>
                  <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={styles.input}
                    placeholder={`Ask a question`}
                    placeholderTextColor={colors.midGrey}
                    autoCapitalize={'sentences'}
                    autoFocus={true}
                    returnKeyType={'default'}

                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                  />
                </View>
              </View>


              <KeyboardAvoidingView
                style={styles.keyboardAvoidingView}
                contentContainerStyle={styles.keyboardAvoidingView}
                behavior={'position'}
              >
                <Text style={[styles.textCount, this.state.text.length >= 200 && styles.noCharsLeft]}>
                  {200 - this.state.text.length}
                </Text>
              </KeyboardAvoidingView>

            </View>
          </Modal>

        </View>
      )
  }
}


const styles = StyleSheet.create({

  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,

    backgroundColor: 'white',
  },

  topNav: {
    height: 65,
    paddingTop: 18,
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 20,

    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  header: {
    fontSize: 18,
    fontWeight: '500',
  },

  exitButton: {
    width: '20%',
  },

  exitText: {
    fontSize: 18,
    color: colors.blue,
  },

  submitButton: {
    width: '20%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  submitText: {
    fontSize: 18,
    color: colors.blue,
  },

  greyedOut: {
    color: colors.midGrey
  },

  inputGroup: {
    width: Dimensions.get("window").width,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  input: {
    // backgroundColor: 'lightgreen',
    width: Dimensions.get("window").width - 25,
    minHeight: 30,
    maxHeight: 300,

    paddingLeft: 10,
    paddingRight: 10,

    fontSize: 20,
  },

  keyboardAvoidingView: {
    position: 'absolute',
    bottom: 0,
    left: 0,

    width: Dimensions.get("window").width,
    height: 50,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',

    paddingLeft: 25,
    paddingRight: 25,

    borderTopWidth: 1,
    borderTopColor: colors.lightGrey,

    // backgroundColor: 'yellow',
  },

  textCount: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.blue,
  },

  noCharsLeft: {
    color: colors.red,
  },
})

export default AskQuestionModal;
