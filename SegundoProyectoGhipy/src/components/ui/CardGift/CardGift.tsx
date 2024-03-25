
interface IGift {
    urlGift : string,
    title : string
}

interface IPropsCardGift{
    gift : IGift
}
export const CardGift: FC<IPropsCardGift> = ({ gift }) => {
  return (
    <div>
        <img src={gift.urlGift} />
        <h3>{gift.title}</h3>
    </div>
  )
}
