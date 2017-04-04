var serial;                             // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem1411';  // fill in your serial port name here
var inData;                             // for incoming serial data
var outByte = 0;

function setup() {
  createCanvas(400, 300);
  serial = new p5.SerialPort();       // make a new instance of the serialport library
  serial.on('list', printList);       // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing

  serial.list();                      // list the serial ports
  serial.open(portName);              // open a serial port
}

function draw() {
  // black background, white text:
  background(0, inData, 0);
  fill(255);
  // display the incoming serial data as a string:
  text("sensor value: " + inData, 30, 30);
}
// get the list of ports:
function printList(portList) {
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
    text(i + " " + portList[i]);
  }
}

function serverConnected() {
  text('connected to server.');
}

function portOpen() {
  text('the serial port opened.')
}

function serialEvent() {
  // read a byte from the serial port, convert it to a number:
  inData = Number(serial.read());
}

function serialError(err) {
  text('Something went wrong with the serial port. ' + err);
}

function portClose() {
  text('The serial port closed.');
}

function mouseClicked()
{
	if (outByte == 1)
	{
		outByte = 0;
	}
	else
	{
		outByte = 1;
	}
	serial.write(outByte);
}


