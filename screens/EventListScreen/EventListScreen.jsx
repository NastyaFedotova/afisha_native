import {
  View,
  Dimensions,
  ScrollView,
  Alert,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";
import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEventList } from "../../store/eventSlice";
import { EventCard } from "../../components/EventCard";
import { axiosInstance } from "../../axios";
import { setUser } from "../../store/userSlice";

export const EventListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { eventList } = useSelector((store) => store.event);
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    async function getAllEvents() {
      await axiosInstance
        .get("/events/")
        .then((response) => dispatch(setEventList(response?.data)));
    }
    if (eventList?.length === 0) getAllEvents();
  }, [dispatch, eventList]);

  useEffect(() => {
    async function getUser() {
      await axiosInstance
        .post("/login/", {
          username: "nastya",
          password: "fedotova",
        })
        .then((response) => dispatch(setUser(response?.data)));
    }
    if (user === null) getUser();
  }, [dispatch]);

  const handlePress = useCallback(() => {
    navigation.navigate("Basket");
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.basket}>
        <Pressable title="" onPress={handlePress} style={styles.button} />
        <Text style={styles.title}>Корзина</Text>
      </View>
      <View style={styles.container}>
        {eventList?.map((event) => (
          <EventCard key={event.id} navigation={navigation} {...event} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F16D95",
    padding: 12,
    minHeight: Dimensions.get("window").height,
  },
  basket: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e0e5ff",
    padding: 12,
  },
  button: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "transparent",
    zIndex: 1,
  },
});
