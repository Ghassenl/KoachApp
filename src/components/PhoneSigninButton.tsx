import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, } from "react-native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import Prompt from "react-native-input-prompt";
import { CommonStyles } from "./styles";

const PhoneSigninButton = () => {
  const [phoneNumberAlert, setPhoneNumberAlert] = useState(false);
  const [confirm, setConfirm] = useState<FirebaseAuthTypes.ConfirmationResult | null>(null);

  const signInWithPhoneNumber = () => {
    setPhoneNumberAlert(!phoneNumberAlert);
  }

  return (
    <>
      <TouchableOpacity
        style={[CommonStyles.socialButton, styles.phoneButton]}
        onPress={signInWithPhoneNumber}
      >
        <Image
          style={CommonStyles.socialIcon}
          source={require("../../assets/logos/phone.png")}
        />
        <Text style={[CommonStyles.socialButtonText, styles.phoneButtonText]}>
          Sign in with SMS
        </Text>
      </TouchableOpacity>

      <Prompt
        visible={phoneNumberAlert}
        title={!confirm ? "Your Phone Number" : "SMS Code"}
        placeholder={!confirm ? "+1 650-555-3434" : "123456"}
        onCancel={signInWithPhoneNumber}
        submitText={!confirm ? "Send SMS" : "Verify Number"}
        onSubmit={async (phoneNumberOrCode: string | null) => {
          if (phoneNumberOrCode) {
            if (!confirm) {
              const confirmation = await auth().signInWithPhoneNumber(phoneNumberOrCode);
              setConfirm(confirmation);
            } else {
              try {
                await confirm.confirm(phoneNumberOrCode);
                setPhoneNumberAlert(false);
              } catch (error) {
                console.log('Invalid code.');
              }
            }
          }
        }
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  phoneButton: {
    backgroundColor: "#c0c0c0",
  },
  phoneButtonText: {
    color: "#000000",
  },
});

export { PhoneSigninButton };
