import 'babel-polyfill'
import { configure } from '@storybook/react'

const req = require.context('../src', true, /components\/.*\/*story\.jsx$/)
const loadStories = () => req.keys().forEach(req)
configure(loadStories, module)
