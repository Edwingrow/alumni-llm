## Intalaciones

1. Clonar el repositorio
2. Instalar las dependencias con `` yarn install ``
3. Correr el servidor con `` yarn start ``


## Instrucciones

1. Endpoint para enviar mensajes: `` POST /chat ``

```json
{
  "phone":"+52155667788",
  "question":"Hola, necesito ayuda."
}
```
Nota: La estructura la realice con el assistant, estoy usando mi propia OPENAI_API_KEY,
No estoy usando la de ustedes ya que vi que ya están usando un assistant y no quería interferir en su trabajo.
El backend crea su propio threads para cada usuario y crea el assistant_id.
Tener en cuenta eso ya que en la función de createRunUseCase pasa las instrucciones y puedo remplazar el contexto.
No es la mejor forma de trabajarlo pero quiero pulir el trabajo que hago con el assistant, además que ya tenia la información del estudiante proveido por ustedes.


## Como usar
Me tome el tiempo de subirlo a un srv y lo pueden probar con mi Token si así lo prefieren: http://vps-4122712-x.dattaweb.com:3000/





## #Ejercicios

1.- Ejercicio 1

Respuesta:
        a.  ¿Qué significa este estado?
          Indica que se crasheo el servicio y está en un Loop infinito hasta que pueda levantar
        b. ¿Qué información relevante puedes identificar desde aquí?
          Lo primero que puedo ver es que está en 0/1 indicando que no está activo, el nombre el status que está crasheado, en la columna de restarts se intento reiniciar 1615 veces y la ultima fue hace 54 segundos y la ultima que se creo hace 5 días y 18 hs

        c. ¿Cuáles pasos tomarías para debuggear el problema raíz del estado del pod? 
          De antemano comento que mi conocimiento en kubernetes es bajo, no he tenido la oportunidad de usarlo en prod, sin embargo en experiencia de todo servicio siempre debe haber un logs.
          Revisando la doc de kubernetes existe el comando para ver los logs de un pod ``kubectl logs [-f] [-p] (POD | TYPE/NAME) [-c CONTAINER]``

2.- Ejercicio 2
Respuesta: No podría responder bien las preguntas sin citar la documentación o datos de google.
          las leo y entiendo pero no aplica a este caso.

3. Ejercicio 3 
Respuesta: No pude entender el ejercicio.


4. Ejercicio 4  

Respuesta
Un poco la respuesta está en el anexo "encolamiento de trabajos en masa", al procesar tanta cantidad de peticiones lo ideal es con un proceso de colas, comento que nunca tuve la oportunidad de trabajar en un proyecto tan grande, se que existe RabbitMQ  que ayuda con el proceso de colas
Pero tambien viendo que agregan la palabra microservicios, veo más un proyecto como nest orientado a microservicoos, incluso utilizando la aquitectura orientada a enventos, se que sirve para desacoplar  de manera que el servicio que genera las peticiones no esté unido al que envía los correos, tambien tener en cuenta un manager de logs para los procesos.


5. Ejercicio 5
Respuesta: 
a. Temperatura: controla que tan aleatorias son las respuestas.
b. Tokens (Ingress/Egress):  Los tokens son los datos que ingresamos valorados en esa moneda por decirlo así, normalmente en el input el modelo toma el contexto que escribimos y el prompt del mensaje, todo eso se suma en el input y el output es lo que responde, los valores de tokens varian según el modelo GPT y tambien por el tipo de idioma que se use, se que en ingles por ejemplo el paso de texto a tokens es menos porque el español tiene más palabras,

c. Documentos de Contexto: En mi caso que use el Assistant yo le paso las instrucciones y el con eso toma el contexto de lo que debe hacer, pienso que entre mejor sea el prompt y las instrucciones no es necesario tener un buen modelo como el GPTo, aún estoy aprendiendo de la documentación y haciendo pruebas, tambien en el assistant existe la herramienta para cargar archivos y este los transforma en vectores y se le puede indicar con contexto que solo debe responder en base a los datos adjuntos así limitar un poco en que puede responder el bot.

d. Prompting: Es la pregunta que se le envia al modelo para que pueda responder, un prompt tambien puede generar contexto si se lo desea

6. Ejercicio 6

Respuesta: La mejor forma que pude ver es mediante los threads que se generan por persona así tienes el listado de todo lo que se preguntó y respondio por parte del modelo, para usar los threads se puede hacer con casi cualquier modelo, digo casi para no decir todos porque no soy un experto.



