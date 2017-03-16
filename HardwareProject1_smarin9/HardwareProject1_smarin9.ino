/**
 * Author - Sean Marino
 * CSC 2463 - Hardware Assignment 1
 * Morse Code
 * 03/16/2017
 * Youtube Link: https://www.youtube.com/watch?v=VcPbunlH3BE&feature=youtu.be
 */

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);

  String message = "geaux tigers";
  int i = 0;

  //Reads each character and 
  
  while (i < message.length())
  {
    switch(message.charAt(i))
    {
    case 'a' :
      dot(); dash();
    break;
    case 'b' :
      dash(); dot(); dot(); dot();
    break;
    case 'c' :
      dash(); dot(); dash(); dot();
    break;
    case 'd' :
      dash(); dot(); dot();
    break;
    case 'e' :
      dot();
    break;
    case 'f' :
      dot(); dot(); dash(); dot();
    break;
    case 'g' :
      dash(); dash(); dot();
    break;
    case 'h' :
      dot(); dot(); dot(); dot();
    break;
    case 'i' :
      dot(); dot();
    break;
    case 'j' :
      dot(); dash(); dash(); dash();
    break;
    case 'k' :
      dash(); dot(); dash();
    break;
    case 'l' :
      dot(); dash(); dot(); dot();
    break;
    case 'm' :
      dash(); dash();
    break;
    case 'n' :
      dash(); dot(); 
    break;
    case 'o' :
      dash(); dash(); dash();
    break;
    case 'p' :
      dot(); dash(); dash(); dot();
    break;
    case 'q' :
      dash(); dash(); dot(); dash();
    break;
    case 'r' :
      dot(); dash(); dot();
    break;
    case 's' :
      dot(); dot(); dot();
    break;
    case 't' :
      dash();
    break;
    case 'u' :
      dot(); dot(); dash();
    break;
    case 'v' :
      dot(); dot(); dot(); dash();
    break;
    case 'w' :
      dot(); dash(); dash();
    break;
    case 'x' :
      dash(); dot(); dot(); dash();
    break;
    case 'y' :
      dash(); dot(); dash(); dash();
    break;
    case 'z' :
      dash(); dash(); dot(); dot();
    break;
    }
    i++;
  }
}

void loop() 
{
  // put your main code here, to run repeatedly:     
}

void dot()
{
  digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(450);                       // wait for a second
  digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
  delay(300);  
}

void dash()
{
  digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(900);                       // wait for a second
  digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
  delay(300);  
}



