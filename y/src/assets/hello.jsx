import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const ShapeDrawingApp = () => {
const [selectedShape, setSelectedShape] = useState(null); const [drawnShapes, setDrawnShapes] = useState([]);
const [modalVisible, setModalVisible] = useState(false);
const shapes = ['Circle', 'Square', 'Triangle', 'Rectangle']; const renderShape = (shape, index) => {
switch (shape) { case 'Circle':
return <View key={index} style={styles.circle} />; case 'Square':
return <View key={index} style={styles.square} />; case 'Triangle':
return <View key={index} style={styles.triangle} />; case 'Rectangle':
return <View key={index} style={styles.rectangle} />; default:
return null;
}
};

const clearCanvas = () => { setDrawnShapes([]);
};

const handleCanvasPress = (event) => {
const { locationX, locationY } = event.nativeEvent;
const newShape = { shape: selectedShape, x: locationX, y: locationY };
};

return (
<View style={styles.container}>
<Text style={styles.header}>Shape Drawing App</Text>
<TouchableOpacity style={styles.canvas} onPress={handleCanvasPress}>
{drawnShapes.map((shape, index) => (
<View key={index} style={[styles.shape, styles[shape.shape.toLowerCase()], { left: shape.x, top: shape.y }]} />
))}
</TouchableOpacity>
<View style={styles.toolbar}>
{shapes.map((shape, index) => (
<TouchableOpacity key={index} style={styles.shapeButton} onPress={() => {
setSelectedShape(shape); setModalVisible(true);
}}
>
<Text>{shape}</Text>
</TouchableOpacity>
))}
<TouchableOpacity style={styles.clearButton} onPress={clearCanvas}>
<Text style={styles.clearButtonText}>Clear</Text>
</TouchableOpacity>
</View>
<Modal visible={modalVisible} animationType="slide" transparent={true}>
<View style={styles.modalContainer}>
<Text style={styles.modalText}>{selectedShape}</Text>
<TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
<Text style={styles.closeButtonText}>Close</Text>
</TouchableOpacity>
</View>
</Modal>
</View>
);
};

const styles = StyleSheet.create({ container: {
flex: 1,
alignItems: 'center', justifyContent: 'center', backgroundColor: '#F5F5F5',
},
header: { fontSize: 24,
fontWeight: 'bold', marginBottom: 20,
},
canvas: { width: '80%',
height: 400,
 
borderWidth: 1,
borderColor: '#000',
marginBottom: 20,
},
shape: {
position: 'absolute',
},
toolbar: { flexDirection: 'row', marginBottom: 20,
},
shapeButton: { padding: 10,
marginRight: 10,
borderWidth: 1,
borderColor: '#000',
borderRadius: 5,
},
clearButton: { padding: 10,
backgroundColor: '#FF6347', borderRadius: 5,
},
clearButtonText: { color: '#FFF',
},
circle: { width: 100,
height: 100,
borderRadius: 50,
backgroundColor: '#000',
},
square: { width: 100,
height: 100,
backgroundColor: '#000',
},
triangle: { width: 0,
height: 0,
borderLeftWidth: 50,
borderRightWidth: 50,
borderBottomWidth: 100, borderStyle: 'solid', backgroundColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent', borderBottomColor: '#000',
},
rectangle: { width: 150,
height: 100,
backgroundColor: '#000',
},
modalContainer: { flex: 1,
    justifyContent: 'center', alignItems: 'center',
backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalText: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#FFF',
},
closeButton: { padding: 10,
backgroundColor: '#FF6347', borderRadius: 5,
},
closeButtonText: { color: '#FFF',
},
});


 
