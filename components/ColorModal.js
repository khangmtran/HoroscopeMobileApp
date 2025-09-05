import { Modal, View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles";

export default function ColorModal({
  showColorModal,
  onClose,
  colorPalette,
  changeBgColor,
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
          <TouchableOpacity
            style={styles.sheetCloseButton}
            onPress={onClose}
          >
            <Text style={styles.blackNormalText}>X</Text>
          </TouchableOpacity>
          <Text style={[styles.sheetTitle, { color: "black" }]}>
            Choose Color
          </Text>
          <View style={[styles.colorContainer]}>
            {colorPalette.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.colorItem, { backgroundColor: color }]}
                onPress={() => changeBgColor(color)}
              ></TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
}
