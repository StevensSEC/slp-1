import React, { Component } from "react"
import styled from "styled-components"

const HeaderContainer = styled.div`
    align-items: center;
    background: #eee;
    color: black;
    display: flex;
    height: 15vh;
    justify-content: center;
    width: 100%;
`

const Logo = styled.div`
    font-size: 1.75rem;
`

export default class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <Logo><em>Quick Quack</em></Logo>
            </HeaderContainer>
        )
    }
}