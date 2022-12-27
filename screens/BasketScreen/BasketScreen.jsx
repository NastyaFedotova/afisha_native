import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    Pressable,
  } from "react-native";
  import React, { useEffect, useCallback } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { axiosInstance } from "../../axios";
  import { setTicket } from "../../store/ticketSlice";
  import { TicketCard } from "../../components/TicketCard/TicketCard";
  
  export const BasketScreen = () => {
    const dispatch = useDispatch();
    const { ticket } = useSelector((store) => store.ticket);
  
    useEffect(() => {
      async function getAllTickets() {
        await axiosInstance.get("/tickets/?user_id=2").then((response) => {
          dispatch(setTicket(response?.data));
        });
      }
      getAllTickets();
    }, [dispatch]);
  
    return (
      <ScrollView>
        <View style={styles.container}>
          {ticket
            ?.filter((item) => item?.status === "BOOKED")
            ?.map((item, index) => (
              <TicketCard {...item} key={index} />
            ))}
        </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#e0e5ff",
      padding: 12,
      minHeight: Dimensions.get("window").height,
    },
  });
  