import { DELETE_THING, ADDING_THING, CHANGING_THING, GET_DATA} from './actionname'

const data = {
    inputval: '',
    list: []
}
// function test () {
//     const info = JSON.parse(JSON.stringify(data))
//     console.log('this is testing thing',info)
// }
export default (state = data, action)=>{
    if(action.type === CHANGING_THING){
        const todolistinfo = JSON.parse(JSON.stringify(state))
        todolistinfo.inputval = action.val
        console.log(todolistinfo.inputval)
        return todolistinfo
    }
    if(action.type === ADDING_THING){
        const todolistinfo = JSON.parse(JSON.stringify(state))
        todolistinfo.list.push(state.inputval)
        todolistinfo.inputval=''
        console.log('到点了',todolistinfo.list,'yes')
        return todolistinfo
    }
    if(action.type === DELETE_THING) {
        const todolistinfo = JSON.parse(JSON.stringify(state))
        todolistinfo.list.splice(action.val,1)
        return todolistinfo
    }
    if(action.type === GET_DATA){
        const todolistinfo = JSON.parse(JSON.stringify(state))
        todolistinfo.list = action.val
        return todolistinfo
    }
    return state
}