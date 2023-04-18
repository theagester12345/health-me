import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/Styles";

// Profile screen
function ProfileScreen() {
  // Dummy data for profile information
  const profileData = {
    username: "JohnDoe",
    email: "johndoe@example.com",
    password: "********",
    dob: "01/01/1990",
  };

  const [resetPasswordDialogVisible, setResetPasswordDialogVisible] =
    useState(false);
  const [newPassword, setNewPassword] = useState("");

  const handleResetPassword = () => {
    setResetPasswordDialogVisible(true);
  };

  const handleSavePassword = () => {
    // Save new password logic here
    console.log("New password saved: ", newPassword);
    setResetPasswordDialogVisible(false);
  };

  return (
    <View style={{ backgroundColor: "#000", flex: 1 }}>
      <HeaderText title='Profile' />
      <View style={{ padding: 20 }}>
        <View style={{ marginTop: 20 }}>
          <Text style={globalStyles.label}>Username:</Text>
          <Text style={globalStyles.value}>{profileData.username}</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={globalStyles.label}>Email:</Text>
          <Text style={globalStyles.value}>{profileData.email}</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={globalStyles.label}>Password:</Text>
          <Text style={globalStyles.value}>{profileData.password}</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={globalStyles.label}>Date of Birth:</Text>
          <Text style={globalStyles.value}>{profileData.dob}</Text>
        </View>

        <TouchableOpacity
          onPress={handleResetPassword}
          style={{
            backgroundColor: "blue",
            padding: 20,
            marginTop: 20,
            alignSelf: "flex-start",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Reset Password
          </Text>
        </TouchableOpacity>
      </View>

      {resetPasswordDialogVisible && (
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              padding: 20,
              borderRadius: 5,
              width: "80%",
            }}
          >
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
              Reset Password
            </Text>
            <TextInput
              style={{
                borderWidth: 2,
                borderColor: "gray",
                padding: 10,
                marginBottom: 10,
              }}
              placeholder='Enter new password'
              onChangeText={(text) => setNewPassword(text)}
              value={newPassword}
              secureTextEntry
            />
            <TouchableOpacity
              onPress={handleSavePassword}
              style={{
                backgroundColor: "blue",
                padding: 10,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Save Password
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setResetPasswordDialogVisible(false)}
              style={{
                backgroundColor: "gray",
                padding: 10,
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

export default ProfileScreen;
