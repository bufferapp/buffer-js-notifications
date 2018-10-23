import React from 'react'
import { storiesOf } from '@storybook/react'
import { checkA11y } from 'storybook-addon-a11y'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import Notifications, { reducer, actions, middleware } from '../../index'

const store = createStore(
  combineReducers({
    notifications: reducer,
  }),
  {},
  applyMiddleware(middleware),
)

const notificationPool = [
  {
    notificationType: 'success',
    message: "Awesome! You've got a notification!",
  },
  {
    notificationType: 'error',
    message: 'Oh No! There was an error doing the thing!',
  },
  {
    notificationType: 'success',
    message: 'Success! Full cheese has been activated.',
  },
  {
    notificationType: 'error',
    message: 'Oops! Cheese was dropped',
  },
]

storiesOf('Notifications - Test Harness', module)
  .addDecorator(checkA11y)
  .addDecorator(getStory => (
    <Provider store={store}>
      <div>
        {getStory()}
        <button
          onClick={() =>
            store.dispatch(
              actions.createNotification(
                notificationPool[
                  Math.floor(Math.random() * notificationPool.length)
                ],
              ),
            )
          }
        >
          Create Notification
        </button>
      </div>
    </Provider>
  ))
  .add('default', () => <Notifications />)
