import { DELETE_THING, ADDING_THING, CHANGING_THING} from './actionname'
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