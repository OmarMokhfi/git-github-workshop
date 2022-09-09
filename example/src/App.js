import React from 'react'

import { Button } from 'git-github-ui-library'

const onClick = () => {
  console.log('button clicked')
}

const App = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Button label='Click me' onClick={onClick} />
    </div>
  )
}

export default App
