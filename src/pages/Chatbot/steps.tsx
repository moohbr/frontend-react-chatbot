import { sendMessageController } from "../../api/useCase/SendMessage";
const message = {
    query : {
        request_body : {
            input: {
                text: ""
            }
        }
    }
}

let optionsArray: any[] = [];

function verifyOptions(options: any) {
    if (optionsArray.length > 0) {
        optionsArray = [];
    }
    for(const option in options) {
        optionsArray.push(
                { value: option, label: options[option].label, trigger: 'bot' },
        );
    };
}

export const steps = [
    {
      id: "start",
      message: await sendMessageController.handle(message)
                .then(response => {
                    verifyOptions(response.options);
                    return response.messages[0]
                }),
      trigger: optionsArray.length > 0 ? "options" : "user"
    },
    {
        id: "user",
        user: true,
        trigger: "bot",
    },
    {
        id: "options",
        options: optionsArray
    },
    {
        id: "bot",
        message: async (previous: any) => {
          const { previousValue } = previous;
          if (optionsArray.length > 0) {
            await sendMessageController.handle({
                query : {
                    request_body : {
                        input: {
                            text: optionsArray[previousValue].label
                        }
                    }
                }
            }).then((response) => {
                return response.messages[0];
            });
        }
        },
        trigger: "user"
    },
];
  