import React, { useRef, useState } from "react";
import {
  Animated,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import Trash from "@assets/trash.png";
import Verified from "@assets/verified.png";
type Props = {
  name: string;
  checked: boolean;
  onCheckPress: () => void;
  handleDelete: () => void;
};

export function ToDoItem({ name, checked, onCheckPress, handleDelete }: Props) {
  return (
    <View style={styles.toDoItemContainer}>
      <TouchableOpacity
        onPress={onCheckPress}
        style={!checked ? styles.toDoItemCheck : styles.toDoItemChecked}
      >
        <Image
          source={Verified}
          style={!checked ? styles.toDoImgCheck : styles.toDoImgChecked}
          alt="Feito"
        />
      </TouchableOpacity>
      <Text style={styles.toDoText} numberOfLines={3} ellipsizeMode="tail">
        {name}
      </Text>
      <View style={styles.toDoBtns}>
        <TouchableHighlight style={[styles.toDoBtn]} onPress={handleDelete}>
          <Image source={Trash} style={styles.iconBtn} />
        </TouchableHighlight>
      </View>
    </View>
  );
}
