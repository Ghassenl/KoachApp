import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, Text, Dimensions, } from "react-native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { PhoneSigninButton, FacebookSigninButton, GoogleSigninButton, SignoutButton } from "./components";
import styles from "./styles";

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const onAuthStateChanged: FirebaseAuthTypes.AuthListenerCallback = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.topContent}>
          {user ?
            <Text style={styles.welcome}>👋 Welcome {user.displayName || user.email}</Text>
            :
            <Text style={styles.mainText}>Koach App</Text>
          }
        </View>

        <View style={styles.bottomContent}>
          {user ?
            <SignoutButton />
            :
            <>
              <GoogleSigninButton />
              <FacebookSigninButton />
              <PhoneSigninButton />
            </>
          }
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
