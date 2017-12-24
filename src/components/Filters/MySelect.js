import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { selectFilter } from '../../AC'
import { connect } from 'react-redux'
import { mapToArr } from '../../helpers'


class MySelect extends Component {
    static propTypes = {
        
    }

    // changeSelection = (ev) => {
    //     let value = ev.map(key => key.value).join('');
    //     console.log(selectFilter(value))
    //     this.props.selectFilter(value)
    // }

    handleChange = selected => this.props.selectFilter(selected.map(option => option.value))

    render() {
        const { articles, selected } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
        <div>
            <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
        </div>
        )
    }
}

export default connect(state => ({
    selected: state.filters.selected,
    articles: mapToArr(state.articles.entities)
}), { selectFilter })(MySelect)