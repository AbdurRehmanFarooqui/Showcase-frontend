
const reducer = (state={}, action)=>{
    if (action.type==='setData') {
        state=action.data;
        return state
    }
    else{
        return state;
    }
}
export default reducer;