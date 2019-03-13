import React, { useContext, useState } from "react";
import { MessageContext } from "./MessageProvider";

export const App = () => {
  const { messages, send } = useContext(MessageContext);
  const [userInput, updateUserInput] = useState("");

  const onInput = event => {
    updateUserInput(event.currentTarget.value);
  };

  const onEnter = event => {
    if (event.keyCode === 13 && send && userInput) {
      send(userInput);
      updateUserInput("");
    }
  };

  const onSend = () => {
    if (send) {
      send(userInput);
      updateUserInput("");
    }
  };

  return (
    <div>
      Quick Quack
      <input onChange={onInput} onKeyDown={onEnter} value={userInput} />
      <button disabled={!send} onClick={onSend}>
        Send
      </button>
      {messages && messages.map(msg => <div key={msg.id}>{msg.content}</div>)}
    </div>
  );
};
