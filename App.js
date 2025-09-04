import { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Modal } from "react-native";
import { styles } from "./styles";
import Header from "./components/Header";
import WidgetPreview from "./components/WidgetPreview";
import CustomizeButton from "./components/CustomizeButton";

export default function App() {
  const [showCustomize, setShowCustomize] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />

      <Header />

      {/* Main Content*/}
      <View style={styles.mainContent}>
        <WidgetPreview />

        <CustomizeButton onPress={() => setShowCustomize(true)} />

        {/* Custom Sheet */}
        <Modal
          visible={showCustomize}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setShowCustomize(false)}
        >
          <View style={styles.customModal}>
            <View style={styles.bottomSheet}>
              <View style={styles.sheetHandle} />
              <TouchableOpacity
                style={styles.sheetCloseButton}
                onPress={() => setShowCustomize(false)}
              >
                <Text style={styles.whiteNormalText}>X</Text>
              </TouchableOpacity>
              <Text style={styles.sheetTitle}>Customize Your Horoscope</Text>
              <Text style={styles.sheetBgSection}>BACKGROUND</Text>
              <View style={styles.sheetBgContent}>
                <View style={styles.hStackSpaceB}>
                  <Text style={styles.whiteNormalText}>Background Colors</Text>
                  <TouchableOpacity>
                    <Text style={styles.whiteNormalText}>O</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
