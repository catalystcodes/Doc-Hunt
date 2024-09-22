// import React from "react";
// import { Image, StyleSheet, Text, View } from "react-native";
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from "react-native-responsive-screen";
// import FavIcon from "../atoms/icons/favIcon";
// import BigFavIcon from "../atoms/icons/bigFavIcon";

// const DocCategoryCard = () => {
//   return (
//     <View style={styles.whole}>
//       <View style={styles.subWhole}>
//         <Image source={require("../../assets/Dr. Pediatrician.png")} />
//         <View style={{ marginLeft: wp(4) }}>
//           <View style={styles.subWhole1}>
//             <Text style={styles.docName}>Dr. Pediatrician</Text>
//             <BigFavIcon />
//           </View>
//           <Text style={styles.docSpecialty}>Specialist Cardiologist </Text>
//           <View style={styles.subWhole1}>
//             <Image source={require("../../assets/star.png")} />
//             <Text style={styles.rate}>
//               24<Text style={styles.view}>(2474 views)</Text>
//             </Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   whole: {
//     backgroundColor: "white",
//     height: hp(12.8),
//     width: wp(89.3),
//     borderRadius: 8,
//     paddingVertical: hp(1.4),
//     paddingHorizontal: wp(2.7),
//   },
//   subWhole: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   subWhole1: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   docName: {
//     fontSize: 18,
//     fontWeight: "500",
//     marginRight: wp(17.6),
//   },
//   docSpecialty: {
//     fontSize: 14,
//     color: "#677294",
//     marginTop: hp(0.6),
//     marginBottom: hp(1.6),
//   },
//   view: {
//     color: "#677294",
//     fontSize: 12,
//   },
//   rate: {
//     fontSize: 16,
//     marginLeft: wp(9.9),
//   },
// });

// export default DocCategoryCard;

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import FavIcon from "../atoms/icons/favIcon";
import BigFavIcon from "../atoms/icons/bigFavIcon";

interface DocCategoryCardProps {
  imageSource: any;
  doctorName: string;
  doctorSpecialty: string;
  rating: number;
  views: number;
}

const DocCategoryCard: React.FC<DocCategoryCardProps> = ({
  imageSource,
  doctorName,
  doctorSpecialty,
  rating,
  views,
}) => {
  return (
    <View style={styles.whole}>
      <View style={styles.subWhole}>
        <Image source={imageSource} />
        <View style={{ marginLeft: wp(4) }}>
          <View style={styles.subWhole1}>
            <Text style={styles.docName}>{doctorName}</Text>
            <BigFavIcon />
          </View>
          <Text style={styles.docSpecialty}>{doctorSpecialty}</Text>
          <View style={styles.subWhole1}>
            <Image source={require("../../assets/star.png")} />
            <Text style={styles.rate}>
              {rating}
              <Text style={styles.view}>({views} views)</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  whole: {
    backgroundColor: "white",
    height: hp(12.8),
    width: wp(89.3),
    borderRadius: 8,
    paddingVertical: hp(1.4),
    paddingHorizontal: wp(2.7),
    marginTop: hp(1.7),
  },
  subWhole: {
    flexDirection: "row",
    alignItems: "center",
  },
  subWhole1: {
    flexDirection: "row",
    alignItems: "center",
  },
  docName: {
    fontSize: 18,
    fontWeight: "500",
    marginRight: wp(17.6),
  },
  docSpecialty: {
    fontSize: 14,
    color: "#677294",
    marginTop: hp(0.6),
    marginBottom: hp(1.6),
  },
  view: {
    color: "#677294",
    fontSize: 12,
  },
  rate: {
    fontSize: 16,
    marginLeft: wp(9.9),
  },
});

export default DocCategoryCard;
