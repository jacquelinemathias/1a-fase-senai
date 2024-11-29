int LED_VM=2; //LED ligado no pino 2
int LED_BR=3;
int LED_VD=4;

void setup() {
  pinMode(LED_VM,OUTPUT); //pino LED é saída
  pinMode(LED_BR,OUTPUT);
  pinMode(LED_VD,OUTPUT);
}

void loop() {
  digitalWrite(LED_VM,HIGH); //liga o pino LED
  delay(200); //Delay de 500 milissegundos
  digitalWrite(LED_VM,LOW);
  delay(200); //Delay de 500 milissegundos
  digitalWrite(LED_BR,HIGH);
  delay(200);
  digitalWrite(LED_BR,LOW);
  delay(200);
  digitalWrite(LED_VD,HIGH);
  delay(200);
  digitalWrite(LED_VD,LOW);
  delay(200);
}