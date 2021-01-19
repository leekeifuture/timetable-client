// @material-ui/icons
import Schedule from '@material-ui/icons/Schedule'
import TimetableContainer from './new-views/Timetable/TimetableContainer'

const routes = [
    {
        path: '/timetable',
        name: 'Timetable',
        rtlName: '',
        icon: Schedule,
        component: TimetableContainer,
        layout: '/admin'
    }
]

export default routes
