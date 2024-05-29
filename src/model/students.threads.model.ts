import fs from 'fs';
import path from 'path';


const db = path.join(__dirname, '../db/conversationThreads.json');


export const getThread = async (phone: string) => {
    const data = fs.readFileSync(db, 'utf8'); 
   return data ? JSON.parse(data)[phone] : null;
}


export const saveThread = async (phone: string, threadId: any) => {
    const data = fs.readFileSync(db, 'utf8');
    let threads: { [key: string]: any } = {}; 
    if (data) {
        threads = JSON.parse(data);
    }
    threads[phone] = threadId.id
    const newData = JSON.stringify(threads);
    fs.writeFileSync(db, newData, 'utf8');
}