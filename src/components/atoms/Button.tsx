import React from 'react'

type Props = {
    text : string
}

const Button = (props: Props) => {
  const { text } = props
  return (
    <button className=''>{text}</button>
  )
}

export default Button