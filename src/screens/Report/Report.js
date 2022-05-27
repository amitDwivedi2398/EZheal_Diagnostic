
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import React from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Report() {
  return (
    <ScrollView style={styles.container}>
      <View >
        <View style={styles.date}>
          <Text style={{color:colors.blue}}>12/05/2022</Text>
        </View>
        <View>
          <Text style={styles.email}>Email</Text>
          <Text style={styles.email}>Marketing</Text>
        </View>
        <View>
          <Image style={{width:scaleWidth(400),height:scaleHeight(400)}} source={require('../../assets/email/email.png')} />
        </View>
        <View >
              <Text style={styles.lorem}>Email.A final note: starting this week, the React Native core team will resume holding monthly meetings. We'll make sure to keep everyone up-to-date with what's covered, and ensure to keep your feedback at hand for future meetings</Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  date:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:50,
  },
  lorem:{
    justifyContent:'center',
    alignSelf:'center',
    color:colors.blue,
    paddingHorizontal:scaleWidth(20)
  },
  email:{
    fontSize:40,justifyContent:'center',alignSelf:'center',fontWeight:'900',color:colors.blue
  }
})
  
