import OpenAI from "openai";
import { getAssistantIdUseCase } from "../use-cases";
interface Options {
    threadId: string;
    myAssistant: string;
    Instructions: string;

}

export const createRunUseCase = async (openai: OpenAI, options :Options) => {
    const {threadId, myAssistant,Instructions } = options;
   

    const run = await openai.beta.threads.runs.create(threadId, {
        model:'gpt-4',
        assistant_id: myAssistant,
        instructions: Instructions

    })


    return run
}