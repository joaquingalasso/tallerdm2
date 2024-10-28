// Definimos los pines para cada pulsador y el LED
const int upPin = 2;
const int downPin = 3;
const int leftPin = 4;
const int rightPin = 5;
const int confirmPin = 6;
const int indexPin = 7;
const int homePin = 8;
const int rfidPin = 9;  // Supongamos que el sensor RFID está en este pin

const int ledPin = 13;  // LED indicador

void setup() {
    // Configuramos los pines de entrada para cada pulsador y el RFID
    pinMode(upPin, INPUT);
    pinMode(downPin, INPUT);
    pinMode(leftPin, INPUT);
    pinMode(rightPin, INPUT);
    pinMode(confirmPin, INPUT);
    pinMode(indexPin, INPUT);
    pinMode(homePin, INPUT);
    pinMode(rfidPin, INPUT);
    
    // Configuramos el pin del LED como salida
    pinMode(ledPin, OUTPUT);
    
    // Inicializamos la comunicación serial
    Serial.begin(9600);
}

void loop() {
    // Verificamos cada pulsador y enviamos el mensaje correspondiente
    if (digitalRead(upPin) == HIGH) {
        Serial.println("up");
    } 
    if (digitalRead(downPin) == HIGH) {
        Serial.println("down");
    } 
    if (digitalRead(leftPin) == HIGH) {
        Serial.println("left");
    } 
    if (digitalRead(rightPin) == HIGH) {
        Serial.println("right");
    } 
    if (digitalRead(confirmPin) == HIGH) {
        Serial.println("confirm");
    } 
    if (digitalRead(indexPin) == HIGH) {
        Serial.println("index");
    } 
    if (digitalRead(homePin) == HIGH) {
        Serial.println("home");
    } 
    if (digitalRead(rfidPin) == HIGH) {
        Serial.println("rfid");
    }

    // Control del LED para indicar que el sistema está activo
    digitalWrite(ledPin, HIGH);  
    delay(100); // Delay para evitar múltiples lecturas rápidas
    digitalWrite(ledPin, LOW);  
}
