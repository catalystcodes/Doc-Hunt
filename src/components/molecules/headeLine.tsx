import React from "react";
import { View, Text, Pressable } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ArrowBack from "../atoms/icons/arrowback";
import SearchIcon from "../atoms/icons/searchIcon";
import { useNavigation } from "@react-navigation/native";

interface Props {
  title?: string;
  style?: object;
}

const HeadLine: React.FC<Props> = ({ title, style }) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.header, style]}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View
          style={{
            height: hp(3.7),
            width: wp(8),
            paddingHorizontal: wp(2.6),
            paddingVertical: hp(1.1),
            backgroundColor: "white",
            // justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <ArrowBack />
        </View>
      </Pressable>
      <Text
        style={{
          marginLeft: wp(5.1),
          fontSize: 18,
          fontWeight: "500",
          flexGrow: 1,
        }}
      >
        {title}
      </Text>
      <SearchIcon />
    </View>
  );
};

const styles = {
  header: {
    marginTop: hp(5.6),
    marginBottom: hp(4.7),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(5.3),
  },
};

export default HeadLine;
