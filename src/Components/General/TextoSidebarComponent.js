import React from 'react'

const TextoSidebarComponent = (props) => {
  return (
    <div className='TextoSidebar'>
        <h3>{props.title}</h3>
        {props.content.map(texto => <p>{texto}</p>)}
    </div>
  )
}

export default TextoSidebarComponent