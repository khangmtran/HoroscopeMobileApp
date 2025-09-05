import { Modal, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../styling/AppStyles";
import { cmStyles } from "../styling/ColorModalStyles";
import WidgetPreview from "./WidgetPreview";

export default function ColorModal({
  showColorModal,
  onClose,
  colorPalette,
  changeBgColor,
  widgetBackgroundColor,
}) {
  return (
    <Modal
      visible={showColorModal}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modal}>
        <View style={styles.colorSheet}>
          <View style={styles.sheetHandle} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={cmStyles.headerContainer}>
              {/* spacer */}
              <View></View>
              <Text style={styles.blackBigText}>Pick a Color</Text>
              <TouchableOpacity onPress={onClose}>
                <Text style={styles.blackNormalText}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.colorContainer}>
              {colorPalette.map((color, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.colorItem, { backgroundColor: color }]}
                  onPress={() => changeBgColor(color)}
                ></TouchableOpacity>
              ))}
            </View>
            <Text
              style={[
                { alignSelf: "center", marginBottom: 10 },
                styles.blackBigText,
              ]}
            >
              Preview
            </Text>
            <View style={{ marginBottom: 10 }}>
              <WidgetPreview widgetBackgroundColor={widgetBackgroundColor} />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
