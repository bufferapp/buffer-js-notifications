import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { checkA11y } from 'storybook-addon-a11y'
import Notifications from './index'

const notifications = [
  {
    type: 'success',
    message: "Awesome! You've got a notification!",
    key: 'abc123',
  },
  {
    type: 'error',
    message: 'Oh No! There was an error doing the thing!',
    key: 'abc124',
  },
]

storiesOf('Notifications', module)
  .addDecorator(checkA11y)
  .add('default', () => (
    <Notifications
      notifications={notifications}
      onNotificationClose={action('on-notification-close')}
    />
  ))
  .add('1 notification', () => (
    <Notifications
      notifications={notifications.slice(0, 1)}
      onNotificationClose={action('on-notification-close')}
    />
  ))
