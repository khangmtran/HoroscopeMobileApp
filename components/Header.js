import { View, Text } from "react-native";
import { styles } from "../styles";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Daily Horoscope</Text>
      <Text style={styles.headerSubtitle}>Leo</Text>
    </View>
  );
}
