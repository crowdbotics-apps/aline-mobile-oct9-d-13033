import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <Text>Sample text content 3333</Text>
      <Button
        title="Press me Updated!"
        color="#ca57ff"
        onPress={() => this.props.navigation.navigate("BlankScreen012046")}
      />
      <Text>Sample text content</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Text_3: { color: "#e62828" },
  Button_5: {},
  View_1: {},
  Text_3: { color: "#dc2828" },
  Button_5: {},
  View_1: {},
  Text_3: {},
  Button_5: {},
  View_1: {},
  Button_5: {},
  View_1: {},
  Text_7: { color: "#b41313" },
  Button_5: { color: "#ffffff" },
  View_1: {},
  Text_7: { color: "#ff0000" },
  Button_5: {},
  View_1: {},
  Text_7: {},
  Button_5: {},
  View_1: {},
  Text_7: {},
  Button_5: {},
  Text_9: {}
})
