import { View, Text } from "react-native";
import { styles } from "../styles";

export default function WidgetPreview() {
  return (
    <View style={styles.widgetPreview}>
      <Text style={styles.horoscopeText}>Quotes...</Text>
      <Text style={styles.horoscopeText}>
        {new Date().toLocaleDateString()}
      </Text>
    </View>
  );
}
