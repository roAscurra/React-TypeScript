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
    <div>
        {gift.map((el)=>( //hago un map del array que está en App.tsx
            <CardGift gift={el} /> //muestra el elemento
        ))}
    </div>
  )
}
