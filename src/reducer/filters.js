import { DELETE_ARTICLE, INPUT_ARTICLE, SELECT_ARTICLE, DATE_ARTICLE } from '../constance'

const defaultFilters = {
    selected: [],
    dateRange: {
        from: null,
        to: null
    },
    title: ''
}

export default (filters = defaultFilters, action) => {
    const { type, payload } = action

    switch (type) {
        case INPUT_ARTICLE:
            return { ...filters, title: payload.title }
        case DATE_ARTICLE:
//            return Object.assign({}, filters, { dateRange: payload.dateRange })
            return { ...filters, dateRange: payload.date }

        case SELECT_ARTICLE:
            return { ...filters, selected: payload.id }

        case DELETE_ARTICLE:
            return { ...filters, selected: filters.selected.filter(id => id !== payload.id) }
    }

    return filters
}