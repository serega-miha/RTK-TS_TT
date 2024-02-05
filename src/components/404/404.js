import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <>
        <h2>Упс!!!! что-то пошло не так, давайте попробуем еще раз</h2>
        <h2><Link to=''>Нажмите пожалуйста сюда</Link> или на главную страничку</h2>
        </>
    )
}


export default Page404;