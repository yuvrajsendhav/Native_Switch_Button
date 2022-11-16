// import { StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import { Switch } from 'react-native-gesture-handler';
// const Switchs = () => {
//     const [switchon , setSwitchon] = useState(false);
//     const ontoggleswitch = () => setSwitchon(!switchon)

//   return (
//     <Switch value={switchon} onValueChange={ontoggleswitch} />
//   )
// }

// // export default Switchs

// // const styles = StyleSheet.create({})

import {StyleSheet, Text, View, Switch } from 'react-native';
import React, {useState} from 'react';

const Switchs = () => {
  const [sweetch, setSweetch] = useState(false);
  const [text, setText] =useState(sweetch);
  const Toggle = () => {
    sweetch ? setText('Off') : setText('On')
    setSweetch(previousState=> !previousState)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Switch Example</Text>
      <Text style={styles.textStyle}>{text}</Text>
      <Switch
      trackColor={{false:"black" , true: 'tomato' }}
      thumbColor={sweetch ? 'green' : 'gray'}
        value={sweetch}
        onValueChange={Toggle}
      />
    </View>
  );
};
export default Switchs;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#344953',
  },
});

