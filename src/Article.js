import React, { Component } from 'react'
import Comments from './Comments'

export default class Article extends Component{
    constructor(props){
        super(props)

        this.state = {
            isOpen: true
        }

    }

    toggleOpen = (ev) =>{
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getBody = () => {
        if( !this.state.isOpen ) return null
        const { article } = this.props
        return <section>{ article.text }</section>
    }

    getComment = () => {
        const { article } = this.props
        return <section>{{ article }.map(key => Object.keys(obj))}</section>
    }
 
    render(){
        const { article } = this.props
        const { isOpen }  = this.state
        const keyS = { article }
        return (
            <div>
                <h1>{ article.title }</h1>
                <br/>
                <button onClick={this.toggleOpen}> 
                    { isOpen ? 'close' : 'open' } 
                </button>
                <section>{ this.getBody() }</section>
                <Comments comment={this.getComment()}/>
            </div>
        )
    }
}