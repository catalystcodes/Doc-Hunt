import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const doLogin = async (userInfo: Record<any, any>) => {
  if (!userInfo) return;

  try {
    const userExist = await getUser(userInfo);
    console.log("User  Exist:", userExist); // Log the user existence check
    if (!userExist) {
      Alert.alert("Username does not exist", "Sign up instead");
      return;
    }
    if (userExist.password !== userInfo.password) {
      Alert.alert("Username or password is incorrect", "Please try again");
      return;
    }
    await saveAuthUser(userExist);
    return userExist;
  } catch (error) {
    console.error("Error in doLogin:", error);
    Alert.alert("An error occurred", "Please try again later.");
  }
};

export const saveAuthUser = async (user: any) => {
  if (!user) return;
  try {
    await AsyncStorage.setItem("authUser", JSON.stringify(user));
  } catch (error) {}
};

export const getAuthUser = async () => {
  try {
    const userData = await AsyncStorage.getItem("authUser");
    if (userData === null) return userData;
    return JSON.parse(userData);
  } catch (error) {}
};

export const clearAuthUser = async () => {
  try {
    await AsyncStorage.removeItem("userInfo");
  } catch (error) {}
};

export const getAllUsers = async () => {
  try {
    const users = await AsyncStorage.getItem("users");
    if (users === null) return [];
    return JSON.parse(users);
  } catch (error) {}
};

export const addNewUser = async (user: any) => {
  try {
    const users = await getAllUsers();
    const userExist = await getUser(user, users);

    if (userExist) {
      Alert.alert("Username already exist", "Please choose another username");
      return;
    }

    await AsyncStorage.setItem("users", JSON.stringify([...users, user]));
    Alert.alert("User added successfully", "You can now login");
    return user;
  } catch (error) {}
};

const getUser = async (user: Record<any, any>, users?: any) => {
  try {
    const _users = users ?? (await getAllUsers());
    const userExist = _users.find(
      (u: any) => u.username.toLowerCase() === user.username.toLowerCase()
    );
    return userExist;
  } catch (error) {}
};
