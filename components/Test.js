import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import axios from "axios";

const Test = () => {
  const [dogPics, setDogPics] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random/10")
      .then((results) => {
        console.log(results.data.message);
        setDogPics(results.data.message);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <View onPress={() => console.log("PRESSED")}>
      <Text>This is another component</Text>
      <FlatList
        data={dogPics}
        renderItem={(all) => {
          return (
            <Image
              source={{ uri: all.item }}
              style={{ width: "100%", height: 250 }}
            />
          );
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Test;
