import React, { Component } from 'react'

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
 
    render(){
        const { article } = this.props
        const { isOpen }  = this.state
        return (
            <div>
                <h1>{ article.title }</h1>
                <br/>
                <button onClick={this.toggleOpen}> 
                    { isOpen ? 'close' : 'open' } 
                </button>
                <section>{ this.getBody() }</section>
            </div>
        )
    }
}