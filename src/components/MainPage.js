import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { Title } from '../styled-components'
import styled from 'styled-components'

const Span = styled.span`
        background: ${props => props.primary ? 'palevioletred' : 'white'};
        padding: 0.25em 1em;
    `

export default class MainPage extends PureComponent {
    static propTypes = {}

    state = {
        background: true
    }

    render() {
        console.log(this.state.background)
        return (
            <div>
                <Title> Главная </Title>

        <Span primary = {this.state.background}>Что то</Span>
                <button onClick={() => {
                    this.setState({
                        background: !this.state.background
                    })
                }}>Кнопка</button>
            </div>
        )
    }
}