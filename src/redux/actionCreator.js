import {FIND_ADRESS} from './actionTypes';

export const featchFindAC = (parametr)=>{
  return(dispatch) =>{
    fetch('http://192.168.90.134:8080/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(parametr)
    })
    .then(res=>res.json())
    .then(res=>dispatch(findAdressAC(res.places)))
  }
}

export const findAdressAC = (payload) =>({
  type: FIND_ADRESS,
  payload
})
