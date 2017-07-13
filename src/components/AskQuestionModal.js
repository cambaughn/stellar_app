import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Modal, TouchableHighlight, TextInput } from 'react-native';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { postQuestion } from '../util/postQuestion';
import colors from '../util/colors';

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
    if (this.state.text.length > 3) {
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
                  <Text style={styles.submitText}>Send</Text>
                </TouchableHighlight>
              </View>

              <View>
                <TextInput
                  multiline={true}
                  numberOfLines={4}
                  style={styles.input}
                  placeholder={`Ask a question`}
                  placeholderTextColor={colors.midGrey}
                  autoCapitalize={'sentences'}
                  autoFocus={true}
                  returnKeyType={'send'}

                  onChangeText={text => this.setState({ text })}
                  value={this.state.text}
                />



              </View>
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
    height: 60,
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 30,

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
    fontSize: 16,
    color: colors.blue,
  },

  submitButton: {
    width: '20%',
  },

  submitText: {
    fontSize: 16,
    color: colors.blue,
  },

  buttonPrimary: {
    backgroundColor: colors.primary,

    width: Dimensions.get("window").width - 100,
    height: 40,

    marginTop: 20,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 3,

  },

  buttonPrimaryText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },

  input: {
    // backgroundColor: 'lightgreen',
    width: Dimensions.get("window").width - 100,
    minHeight: 30,
    maxHeight: 300,

    paddingLeft: 10,
    paddingRight: 10,

    fontSize: 20,
  },
})

export default AskQuestionModal;
