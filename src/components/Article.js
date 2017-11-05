import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

export default class Article extends Component {
    static propTypes = {
        article = PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        }).isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            isOpen: true
        }
    }

    render() {
        const {article} = this.props
        const {isOpen} = this.state
        return (
            <div className="article">
                <h2 className="article-title">{article.title}</h2>
                <button className="article-button" onClick = {this.toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null
        const {article} = this.props
        return (
            <section className="article-text">
               {article.text}
               <CommentList comments = {article.comments}/>
            </section>
        )
    }

    toggleOpen = (ev) => {
        ev.preventDefault()
        console.log('---', ev.nativeEvent)
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}