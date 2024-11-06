// import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
// import { useState } from 'react';
// import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Slider from '@react-native-community/slider';
// // import * as Permissions from 'expo-permissions';


// export default function Camera() {

//   const [redsliderValue, setRedSliderValue] = useState(0);
//   const [greensliderValue, setGreenSliderValue] = useState(0);
//   const [bluesliderValue, setBlueSliderValue] = useState(0);



//   const [facing, setFacing] = useState<CameraType>('back');
//   const [permission, requestPermission] = useCameraPermissions();

//   if (!permission) {
//     // Camera permissions are still loading.
//     return <View />;
//   }

//   if (!permission.granted) {
//     // Camera permissions are not granted yet.
//     return (
//       <View style={styles.container}>
//         <Text style={styles.message}>We need your permission to show the camera</Text>
//         <Button onPress={requestPermission} title="grant permission" />
//       </View>
//     );
//   }

//   function toggleCameraFacing() {
//     setFacing(current => (current === 'back' ? 'front' : 'back'));
//   }

//   return (
//     <View style={styles.container}>

//       <CameraView style={styles.camera} facing={facing}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
//             <Text style={styles.text}>Flip Camera</Text>
//           </TouchableOpacity>
//         </View>
//       </CameraView>

//       {/* // Red colour Slider  */}
//       <Text style={styles.label}> Red Value: {redsliderValue}</Text>
//       <Slider
//         style={styles.slider}
//         minimumValue={0}
//         maximumValue={255}
//         step={1}
//         value={redsliderValue}
//         onValueChange={(value) => setRedSliderValue(value)}
//         minimumTrackTintColor="#1fb28a"
//         maximumTrackTintColor="#d3d3d3"
//         thumbTintColor="#1fb28a"
//       />

//       {/* // Green colour Slider  */}
//       <Text style={styles.label}> Green Value: {greensliderValue}</Text>
//       <Slider
//         style={styles.slider}
//         minimumValue={0}
//         maximumValue={255}
//         step={1}
//         value={greensliderValue}
//         onValueChange={(value) => setGreenSliderValue(value)}
//         minimumTrackTintColor="#1fb28a"
//         maximumTrackTintColor="#d3d3d3"
//         thumbTintColor="#1fb28a"
//       />

//       {/* // Blue colour Slider  */}
//       <Text style={styles.label}> Blue Value: {bluesliderValue}</Text>
//       <Slider
//         style={styles.slider}
//         minimumValue={0}
//         maximumValue={255}
//         step={1}
//         value={bluesliderValue}
//         onValueChange={(value) => setBlueSliderValue(value)}
//         minimumTrackTintColor="#1fb28a"
//         maximumTrackTintColor="#d3d3d3"
//         thumbTintColor="#1fb28a"
//       />

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center', // Centers content horizontally

//   },
//   message: {
//     textAlign: 'center',
//     paddingBottom: 10,
//   },
//   camera: {
//     height: '50%',       // Set camera height to 50% of the screen
//     width: '100%',        // Full width
//     alignSelf: 'flex-start', // Align camera view at the top
//   },
//   buttonContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: 'transparent',
//     margin: 16,
//   },
//   button: {
//     flex: 1,
//     alignSelf: 'flex-end',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   bottomContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 20,
//   },
//   infoText: {
//     fontSize: 16,
//     color: 'gray',
//   },
//   slider: {
//     width: 300,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   label: {
//     fontSize: 13,
//     marginBottom: -5,
//   },
// });





// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Slider from '@react-native-community/slider';
// import axios from 'axios';

// const App = () => {
//   const [red, setRed] = useState(0);
//   const [green, setGreen] = useState(0);
//   const [blue, setBlue] = useState(0);

//   const sendRGBValues = () => {
//     // Send RGB values to Blynk using HTTP GET requests
//     axios.get(`http://blynk-cloud.com/4d_jZQwLVspbK5JDn7zT0KxCriRJonEd/update/V0?value=${Math.round(red)}`);
//     axios.get(`http://blynk-cloud.com/4d_jZQwLVspbK5JDn7zT0KxCriRJonEd/update/V1?value=${Math.round(green)}`);
//     axios.get(`http://blynk-cloud.com/4d_jZQwLVspbK5JDn7zT0KxCriRJonEd/update/V2?value=${Math.round(blue)}`);
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Red: {red}</Text>
//       <Slider 
//         minimumValue={0} 
//         maximumValue={255} 
//         value={red} 
//         onValueChange={(value) => { 
//           setRed(Math.round(value)); // Ensure value is an integer
//           sendRGBValues(); 
//         }} 
//       />
      
//       <Text>Green: {green}</Text>
//       <Slider 
//         minimumValue={0} 
//         maximumValue={255} 
//         value={green} 
//         onValueChange={(value) => { 
//           setGreen(Math.round(value)); // Ensure value is an integer
//           sendRGBValues(); 
//         }} 
//       />
      
//       <Text>Blue: {blue}</Text>
//       <Slider 
//         minimumValue={0} 
//         maximumValue={255} 
//         value={blue} 
//         onValueChange={(value) => { 
//           setBlue(Math.round(value)); // Ensure value is an integer
//           sendRGBValues(); 
//         }} 
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
// });

// export default App;





// import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
// import { useState } from 'react';
// import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Slider from '@react-native-community/slider';
// // import * as Permissions from 'expo-permissions';
// import axios from 'axios';



// export default function Camera() {

//   const [red, setred] = useState(0);
//   const [green, setgreen] = useState(0);
//   const [blue, setblue] = useState(0);



//   const [facing, setFacing] = useState<CameraType>('back');
//   const [permission, requestPermission] = useCameraPermissions();

//   if (!permission) {
//     // Camera permissions are still loading.
//     return <View />;
//   }

//   if (!permission.granted) {
//     // Camera permissions are not granted yet.
//     return (
//       <View style={styles.container}>
//         <Text style={styles.message}>We need your permission to show the camera</Text>
//         <Button onPress={requestPermission} title="grant permission" />
//       </View>
//     );
//   }

//   function toggleCameraFacing() {
//     setFacing(current => (current === 'back' ? 'front' : 'back'));
//   }

//     const sendRGBValues = () => {
//     // Send RGB values to Blynk using HTTP GET requests
//     axios.get(`http://blynk-cloud.com/4d_jZQwLVspbK5JDn7zT0KxCriRJonEd/update/V0?value=${Math.round(red)}`);
//     axios.get(`http://blynk-cloud.com/4d_jZQwLVspbK5JDn7zT0KxCriRJonEd/update/V1?value=${Math.round(green)}`);
//     axios.get(`http://blynk-cloud.com/4d_jZQwLVspbK5JDn7zT0KxCriRJonEd/update/V2?value=${Math.round(blue)}`);
//   };

//   return (
//     <View style={styles.container}>

//       <CameraView style={styles.camera} facing={facing}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
//             <Text style={styles.text}>Flip Camera</Text>
//           </TouchableOpacity>
//         </View>
//       </CameraView>

//       {/* // Red colour Slider  */}
//       <Text style={styles.label}> Red Value: {red}</Text>
//       <Slider
//         style={styles.slider}
//         minimumValue={0}
//         maximumValue={255}
//         step={1}
//         value={red}
//         onValueChange={(value) => {setred(value);
//           sendRGBValues();
//         }}
//         minimumTrackTintColor="#1fb28a"
//         maximumTrackTintColor="#d3d3d3"
//         thumbTintColor="#1fb28a"
//       />

//       {/* // Green colour Slider  */}
//       <Text style={styles.label}> Green Value: {green}</Text>
//       <Slider
//         style={styles.slider}
//         minimumValue={0}
//         maximumValue={255}
//         step={1}
//         value={green}
//         onValueChange={(value) => {setgreen(value);
//           sendRGBValues();
//         }}
//         minimumTrackTintColor="#1fb28a"
//         maximumTrackTintColor="#d3d3d3"
//         thumbTintColor="#1fb28a"
//       />

//       {/* // Blue colour Slider  */}
//       <Text style={styles.label}> Blue Value: {blue}</Text>
//       <Slider
//         style={styles.slider}
//         minimumValue={0}
//         maximumValue={255}
//         step={1}
//         value={blue}
//         onValueChange={(value) => {setblue(value);
//           sendRGBValues();
//         }}
//         minimumTrackTintColor="#1fb28a"
//         maximumTrackTintColor="#d3d3d3"
//         thumbTintColor="#1fb28a"
//       />

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center', // Centers content horizontally

//   },
//   message: {
//     textAlign: 'center',
//     paddingBottom: 10,
//   },
//   camera: {
//     height: '50%',       // Set camera height to 50% of the screen
//     width: '100%',        // Full width
//     alignSelf: 'flex-start', // Align camera view at the top
//   },
//   buttonContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: 'transparent',
//     margin: 16,
//   },
//   button: {
//     flex: 1,
//     alignSelf: 'flex-end',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   bottomContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 20,
//   },
//   infoText: {
//     fontSize: 16,
//     color: 'gray',
//   },
//   slider: {
//     width: 300,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   label: {
//     fontSize: 13,
//     marginBottom: -5,
//   },
// });


import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Slider from '@react-native-community/slider';
import axios from 'axios';

export default function Camera() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [isRecording, setIsRecording] = useState(false);
  const [videoUri, setVideoUri] = useState(null);
  
  const cameraRef = useRef(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const sendRGBValues = () => {
    axios.get(`https://blynk.cloud/external/api/update?token=4d_jZQwLVspbK5JDn7zT0KxCriRJonEd&pin=V0&value=${red}`);
    axios.get(`https://blynk.cloud/external/api/update?token=4d_jZQwLVspbK5JDn7zT0KxCriRJonEd&pin=V1&value=${green}`);
    axios.get(`https://blynk.cloud/external/api/update?token=4d_jZQwLVspbK5JDn7zT0KxCriRJonEd&pin=V2&value=${blue}`);
  };

  const toggleRecording = async () => {
    if (isRecording) {
      const videoData = await cameraRef.current.stopRecording();
      setVideoUri(videoData.uri);
      setIsRecording(false);
    } else {
      setIsRecording(true);
      const videoData = await cameraRef.current.recordAsync();
      setVideoUri(videoData.uri);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>

      {/* Red Slider */}
      <Text style={styles.label}>Red Value: {red}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={255}
        step={1}
        value={red}
        onValueChange={(value) => {setRed(value); sendRGBValues();}}
      />

      {/* Green Slider */}
      <Text style={styles.label}>Green Value: {green}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={255}
        step={1}
        value={green}
        onValueChange={(value) => {setGreen(value); sendRGBValues();}}
      />

      {/* Blue Slider */}
      <Text style={styles.label}>Blue Value: {blue}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={255}
        step={1}
        value={blue}
        onValueChange={(value) => {setBlue(value); sendRGBValues();}}
      />

      {/* Recording Button */}
      <View style={styles.recordButtonContainer}>
        <Button title={isRecording ? "Stop Recording" : "Start Recording"} onPress={toggleRecording} />
      </View>

      {videoUri && <Text style={styles.infoText}>Video saved at: {videoUri}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    height: '50%',
    width: '100%',
    alignSelf: 'flex-start',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 16,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  slider: {
    width: 300,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 13,
    marginBottom: -5,
  },
  recordButtonContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    marginTop: 10,
    color: 'gray',
    textAlign: 'center',
  },
});

