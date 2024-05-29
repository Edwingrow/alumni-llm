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