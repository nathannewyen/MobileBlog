import React, { useLayoutEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import List from "../components/List";

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Add")}>
          <Ionicons name="add-circle-sharp" size={35} color="#181818" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return <List />;
};

export default Home;
