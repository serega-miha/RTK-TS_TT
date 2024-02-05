import { useState } from "react";
import { Link } from "react-router-dom";
import './heroCard.scss'
import { IHero } from "../../interface";

interface Iprops {
    data: IHero;
    onIdDelete: Function;
    addIdLike: Function;

} 

const HeroCard = ({ data, onIdDelete, addIdLike }: Iprops) => {
    const [like, setLike] = useState(false)

    const urlImg = `${data.thumbnail.path}.${data.thumbnail.extension}`;
    const descriptionFalse = 'Нет описания данного героя';
    const description = data.description.length < 1 ? descriptionFalse : data.description.substring(0, 110) + '...'

    let btnClassName
    if (like) {
        btnClassName = 'btn btn-like btn__active'
    } else {
        btnClassName = 'btn btn-like'
    }
    let cardClassName
    if (like) {
        cardClassName = 'card cards__active'
    } else {
        cardClassName = 'card'
    }


    const onDelete = (id: number) => {
        onIdDelete(id);
    }

    const onLike = (id: number) => {
        addIdLike(id, like);
        setLike(!like)
    }

    return (
        <div className={cardClassName}>
            <Link className="card-link" to={`/hero/${data.id}`}>
                <div className="card-body">
                    <div className="card-body__img">
                        <img src={urlImg} alt={data.name} />
                    </div>
                    <div className="card-body__name">
                        <h3>{data.name}</h3>
                    </div>
                    <div className="card-body__desc">
                        <h6>{description}</h6>
                    </div>
                </div>
            </Link>
            <div className="card-btns">
                <button
                    className={btnClassName}
                    onClick={() => onLike(data.id)}>Like
                </button>
                <button
                    className="btn btn-delete"
                    onClick={() => onDelete(data.id)}>Удалить
                </button>
            </div>
        </div>
    )
}

export default HeroCard;