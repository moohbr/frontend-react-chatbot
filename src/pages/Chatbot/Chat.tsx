import { Component } from "react";

// @ts-ignore
import ChatBot from 'react-simple-chatbot';
import { steps } from "./steps";

class Chat extends Component<any, any> {

  constructor(props: any) {
    super(props);

    this.state = {
      responses: steps,
    };
  }


  render() {
    const { responses } = this.state;
    return (
      <div>
        <ChatBot
          steps={responses}
        />
        <div className="App-footer">
          <p>Desenvolvido por Matheus Araújo</p>
        </div>
      </div>
    )
  }
}

export default Chat;