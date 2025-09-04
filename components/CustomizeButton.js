import { TouchableOpacity, Text } from "react-native";
import { styles } from "../styles";

export default function CustomizeButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.customizeButton} onPress={onPress}>
      <Text style={styles.customizeButtonText}>⚙️ Customize</Text>
    </TouchableOpacity>
  );
}
