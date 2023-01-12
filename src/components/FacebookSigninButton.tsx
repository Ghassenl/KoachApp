import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import auth from "@react-native-firebase/auth";
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { CommonStyles } from "./styles";

const FacebookSigninButton = () => {
  const signinWithFacebook = async () => {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    return auth().signInWithCredential(facebookCredential);
  };

  return (
    <TouchableOpacity
      style={[CommonStyles.socialButton, styles.facebookButton]}
      onPress={signinWithFacebook}
    >
      <Image
        style={CommonStyles.socialIcon}
        source={require("../../assets/logos/facebook.png")}
      />
      <Text style={[CommonStyles.socialButtonText, styles.facebookButtonText]}>
        Sign in with Facebook
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  facebookButton: {
    backgroundColor: "#1877f2",
  },
  facebookButtonText: {
    color: "#ffffff",
  },
});

export { FacebookSigninButton };
