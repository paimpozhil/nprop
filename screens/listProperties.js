import React,{ useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView , FlatList, List,  ListItem} from 'react-native';
import PropTypes from 'prop-types';

import { db } from '../src/config';
import 'firebase/firestore';
import { Appbar, TextInput, Button  } from 'react-native-paper';
import Property from './listProperty';

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

//export default class ListProperties extends Component{
	function Properties() {
		const [ property, setProperty ] = useState('');
		const [ loading, setLoading ] = useState(true);
		const [ properties, setProperties ] = useState([]);
		const ref = db.collection('Properties');
	async function addProperty(){
		await ref.doc(property).set({
        name: property
    });
	setProperty('');
	}
	useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const { name } = doc.data();
        list.push({
          id: doc.id,
          name,
          
        });
      });

      setProperties(list);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  return (
    <>
      <Appbar>
        <Appbar.Content title={'Properties List'} />
      </Appbar>
	  
     <FlatList 
        style={{flex: 1}}
        data={properties}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item title={item.id} />}
      />
      <TextInput label={'New Property'} onChangeText={setProperty} />
      <Button onPress={() => addProperty()}>Add Property</Button>
    </>
  );
}
//}
export default Properties;
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});


/*
export default class ItemComponent extends Component {
/*	 static propTypes = {
    Users: PropTypes.array.isRequired
  };

	// }
	async  listProp(){
		const promises = [];
		await db.collection("Properties").get().then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
			// doc.data() is never undefined for query doc snapshots
			promises.push(doc.id);
			console.log(doc.id, " => ", doc.data());
			//propertyName=doc.id || {};
		//	var propertiesList={};
			//propertiesList.push(propertyName.toString());
			
			//propertyList.push(propertyName);
			console.log("inside for ",propertyName);
			});
		});
		const snapshots = await Promise.all(promises)

        const results = []
        snapshots.forEach(snap => {
            const data = snap.data()
            data.city = snap.id
            results.push(data)
        })

        response.send(results)
		
	//	const properties = propertiesList;
	//	this.setState({properties});

		console.log("console inside function before return",propertyList);
	//	return <Text>      {propertyList}    </Text>;
	}
  render() {
	  // var propertyList = this.listProp();
	   
	   //console.log("console inside render",propertyList);
	 //  propertyList=propertyList.toString();
   return (
     
       // {this.props.Users.map((item, index) => {
		   
          //return (
		//  <View style={styles.itemsList}>
     //       <View key={index}>
	
              <Text >
			  Properties List
			  {this.listProp}</Text>
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
}); */