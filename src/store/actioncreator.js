import { DELETE_THING, ADDING_THING, CHANGING_THING, GET_DATA} from './actionname'
import axios from 'axios'

export const deletething = (index)=>{
    return {
        type:DELETE_THING,
        val: index
    }
}
export  const add = ()=>{
    return {
        type:ADDING_THING,
        
    }
}
export const change = (val)=>{
    return {
        type:CHANGING_THING,
        val
    }
}
export const getdata = (index)=>{
    return {
        type:GET_DATA,
        val: index
    }
}
export const getajaxdata = ()=>{
    return  (dispatch)=>{
        axios.get('http://localhost:3001/list.json').then((res)=>{
        const data = res.data
        console.log(data)
        const action = getdata(data)
        dispatch(action)
    })
    }
}