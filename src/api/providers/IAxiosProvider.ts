interface IWatsonEntity {
    entity: string;
    value: string;
    confidence?: number;
}

interface IMessageRequest { // RequestBody in query
  input: {
    text: string;
  };
}

interface IAssistantQuery { // Query to Watson Assistant
  request_body: IMessageRequest;
  user_id?: string;
}

export interface IMessageDTO { // Input to Watson Assistant
  query: IAssistantQuery;
}

export interface IAssistantContext{
  conversation_id: string;
  system: {
    dialog_stack: [
      {
        dialog_node: string;
      }
    ];
    dialog_turn_counter: number;
    dialog_request_counter: number;
    _node_output_map: {
      [key: string]: any;
    }
    last_branch_node: string;
    branch_exited: boolean;
    branch_exited_reason: string;
  };
  metadata : {
    user_id : string;
  }
}

export interface IResponseDTO { // Response from Watson Assistant
  messages: string;
  user_id: string;
  entities?: IWatsonEntity[];
  options?: string[];
  context?: IAssistantContext;
}

export interface IAxiosProvider {
    sendMessage(request: IMessageDTO): Promise<IResponseDTO>; // Send a message to Watson Assistant
}