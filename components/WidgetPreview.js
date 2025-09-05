import { View, Text } from "react-native";
import { styles } from "../styling/AppStyles";

export default function WidgetPreview({ widgetBackgroundColor = "white" }) {
  return (
    <View
      style={[styles.widgetPreview, { backgroundColor: widgetBackgroundColor }]}
    >
      {/* <View style={styles.widgetPreview}> */}
      <Text style={styles.horoscopeText}>Quotes...</Text>
      <Text style={styles.horoscopeText}>
        {new Date().toLocaleDateString()}
      </Text>
    </View>
  );
}
