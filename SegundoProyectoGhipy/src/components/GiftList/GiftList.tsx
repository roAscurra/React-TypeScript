import React from 'react'
import { CardGift } from '../ui/CardGift/CardGift';

interface IGift {
    urlGift : string,
    title : string
}
interface IPropsGiftList {
    gift: IGift[];
}

export const GiftList : FC<IPropsGiftList> = ({ gift }) => {
  return (
    <div
    style={{
        display : 'grid',
        gridTemplateColumns : 'repeat(3, .6fr)',
        gap : '2vh',
    }}
    >
        {gift.map((el, i)=>( //hago un map de los elementos del array que está en App.tsx
            <CardGift gift={el} key={i} /> //muestra el elemento
        ))}
    </div>
  )
}
