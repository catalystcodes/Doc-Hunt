import React, { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import HeadLine from "../components/molecules/headeLine";
import AllRecordCard from "../components/molecules/allRecordCard";
import { allRecordCardDetails } from "../constantData";
import { widthPercentageToDP } from "react-native-responsive-screen";

const AllRecord = () => {
  return (
    <>
      <HeadLine title="All Records" />
      <View
        style={{ width: widthPercentageToDP(89.3), marginHorizontal: "auto" }}
      >
        {allRecordCardDetails.map((favorite, favoriteIndex) => (
          <Fragment key={favoriteIndex}>
            <AllRecordCard
              date={favorite.date}
              name={favorite.name}
              numberOfPrescription={favorite.Prescription}
            />
          </Fragment>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default AllRecord;
