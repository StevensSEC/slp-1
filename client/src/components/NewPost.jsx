import React, { useContext, useState } from "react"
import { MessageContext } from "../MessageProvider";
import styled from "styled-components"

const NewPostContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.25rem 0;
    width: 100%;
`

const PostInput = styled.input`
    padding: 0.25rem;
    width: 25%;
`

const PostSubmit = styled.button`
    background: gold;
    border: none;
    border-radius: 5px;
    color: white;
    margin-left: 1.0rem;
    text-align: center;
    padding: 0.5rem 1.5rem;
`

const NewPost = () => {
    const [userInput, updateUserInput] = useState("");
    const { send } = useContext(MessageContext);

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
        <NewPostContainer>
            <PostInput onChange={onInput} onKeyDown={onEnter} value={userInput} />
            <PostSubmit disabled={!send} onClick={onSend}>Quack</PostSubmit>
        </NewPostContainer>
    )
}

export default NewPost;