import { Request, Response } from 'express';
import { ExampleProfiles, Prompt_Completion, getThread, saveThread } from '../model';
import { OpenIaServices } from '../services';
import { buildStudentPayments, buildPrompt } from '../libs/build-students';


export class ChatController {
    constructor(
        private readonly openIaServices : OpenIaServices
    ){}
    
     findStudent = (phone: string) => {
        return ExampleProfiles.find(alumno => alumno.phone === phone);
     }
     

     async chatManager(req: Request, res: Response) {
        const { question ,phone } = req.body;   
        const student = this.findStudent(phone);
        let threadId = '';
        if (!student) { 
            return res.status(400).json({ message: 'Alumno no encontrado' });
        }
      

        const threadIdByJson = await getThread(phone);  

        if (!threadIdByJson) { 
            const threadId = await this.openIaServices.createThread();
            saveThread(phone, threadId);
        }
        const newThreadId = await getThread(phone);
        threadId = newThreadId || threadIdByJson; 


        const payments = buildStudentPayments(student.payments);
        const currentDate = new Date().toISOString().split('T')[0];
        const keys  = {
            student_name: student.name,
            student_career: student.career,
            student_status: student.status,
            current_date: currentDate,
            student_payments: payments
        }
        
        const Instructions = buildPrompt(Prompt_Completion, keys); 

        const result = await this.openIaServices.userQuestion({threadId , question, Instructions});

        res.status(200).json({
            messages: result
        });
     }


}