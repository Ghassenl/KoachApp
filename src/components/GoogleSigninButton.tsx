import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { CommonStyles } from "./styles";

GoogleSignin.configure({
  webClientId: "62070378276-s9ucndmeu9cj0p66p77m5h74cu47fk9h.apps.googleusercontent.com",
  offlineAccess: true,
});

const GoogleSigninButton = () => {
  const signinWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { idToken } = await GoogleSignin.signIn();

      return auth().signInWithCredential(
        auth.GoogleAuthProvider.credential(idToken),
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableOpacity
      style={[CommonStyles.socialButton, styles.googleButton]}
      onPress={signinWithGoogle}
    >
      <Image
        style={CommonStyles.socialIcon}
        source={require("../../assets/logos/google.png")}
      />
      <Text style={[CommonStyles.socialButtonText, styles.googleButtonText]}>
        Sign in with Google
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  googleButton: {
    backgroundColor: "#ffffff",
  },
  googleButtonText: {
    color: "#000000",
  },
});

export { GoogleSigninButton };
