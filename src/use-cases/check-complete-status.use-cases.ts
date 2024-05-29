import OpenAI from "openai";


interface Options {
    threadId: string;
    runId: string;

}
interface RunStatus {
    status: string;
  }

export const checkCompleteStatusUseCase = async (openai:OpenAI, options:Options): Promise<RunStatus> =>  {
    const {threadId, runId} = options;

    const runStatus = await openai.beta.threads.runs.retrieve(threadId, runId);

    console.log({status: runStatus.status})

    if(runStatus.status === 'completed'){
        return runStatus
    } else if(runStatus.status === 'failed'){
        throw new Error('Run failed')
    }

    await new Promise(resolve => setTimeout(resolve, 2000)) 

    return await checkCompleteStatusUseCase(openai, options)

}