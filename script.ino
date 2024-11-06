// #include <ESP8266WiFi.h>
// #include <BlynkSimpleEsp8266.h>

// char auth[] = "4d_jZQwLVspbK5JDn7zT0KxCriRJonEd"; // Replace with your Blynk Auth Token
// char ssid[] = "Ayush_5G";        // Replace with your Wi-Fi SSID
// char pass[] = "05121994";     // Replace with your Wi-Fi password

// const int redPin = D1;    // Change according to your setup
// const int greenPin = D2;  // Change according to your setup
// const int bluePin = D3;   // Change according to your setup
// // #define BLYNK_TEMPLATE_ID "TMPL3Tzccyup0"
// // #define BLYNK_TEMPLATE_NAME "LedControl"
// // #define BLYNK_AUTH_TOKEN "4d_jZQwLVspbK5JDn7zT0KxCriRJonEd"
// void setup() {
//   Serial.begin(115200);
//   Blynk.begin(auth, ssid, pass);

//   pinMode(redPin, OUTPUT);
//   pinMode(greenPin, OUTPUT);
//   pinMode(bluePin, OUTPUT);
// }

// void loop() {
//   Blynk.run(); // Keep the connection to Blynk
// }

// // This function is called when the slider value changes
// BLYNK_WRITE(V0) { // Red
//   int redValue = param.asInt();
//   analogWrite(redPin, redValue);
//     Serial.print("Red Value: ");     // Print the red value
//   Serial.println(redValue); 
// }

// BLYNK_WRITE(V1) { // Green
//   int greenValue = param.asInt();
//   analogWrite(greenPin, greenValue);
//   Serial.print("Green Value: ");     // Print the red value
//   Serial.println(greenValue); 
// }

// BLYNK_WRITE(V2) { // Blue
//   int blueValue = param.asInt();
//   analogWrite(bluePin, blueValue);
//     Serial.print("Blue Value: ");     // Print the red value
//   Serial.println(blueValue); 
// }
