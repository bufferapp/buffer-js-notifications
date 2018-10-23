import React from 'react'
import PropTypes from 'prop-types'
import { calculateStyles } from '@bufferapp/components/lib/utils'
import {
  transitionAnimationTime,
  transitionAnimationType,
} from '@bufferapp/components/style/animation'
import { Notification } from '@bufferapp/components'

const Notifications = ({ notifications, onNotificationClose }) => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 10000,
    }}
  >
    <div
      style={{
        width: '25rem',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '1rem',
        marginRight: '1rem',
      }}
    >
      {notifications.map(notification => (
        <div
          style={calculateStyles(
            {
              default: {
                marginBottom: '1rem',
                maxHeight: '100vh',
                transition: `all ${transitionAnimationTime} ${transitionAnimationType}`,
              },
              hidden: {
                maxHeight: 0,
                opacity: 0,
              },
            },
            {
              hidden: notification.deleting || notification.creating,
            },
          )}
          key={notification.key}
        >
          <Notification
            type={notification.type}
            onCloseClick={() => onNotificationClose(notification)}
          >
            {notification.message}
          </Notification>
        </div>
      ))}
    </div>
  </div>
)

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      type: Notification.propTypes.type,
      message: PropTypes.string,
    }),
  ).isRequired,
  onNotificationClose: PropTypes.func.isRequired,
}

export default Notifications
