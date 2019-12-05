import * as React from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import * as Facebook from 'expo-facebook';
export default class App extends React.Component {

  FBlogIn = async () => {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions
      } = await Facebook.logInWithReadPermissionsAsync("645395475996306", {
        permissions: ["public_profile"]
      });

      if (type === "success") {
        // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`
    );
    Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
  } else {
     alert(`Facebook Login Error: Cancelled`);
  }
} catch ({ message }) {
  alert(`Facebook Login Error: ${message}`);
}
};
render() {

  return (
    <View style={styles.container}>
    <Text style={{fontWeight: 'bold', color: '#fff', fontSize:30, justifyContent:'center', marginVertical:10}}>
       </Text>
      <Image
        style={{width: 300, height: 300, alignContent: 'center'}}
        source={{uri: 'https://www.facebook.com/'}}
      />

    <Text style={{fontWeight: 'bold', color: '#fff', fontSize:30, justifyContent:'center', marginVertical:10}}>
           Login With Facebook

    </Text>

        <TouchableOpacity
              style={{
                backgroundColor: "#3f5c9a",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: 60,
                borderColor: "#3f5c9a",
                borderWidth: 1
              }}
              onPress={this.FBlogIn}
            >

              <FontAwesome name="facebook-f" size={20} color="white" />
            </TouchableOpacity>


    </View>
  );
}}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000'
  }
});