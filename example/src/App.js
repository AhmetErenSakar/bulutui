import React from 'react'

import { ExampleComponent, Button } from 'bulutui'
import 'bulutui/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text="Create React Library Example 😄" />
      <Button text='bu bir button aq' onClick={() => { alert('ne basıyon aq') }} type='primary' />
    </>
  )
}

export default App
