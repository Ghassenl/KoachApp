import { StyleSheet, Text, TouchableOpacity, } from "react-native";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { CommonStyles } from "./styles";

const SignoutButton = () => {
  const logout = async () => {
    try {
      auth().signOut();
      await GoogleSignin.revokeAccess();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableOpacity
      style={[CommonStyles.socialButton, styles.signoutButton]}
      onPress={logout}
    >
      <Text style={[CommonStyles.socialButtonText, styles.signoutButtonText]}>
        Sign out
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signoutButton: {
    backgroundColor: "#000000",
  },
  signoutButtonText: {
    color: "#ffffff",
  },
});

export { SignoutButton };
