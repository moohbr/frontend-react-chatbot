import { IMessageDTO, IResponseDTO } from '../../providers/IAxiosProvider';
import { SendMessageUseCase } from './SendMessageUseCase';

export class SendMessageController {
  constructor(private sendMessageUseCase: SendMessageUseCase) {}

    async handle(message: IMessageDTO): Promise<IResponseDTO> {
      console.log('SendMessageController.handle');
      console.log('Session1 ', sessionStorage.getItem("user_id"));
      console.log('The message', message);
        if (sessionStorage.getItem("user_id") == null) {
          const response = await this.sendMessageUseCase.execute(message);
          sessionStorage.setItem("user_id", response.user_id);
          console.log('Session2 ', sessionStorage.getItem("user_id"));
          return response;
        }
        else {
          message.query.user_id =  sessionStorage.getItem("user_id") ?? "null";
          console.log('Session3 ', sessionStorage.getItem("user_id"));
          return await this.sendMessageUseCase.execute(message);
        }
    }
}