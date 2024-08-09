export const getuserdata = (data)=> {
    return (dispatch)=>{
        dispatch({
            type: 'setData',
            data: data
        })
    }
}
