import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { Link } from 'react-router-native';


const SearchResults = ({ results }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        { results.map(result => (
          <Text>result.name</Text>
        ))}
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  // ------------------------ CONTAINER

  container: {
    backgroundColor: 'white',
  },

  // ------------------------ SCROLLVIEW
  scrollView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 60,
  },

})

export default SearchResults;
