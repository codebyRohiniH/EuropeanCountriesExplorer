import React from "react";
import { StyleSheet } from "react-native";
import { List, TouchableRipple } from "react-native-paper";
import { Country } from "../types/country";

type CountryListItemProps = {
  country: Country;
  onPress: () => void;
}

const CountryListItem: React.FC<CountryListItemProps> = ({
  country,
  onPress,
}) => {
  const { name, capital, flags } = country || {};

  return (
    <TouchableRipple onPress={onPress}>
      <List.Item
        onPress={onPress}
        title={name?.common}
        description={`Capital: ${capital?.[0] || "N/A"}`}
        left={() => (
          <List.Image
            variant="image"
            source={{ uri: flags?.png }}
            style={styles.image}
          />
        )}
        titleStyle={styles.title}
        descriptionStyle={styles.description}
        style={styles.item}
      />
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#E5E4E2",
    marginHorizontal: 8,
    marginVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
   borderRadius:16
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});

export default CountryListItem;
