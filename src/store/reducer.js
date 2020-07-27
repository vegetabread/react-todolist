import { DELETE_THING, ADDING_THING, CHANGING_THING} from './actionname'


const data = {
    inputval: '',
    list: [1,2,3]
}
// function test () {
//     const info = JSON.parse(JSON.stringify(data))
//     console.log('this is testing thing',info)
// }
export default (state = data, action)=>{
    if(action.type === CHANGING_THING){
        console.log('this is changing input')
        const todolistinfo = JSON.parse(JSON.stringify(state))
        todolistinfo.inputval = action.val
        console.log(todolistinfo.inputval)
        return todolistinfo
    }
    if(action.type === ADDING_THING){
        const todolistinfo = JSON.parse(JSON.stringify(state))
        todolistinfo.list.push(state.inputval)
        todolistinfo.inputval=''
        return todolistinfo
    }
    if(action.type === DELETE_THING) {
        console.log('函数进来了', action)
        const todolistinfo = JSON.parse(JSON.stringify(state))
        todolistinfo.list.splice(action.val,1)
        return todolistinfo
    }
    return state
}