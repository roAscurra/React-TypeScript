import React, { FC } from 'react'

interface IPropsMiPrimerComponet {
    text: string;
    color: string;
    fontSize?: number
}

export const MiPrimerComponente : FC<IPropsMiPrimerComponet> = ({text,color, fontSize}) => {
  return (
    <div style={{color: `${color}`, fontSize: `${fontSize}rem`}}>
        <p>{text}</p>
    </div>
  )
}
