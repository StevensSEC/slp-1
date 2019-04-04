import React, { Component } from "react"
import styled from "styled-components"

const PostContainer = styled.div`
    box-shadow: 
        -1px -2px 5px rgba(0, 0, 0, 0.05),
        2px 3px 5px rgba(0, 0, 0, 0.15);
    margin: 0.5rem 0;
    padding: 0.5rem;
    width: 75%;
`

export default class Post extends Component {
    render() {
        return (
            <PostContainer>
                {this.props.content}
            </PostContainer>
        )
    }
}