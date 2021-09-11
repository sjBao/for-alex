import React from 'react'

import { MyButton } from './components/Button'

export const PageOne = (props) => {
  return (
    <div>
      Page one
      <hr />
      <MyButton updateMyState={props.updateMyState}>
        Button
      </MyButton>
    </div>
  )
}