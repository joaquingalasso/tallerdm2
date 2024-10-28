let serial;
let buttons = {
    up: document.getElementById("up"),
    down: document.getElementById("down"),
    left: document.getElementById("left"),
    right: document.getElementById("right"),
    confirm: document.getElementById("confirm"),
    index: document.getElementById("index"),
    home: document.getElementById("home")
};
let rfidStatus = document.getElementById("rfid-status");

function setup() {
    // Crear una conexión serial
    serial = new p5.SerialPort();
    serial.open("COM4"); // Cambia esto según tu puerto

    // Llamadas de evento para los datos seriales
    serial.on("connected", serverConnected);
    serial.on("data", gotData);
    serial.on("error", gotError);
}

function serverConnected() {
    console.log("Conectado al servidor serial.");
}

function gotError(theError) {
    console.error("Error en la comunicación serial: " + theError);
}

function gotData() {
    let currentString = serial.readLine().trim();
    if (!currentString) return;

    // Simula la activación de botones o RFID
    processArduinoData(currentString);
}

function processArduinoData(data) {
    document.getElementById("status").textContent = "Estado: " + data;
    if (data === "confirm") {
        simulateButtonPress("confirm");
    } else if (data === "rfid") {
        simulateRFIDDetection();
    } else if (buttons[data]) {
        simulateButtonPress(data);
    }
}

function simulateButtonPress(buttonId) {
    buttons[buttonId].classList.add("active");
    setTimeout(() => {
        buttons[buttonId].classList.remove("active");
    }, 500);
}

function simulateRFIDDetection() {
    rfidStatus.textContent = "RFID: Tarjeta detectada";
    rfidStatus.style.color = "green";
    setTimeout(() => {
        rfidStatus.textContent = "RFID: No detectado";
        rfidStatus.style.color = "#333";
    }, 1000);
}
