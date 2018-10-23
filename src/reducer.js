import uuid from 'uuid'
import keyWrapper from '@bufferapp/keywrapper'

export const actionTypes = keyWrapper('NOTIFICATIONS', {
  CREATE_NOTIFICATION: 0,
  CREATE_NOTIFICATION_COMPLETE: 0,
  DELETE_NOTIFICATION: 0,
  DELETE_NOTIFICATION_COMPLETE: 0,
})

const initialState = []

const NotificationReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NOTIFICATION:
      return {
        type: action.notificationType,
        message: action.message,
        key: action.key,
        creating: true,
      }
    case actionTypes.CREATE_NOTIFICATION_COMPLETE: {
      const { creating, ...newState } = state // eslint-disable-line no-unused-vars
      return newState
    }
    case actionTypes.DELETE_NOTIFICATION:
      return { ...state, deleting: true }
    default:
      return state
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NOTIFICATION:
      return [...state, NotificationReducer(undefined, action)]
    case actionTypes.CREATE_NOTIFICATION_COMPLETE:
      return state.map(
        notification =>
          notification.key === action.notification.key
            ? NotificationReducer(notification, action)
            : notification,
      )
    case actionTypes.DELETE_NOTIFICATION:
      return state.map(
        notification =>
          notification.key === action.notification.key
            ? NotificationReducer(notification, action)
            : notification,
      )
    case actionTypes.DELETE_NOTIFICATION_COMPLETE:
      return state.filter(
        notification => notification.key !== action.notification.key,
      )
    default:
      return state
  }
}

export const actions = {
  createNotification: ({ notificationType = 'success', message }) => ({
    type: actionTypes.CREATE_NOTIFICATION,
    notificationType,
    message,
    key: uuid(),
  }),
  createNotificationComplete: ({ notification }) => ({
    type: actionTypes.CREATE_NOTIFICATION_COMPLETE,
    notification,
  }),
  deleteNotification: ({ notification }) => ({
    type: actionTypes.DELETE_NOTIFICATION,
    notification,
  }),
  deleteNotificationComplete: ({ notification }) => ({
    type: actionTypes.DELETE_NOTIFICATION_COMPLETE,
    notification,
  }),
}
