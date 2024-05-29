import fs from 'fs';
import path from 'path';


let threads: { [key: string]: any } = {};

export const getThread = async (phone: string) => {
    return threads[phone] || null;
}


export const saveThread = async (phone: string, threadId: any) => {
    threads[phone] = threadId.id;
}