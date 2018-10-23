import { transitionTimeMilliseconds } from '@bufferapp/components/style/animation'
import { actionTypes, actions } from './reducer'

export default ({ dispatch }) => next => action => {
  // eslint-disable-line no-unused-vars
  next(action)
  switch (action.type) {
    case actionTypes.DELETE_NOTIFICATION:
      setTimeout(
        () =>
          dispatch(
            actions.deleteNotificationComplete({
              notification: action.notification,
            }),
          ),
        transitionTimeMilliseconds,
      )
      break
    case actionTypes.CREATE_NOTIFICATION: {
      const { type, ...notification } = action // eslint-disable-line no-unused-vars
      setTimeout(() => {
        dispatch(
          actions.createNotificationComplete({
            notification,
          }),
        )
      })
      setTimeout(() => {
        dispatch(
          actions.deleteNotification({
            notification,
          }),
        )
      }, 5000)
      break
    }
    default:
      break
  }
}
