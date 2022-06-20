import {
    IMessageDTO,
    IResponseDTO,
    IAssistantContext,
    IAxiosProvider,
  } from '../IAxiosProvider';
import axios from 'axios';

export class AxiosProvider implements IAxiosProvider {
    async sendMessage(request: IMessageDTO): Promise<IResponseDTO> {
        const response = await axios.post('http://localhost:8080/conversation')
        .then((response) => {
            return response.data;
        }
        )
        .catch((error) => {
            return error;
        }
        );
        return response;
    }
}