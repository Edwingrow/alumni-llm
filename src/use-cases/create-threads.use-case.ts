import { OpenAI } from "openai";


export const createThreadsUseCase = async (openai: OpenAI) => {
    const {id} = await openai.beta.threads.create();
    return {id:id}
}