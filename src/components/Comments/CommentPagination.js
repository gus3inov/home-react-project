import React, {Component} from 'react'
import { connect } from 'react-redux'
import { checkAndLoadCommentsForPage } from '../../AC'
import Loader from '../Loader'
import { NavLink } from 'react-router-dom'
import Comment from '../Comments/Comment'
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
};


class CommentsPagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    componentWillMount() {
        this.props.checkAndLoadCommentsForPage(this.props.page)
    }

    componentWillReceiveProps({ page, checkAndLoadCommentsForPage }) {
        checkAndLoadCommentsForPage(page)
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    }

    render() {
        const {total} = this.props
        if (!total) return <Loader/>
        return (
            <div>
                {this.getCommentItems()}
                {this.getPaginator()}
            </div>
        )
    }

    getCommentItems() {
        const {comments, loading} = this.props
        if (loading || !comments) return <Loader />
        const commentItems = comments.map(id => <li key={id}><Comment id={id}/></li>)
        return <ul>{commentItems}</ul>
    }

    getPaginator() {
        const {total} = this.props
        const items = []
        for (let i = 1; i <= Math.floor((total - 1) / 5) + 1; i++) {
            items.push(<Tab data-route={`/comments/${i}`} className="alt-tab" style={styles.headline.fontSize} label={<NavLink to={`/comments/${i}`} activeStyle={{color: 'red'}}>{i}</NavLink>} value={<NavLink to={`/comments/${i}`} activeStyle={{color: 'red'}}>lol</NavLink>} key={i}/>)
        }
        return <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
        >{items}</Tabs>
    }
}

export default connect((state, { page }) => {
    const {total, pagination} = state.comments
    return {
        total,
        loading: pagination.getIn([page, 'loading']),
        comments: pagination.getIn([page, 'ids'])
    }
}, { checkAndLoadCommentsForPage })(CommentsPagination)