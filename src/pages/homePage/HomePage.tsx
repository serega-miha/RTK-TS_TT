import { useGetAllHeroesQuery } from "../../store/api/heroes";
import HeroCard from "../../components/heroCard/HeroCard";
import './homePage.scss';
import { useState } from "react";


const HomePage = () => {
    const [arrIdDelete, setArrIdDelete] = useState(Array());
    const [arrIdLike, setArrIdLike] = useState(Array());
    const [showLike, setShowLike] = useState(false);
    const { data: allHeroes, isLoading, isSuccess, error } = useGetAllHeroesQuery();

    function addIdDelete(newId?: number): void {
        if (arrIdLike.includes(newId)) {
            arrIdLike.forEach(function (item, index, object) {
                if (item === newId) {
                    object.splice(index, 1);
                }
            });
        }
        setArrIdDelete(arrIdDelete => [...arrIdDelete, newId])
    }

    function addIdLike(id?: number, like?: boolean) {
        if (!like) {
            return setArrIdLike(arrIdLike => [...arrIdLike, id])
        } else if (like) {
            let newArr = arrIdLike;
            newArr.forEach(function (item, index, object) {
                if (item === id) {
                    object.splice(index, 1);
                }
            });
            return setArrIdLike(newArr)
        }

    }
    function chengeCheckbox() {
        setShowLike(!showLike);
    }

    let content;
    if (isLoading) {
        content = <h2>Loading...</h2>
    } else if (isSuccess) {
        let newData = allHeroes.data.results.filter(item => !arrIdDelete.includes(item.id));
        newData = showLike ? newData.filter(item => arrIdLike.includes(item.id)) : newData;
        content = newData.map(item => {
            return <HeroCard
                key={item.id}
                data={item}
                onIdDelete={addIdDelete}
                addIdLike={addIdLike} />
        })
    } else if (error) {
        content = <h2>Error...</h2>
    }

    return (
        <div className="home-page">

            <div className="checkbocx-block">
                <label className="checkbox-other">
                    <input type="checkbox" onChange={chengeCheckbox} />
                    <span>Показать карточки Like</span>
                </label>
            </div>
            <div className="cards-list">
                {content}
            </div>
        </div>

    )
}

export default HomePage;