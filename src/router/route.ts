import { Router } from 'express';
import { ChatController } from '../controllers/chat-controller';
import { OpenIaServices } from '../services';

const router = Router();
const openIaServices = new OpenIaServices();
const chatController = new ChatController(openIaServices);

router.post('/chat', (req, res) => chatController.chatManager(req, res));


export default router;