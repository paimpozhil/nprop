import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { db } from '../src/config';
import 'firebase/firestore';

export default class ItemComponent extends Component {
/*	 static propTypes = {
    Users: PropTypes.array.isRequired
  };
*/
	readData(){
		var propertyList;
		db.collection("Properties").get().then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
			// doc.data() is never undefined for query doc snapshots
			console.log(doc.id, " => ", doc.data());
			propertyList=doc.id;
			console.log(propertyList);
    });
	});
			if(propertyList!= null)
			{
				console.log("console inside function before return",propertyList);
				return(propertyList);
			}
	}
  render() {
	   var propertyList = this.readData();
	   //console.log("console inside render",propertyList);
	 //  propertyList=propertyList.toString();
   return (
     
       // {this.props.Users.map((item, index) => {
		   
          //return (
		//  <View style={styles.itemsList}>
     //       <View key={index}>
	
              <Text >
			  Properties List
			  {propertyList }</Text>
       //     </View>
		//	 </View>
          //);
        );
		}
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  itemtext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});