import OpenAI from "openai";



/**
 * NOTA: Acá le hubiera podido enviar un archivo file con datos que transforma en vectores.
 * No lo hice porque ya tenía el example.profiles y las funciones que modifican el prompt dinamicamente gracias a ustedes.
 */
export const createAssistantUseCase = async (
  openai: OpenAI,
  Instructions: string
): Promise<string> => {
  const myAssistant = await openai.beta.assistants.create({
    instructions: Instructions,
    name: "Juan",
    model: "gpt-3.5-turbo",
  });

  const { id } = myAssistant; 

  return id;
};
