import React, { useEffect, useState } from "react";
import openSocket from "socket.io-client";

export const MessageContext = React.createContext({
  messages: undefined,
  send: undefined
});

export const MessageProvider = ({ serverUrl, children }) => {
  const [socket, setSocket] = useState();
  const [messages, setMessages] = useState();

  useEffect(() => {
    // Initialize websocket connection
    const newSocket = openSocket(serverUrl);
    newSocket.on("connect", () => setSocket(newSocket));
    newSocket.on("disconnect", () => setSocket(newSocket));

    // Set up callbacks to handle new messages
    newSocket.on("allMessages", msgs => {
      setMessages(msgs);
    });
    newSocket.on("serverMessage", msg => {
      setMessages(msgs => [...msgs, msg]);
    });

    // Close websocket on cleanup
    return newSocket.close;
  }, [serverUrl]);

  const send =
    socket && socket.connected
      ? content => socket.emit("clientMessage", content)
      : undefined;

  return (
    <MessageContext.Provider value={{ messages, send }}>
      {children}
    </MessageContext.Provider>
  );
};
