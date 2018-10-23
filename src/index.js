import { connect } from 'react-redux'
import { actions } from './reducer'
import Notifications from './components/Notifications'

export default connect(
  state => ({
    notifications: state.notifications,
  }),
  dispatch => ({
    onNotificationClose: notification =>
      dispatch(actions.deleteNotification({ notification })),
  }),
)(Notifications)

export reducer, { actions, actionTypes } from './reducer'
export middleware from './middleware'
