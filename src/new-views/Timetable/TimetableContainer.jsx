import withStyles from '@material-ui/core/styles/withStyles'

import dashboardStyle
    from 'assets/jss/material-dashboard-pro-react/views/dashboardStyle'
import PropTypes from 'prop-types'
import React from 'react'
import Timetable from './Timetable'

class TimetableContainer extends React.Component {
    render() {
        return (
            <Timetable />
        )
    }
}

TimetableContainer.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(TimetableContainer)
