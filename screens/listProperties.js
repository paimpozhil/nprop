import React,{ useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView , FlatList, List,  ListItem} from 'react-native';
import PropTypes from 'prop-types';

import { db } from '../src/config';
import 'firebase/firestore';
import { Appbar, TextInput, Button  } from 'react-native-paper';

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
