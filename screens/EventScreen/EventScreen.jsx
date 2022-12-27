import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../axios";

export const EventScreen = () => {
  const dispatch = useDispatch();
  const [count, onChangeCount] = React.useState(0);

  const { event } = useSelector((state) => state.event);

  const handlePress = useCallback(() => {
    async function createTicket() {
      await axiosInstance
        .post("/tickets/", {
          user: 2,
          event: Number(event?.id),
          booking_date: new Date(),
          status: "BOOKED",
          count: Number(count),
        })
        .then((response) => dispatch(removeEvent(response?.data)));
    }
    createTicket();
    navigation.navigate("EventList");
  }, [navigation, count, event?.id]);

  return (
    <ScrollView>
      <View style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.price}>{event.price} Р.</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => onChangeCount(value)}
            value={count}
            keyboardType="number-pad"
          />
          <View style={styles.buttonView}>
            <Pressable
              title=""
              onPress={handlePress}
              style={styles.addToBasket}
            />
            <Text>Оформить</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F16D95",
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
    backgroundColor: "#E40045",
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
  input: {
    height: 40,
    borderWidth: 1,
    backgroundColor: "#ffffff",
    width: 100,
  },
  buttonView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e0e5ff",
    padding: 12,
  },
  addToBasket: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "transparent",
    zIndex: 1,
  },
});
