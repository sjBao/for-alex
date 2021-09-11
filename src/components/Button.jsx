import React from 'react'

export const MyButton = (props) => {
  return (
    <button onClick={props.updateMyState}>
      {props.children}
    </button>
  )
}