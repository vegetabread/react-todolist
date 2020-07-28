const defaultdata={
    inputval:'no time ',
    list: ['dell']
}
export default (state=defaultdata, action)=>{
    if(action.type === 'change_input'){
        const data = JSON.parse(JSON.stringify(state))
        data.inputval=action.val
        return data
    }
    return state
}