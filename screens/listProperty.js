import React from 'react';
import { List } from 'react-native-paper';



function Property({ id, title, complete }) {
/*  async function toggleComplete() {
    await firestore()
      .collection('todos')
      .doc(id)
      .update({
        complete: !complete,
      });
  }
*/
  return (
    <List.Item
      title={title}
    
      left={props => (
        <List.Icon {...props}/>
      )}
    />
  );
}

export default React.memo(Property);