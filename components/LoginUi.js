// import React, { useState } from 'react';
// import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// const LoginUi = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // You can implement your authentication logic here
//     if (email === 'user@example.com' && password === 'password') {
//         Alert.alert('Success', 'Login successful!');
//         navigation.navigate('Signup'); // Navigate to the 'Login' screen

//     } else {
//         Alert.alert('Error', 'Invalid email or password.');
//          navigation.navigate('Signup'); // Navigate to the 'Login' screen

//     }
//   };




//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         onChangeText={(text) => setEmail(text)}
//         value={email}
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         onChangeText={(text) => setPassword(text)}
//         value={password}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#007bff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });


// export default LoginUi;
import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { auth } from '../firebase'; // Assuming you have initialized Firebase in a separate file

const LoginUi = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      Alert.alert('Success', 'Account created successfully!');
      // Navigate to another screen or perform actions upon successful signup
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Enter your email"
      />
      <Text>Password:</Text>
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};


  
  export default LoginUi;
  

