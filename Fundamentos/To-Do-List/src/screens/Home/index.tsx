import React, { Fragment, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

import { ToDoItem } from "./../../components/ToDoItem";
import Clipboard from "../../assets/Clipboard.png";
import Logo from "../../assets/Logo.png";
import AddImage from "../../assets/plus.png";

type ToDoList = {
  name: string;
  checked: boolean;
};

export function Home() {
  const [toDoList, setToDoList] = useState<ToDoList[]>([]);
  const [toDoName, setToDoName] = useState("");

  function checkItem(key: number) {
    setToDoList((prevState) => {
      prevState[key].checked = !prevState[key].checked;
      return [...prevState];
    });
  }

  function deleteItem(key: number) {
    setToDoList((prevState) => {
      prevState.splice(key, 1);
      return [...prevState];
    });
  }

  function handleChangeToDoName(name: string) {
    setToDoName(name);
  }

  function handleNewToDo() {
    setToDoList((prevState) => {
      let newTodo = { name: toDoName, checked: false };
      return [...prevState, newTodo];
    });
    setToDoName("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#808080"}
            onChangeText={handleChangeToDoName}
            value={toDoName}
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleNewToDo}>
            <Image source={AddImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.statisticsContainer}>
          <View style={styles.statistic}>
            <Text style={styles.createdCount}>Criadas</Text>
            <Text style={styles.countCreated}>{toDoList.length}</Text>
          </View>
          <View style={[styles.statistic, styles.statistic_end]}>
            <Text style={styles.finishedCount}>Concluídos</Text>
            <Text style={styles.countCreated}>
              {toDoList.filter((todo) => todo.checked).length}
            </Text>
          </View>
          <View />
        </View>
        <FlatList
          style={styles.flatListContainer}
          data={toDoList}
          renderItem={({ item, index }) => {
            return (
              <ToDoItem
                name={item.name}
                checked={item.checked}
                key={index}
                onCheckPress={() => {
                  checkItem(index);
                }}
                handleDelete={() => {
                  deleteItem(index);
                }}
              />
            );
          }}
          ListEmptyComponent={() => {
            return (
              <View style={styles.emptyListContainer}>
                <Image source={Clipboard} />
                <View>
                  <Text style={styles.listEmptyTitle}>
                    Você ainda não tem tarefas cadastradas{" "}
                  </Text>
                  <Text style={styles.listEmptyText}>
                    Crie tarefas e organize seus itens a fazer
                  </Text>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
}
