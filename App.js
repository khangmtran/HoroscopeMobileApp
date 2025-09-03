import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Modal } from "react-native";
import { styles } from "./styles";

export default function App() {
  const [showCustomize, setShowCustomize] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Daily Horoscope</Text>
        <Text style={styles.headerSubtitle}>Leo</Text>
      </View>

      {/* Main Content Area */}
      <View style={styles.mainContent}>
        {/* Widget */}
        <View style={styles.widgetPreview}>
          <Text style={styles.horoscopeText}>Quotes...</Text>
          <Text style={styles.horoscopeText}>
            {new Date().toLocaleDateString()}
          </Text>
        </View>

        {/* Custom Button */}
        <TouchableOpacity
          style={styles.customizeButton}
          onPress={() => setShowCustomize(true)}
        >
          <Text style={styles.customizeButtonText}>⚙️ Customize</Text>
        </TouchableOpacity>

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
                <Text style={styles.sheetCloseButtonText}>X</Text>
              </TouchableOpacity>
              <Text style={styles.sheetTitle}>Customize Your Horoscope</Text>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
