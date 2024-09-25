import React, { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import HeadLine from "../components/molecules/headeLine";
import DocDetailCard from "../components/molecules/docDetailCard";
import { docDetailCard } from "../constantData";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const DocDetails = () => {
  return (
    <View>
      <HeadLine />
      <View style={{ paddingHorizontal: wp(5.3) }}>
        {docDetailCard.map((favorite, favoriteIndex) => (
          <Fragment key={favoriteIndex}>
            <DocDetailCard
              doctorName={favorite.name}
              imageSource={favorite.avatar}
              doctorSpecialty={favorite.area}
              rating={favorite.rate}
              views={favorite.view}
            />
          </Fragment>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DocDetails;
