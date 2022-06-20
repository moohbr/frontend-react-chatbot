import { SendMessageController } from './SendMessageController';
import { AxiosProvider } from '../../providers/Implementations/AxiosProvider';
import { SendMessageUseCase } from './SendMessageUseCase';

const axiosProvider = new AxiosProvider();

const sendMessageUseCase = new SendMessageUseCase(axiosProvider);

const sendMessageController = new SendMessageController(sendMessageUseCase);

export { sendMessageUseCase, sendMessageController };
