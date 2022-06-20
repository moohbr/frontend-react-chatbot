import {
    IMessageDTO,
    IResponseDTO,
    IAxiosProvider,
  } from './../../providers/IAxiosProvider';
  
  export class SendMessageUseCase {
    constructor(private axiosProvider: IAxiosProvider) {}
  
    async execute(message: IMessageDTO): Promise<IResponseDTO> {
      return await this.axiosProvider.sendMessage(message);
    }
  }