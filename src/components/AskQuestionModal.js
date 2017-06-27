import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Modal, TouchableHighlight, TextInput } from 'react-native';
import { Link } from 'react-router-native';

import { postQuestion } from '../util/postQuestion';
import colors from '../util/colors';

class AskQuestionModal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    if (this.state.text.length > 3) {
      let question = {
        text: this.state.text,
        askerId: this.props.asker.id,
        answererId: this.props.answerer.id
      }

      postQuestion(question, question => {
        this.setState({ text: '' })
        this.props.getData(this.props.answerer.id)}
      );

      this.props.toggleModal();
      console.log('submitting! => ', this.state.text);
    }
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

                <TouchableHighlight
                  onPress={this.handleSubmit}
                  style={styles.buttonPrimary}
                  underlayColor={colors.primary}
                >
                  <Text style={styles.buttonPrimaryText}>Ask</Text>
                </TouchableHighlight>

              </View>
            </View>
          </Modal>

        </View>
      )
  }
}


const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    height: '90%',
    width: '100%',

    backgroundColor: 'white',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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

  buttonPrimary: {
    backgroundColor: colors.primary,

    width: Dimensions.get("window").width - 100,
    height: 35,

    marginTop: 20,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },

  buttonPrimaryText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
})

export default AskQuestionModal;
