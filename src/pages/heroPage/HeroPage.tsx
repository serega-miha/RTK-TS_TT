import { useParams } from "react-router-dom";
import { useGetHeroByIdQuery } from "../../store/api/heroes";
import { Link } from "react-router-dom";
import './heroPage.scss'

const HeroPage = () => {
    const { id } = useParams<{ id?: string }>();
    const { data: dataHeroById, isLoading, isSuccess, error } = useGetHeroByIdQuery(Number(id));

    let content; 
    if (isLoading) {
        return content = <h2>Loading...</h2>
    } else if (isSuccess) {
        let data = dataHeroById.data.results[0];

        const urlImg = `${data.thumbnail.path}.${data.thumbnail.extension}`;
        const descriptionFalse = 'Нет описания данного героя';
        const description = data.description.length < 1 ? descriptionFalse : data.description;
        const comicsList = data.series.items;
        let renderComicsList = comicsList.map((item, i) => {
            return <li key={i}>{item.name}</li>
        })

        content = (
            <div className="hero-page__container">
                <div className="hero-page__block block-img">
                    <img src={urlImg} alt={data.name} />
                </div>
                <div className="hero-page__block block-name">

                    <p>Имя персонажа:</p>
                    <h4><strong>{data.name}</strong></h4>
                    <br></br>
                    <p>Описание персонажа:</p>
                    <h5><strong>{description}</strong></h5>
                </div>
                <div className="hero-page__block block-comics">
                    <p>Списовк комиксов:</p>
                    {renderComicsList.length > 1 ? renderComicsList : <h5>Упс.... не найдено комиксов</h5>}
                </div>
            </div>
        )
    } else if (error) {
        return content = <h2>Error...</h2>
    }

    return (
        <div className="hero-page">
            <div className="hero-page__link-back">
                <Link to='/' className="hero-page__back" >Вернуться к списку карточек</Link>
            </div>
            {content}
        </div>

    )
}

export default HeroPage;