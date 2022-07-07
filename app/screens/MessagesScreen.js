import React, { useState } from "react";
import { FlatList } from "react-native";

import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "lorem ipsum this is a dumy text!",
    image: require("../assets/profile.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D lorem ipsum this is a dumy text!",
    image: require("../assets/products/Mocha.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D lorem ipsum this is a dumy text!",
    image: require("../assets/products/Offwhite.jpg"),
  },
  {
    id: 4,
    title: "T4",
    description: "D lorem ipsum this is a dumy text!",
    image: require("../assets/products/Purple.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };
  return (
    <>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Clicked", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages(initialMessages)}
      />
    </>
  );
}

export default MessagesScreen;
