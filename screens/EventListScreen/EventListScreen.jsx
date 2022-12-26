import { View, Dimensions, ScrollView, Alert } from "react-native";
import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setEventList } from "../../store/eventSlice";
import { EventCard } from "../../components/EventCard";
import { axiosInstance } from "../../axios";
import { StyleSheet } from "react-native";

export const EventListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { eventList } = useSelector((store) => store.event);

  useEffect(() => {
    async function getAllEvents() {
      await axiosInstance
        .get("/events/")
        .then((response) => dispatch(setEventList(response?.data)));
    }
    if (!eventList?.length) getAllEvents();
  }, [dispatch, eventList]);

  return (
    <ScrollView>
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
});
