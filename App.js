import { useState } from "react";
import { View, StatusBar } from "react-native";
import { styles } from "./styling/AppStyles";
import Header from "./components/Header";
import WidgetPreview from "./components/WidgetPreview";
import CustomizeButton from "./components/CustomizeButton";
import CustomizeModal from "./components/CustomizeModal";
import ColorModal from "./components/ColorModal";
import oc from "open-color";

export default function App() {
  const [showCustomizeModal, setShowCustomizeModal] = useState(false);
  const [showColorModal, setShowColorModal] = useState(false);
  const [widgetBackgroundColor, setWidgetBackgroundColor] = useState("white");

  const colorPalette = [
    "white",
    ...oc.gray,
    "black",
    ...oc.red,
    ...oc.pink,
    ...oc.grape,
    ...oc.violet,
    ...oc.indigo,
    ...oc.blue,
    ...oc.cyan,
    ...oc.teal,
    ...oc.green,
    ...oc.lime,
    ...oc.yellow,
    ...oc.orange,
  ];

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor="black" />

      <Header />

      {/* Main Content*/}
      <View style={styles.mainContent}>
        {/* widget */}
        <WidgetPreview widgetBackgroundColor={widgetBackgroundColor} />

        {/* customize button */}
        <CustomizeButton onPress={() => setShowCustomizeModal(true)} />

        {/* Customize Modal*/}
        <CustomizeModal
          showCustomizeModal={showCustomizeModal}
          onClose={() => setShowCustomizeModal(false)}
          openColorModal={() => setShowColorModal(true)}
        />

        {/* Color Modal */}
        <ColorModal
          showColorModal={showColorModal}
          onClose={() => setShowColorModal(false)}
          colorPalette={colorPalette}
          changeBgColor={(color) => setWidgetBackgroundColor(color)}
          widgetBackgroundColor={widgetBackgroundColor}
        />
      </View>
    </View>
  );
}
