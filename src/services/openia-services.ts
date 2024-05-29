import OpenAI from "openai";
import { checkCompleteStatusUseCase, createAssistantUseCase, createMessageUseCase, createRunUseCase, createThreadsUseCase, getAssistantIdUseCase, getMessageListUseCase } from "../use-cases";
require('dotenv').config();

interface Options {
  threadId: string;
  question: string;
  Instructions: string;
}
export class OpenIaServices {

  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  async createThread() {
    return await createThreadsUseCase(this.openai)
  }

  async userQuestion(options: Options) {
    const { threadId, question, Instructions } = options;

    let myAssistant

    await createMessageUseCase(this.openai, { threadId, question })

    myAssistant = await getAssistantIdUseCase(this.openai)

    if (!myAssistant) { 
      myAssistant = await createAssistantUseCase(this.openai, Instructions)
    }

    const run = await createRunUseCase(this.openai, { threadId, myAssistant, Instructions })
    await checkCompleteStatusUseCase(this.openai, { threadId, runId: run.id })

    const messages = await getMessageListUseCase(this.openai, { threadId })
    return messages
  }

}