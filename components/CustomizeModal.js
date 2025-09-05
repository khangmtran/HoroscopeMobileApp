import { Modal, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../styling/AppStyles";

export default function CustomizeModal({
  showCustomizeModal,
  onClose,
  openColorModal,
}) {
  return (
    <Modal
      visible={showCustomizeModal}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modal}>
        <View style={styles.bottomSheet}>
          <View style={styles.sheetHandle} />
          <TouchableOpacity style={styles.sheetCloseButton} onPress={onClose}>
            <Text style={styles.whiteNormalText}>X</Text>
          </TouchableOpacity>
          <Text style={styles.sheetTitle}>Customize Your Horoscope</Text>
          <ScrollView>
            <Text style={styles.sheetBgSection}>BACKGROUND</Text>
            <View style={styles.sheetBgContent}>
              <View style={styles.hStackSpaceB}>
                <Text style={styles.whiteNormalText}>Background Colors</Text>
                <TouchableOpacity onPress={openColorModal}>
                  <Text style={styles.whiteNormalText}>O</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
