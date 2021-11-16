import React, {useEffect} from 'react'
import axios from 'axios'
const baseUrl = `https://jsonplaceholder.typicode.com/posts`
 const Test = () => {
    const data = () => {
        axios.get(baseUrl).then((res) => {
            console.log(res,)
          //const data1 = res.data  
        }
        ).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        data()
    },[])
    return (
        <div>
         hello
        </div>
    )
}
export default Test