import OpenAI from "openai";

export const getAssistantIdUseCase = async (openai: OpenAI)  : Promise<string | null> => {
    
    
    const myAssistants = await openai.beta.assistants.list({
        order: 'desc',
        limit: 1,
    })
        if(myAssistants.data.length  === 0) {
            return null
        }
        else {
        return myAssistants.data[0].id
        }
}