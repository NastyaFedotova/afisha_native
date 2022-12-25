import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

export const EventScreen = () => {
  const { event } = useSelector((state) => state.event);
  const ratingStars = useMemo(() => {
    [...Array(event.rating < 0 ? 0 : event.rating)].map((value, index) => (
      <Image
        key={index}
        source={require("../../assets/star.png")}
        style={styles.starGrey}
      />
    ));
  }, [event]);

  return (
    <ScrollView>
      <View style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.price}>{event.price} Р.</Text>
          <View style={styles.starContainer}>{ratingStars}</View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e0e5ff",
    padding: 12,
    minHeight: Dimensions.get("window").height,
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 24,
    marginBottom: 20,
    width: "100%",
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 24,
    fontWeight: "700",
  },
  image: {
    width: "100%",
    height: 500,
    borderRadius: 16,
    marginTop: 24,
  },
  price: {
    backgroundColor: "royalblue",
    alignSelf: "flex-start",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    color: "white",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 32,
  },
  starContainer: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 24,
  },
  star: {
    width: 40,
    height: 40,
  },
  starGrey: {
    width: 40,
    height: 40,
    opacity: 0.6,
  },
});
