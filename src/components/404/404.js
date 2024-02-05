import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"


const Page404 = () => {
    const navigate = useNavigate();




    let str = 'qwertyqq'

    let arr = str.split('')
    function uniqueArray4(a) {
        return [...new Set(a)];
      }

    function isPangram(string) {
        let arr = string.split('')
        let newArr = [...new Set(arr)]
        if (arr.length > newArr.length){
            return false
        } else {
            return true
        }
    }

    console.log(isPangram('Hello world'));

    return (
        <>
            <h2>Упс!!!! что-то пошло не так, давайте попробуем еще раз</h2>
            <h2><Link to=''>Нажмите пожалуйста сюда</Link> или на главную страничку</h2>
        </>
    )
}


export default Page404;