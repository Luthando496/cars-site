import {carsAction} from '../store'
import { doc, getDocs,collection , query, where } from "firebase/firestore";
import {db} from '../../firebase'




export const fetchCars = () => async dispatch => {
    const colRef = collection(db, "cars");
    // const docSnap = await getDocs(colRef);

    try {
      const docsSnap = await getDocs(colRef);
    //   console.log(docsSnap)
      if(docsSnap.docs.length > 0) {
            console.log(docsSnap.docs.map(doc => doc.data()))
            dispatch(carsAction.fetchCars((docsSnap.docs.map(doc=>doc.data()))))
      }
  }catch(err){
    console.log(err.response && err.response.data.message
        ? err.response.data.message
        : err.message)
    dispatch(productAction.ProductsFail(err.response && err.response.data.message
        ? err.response.data.message
        : err.message))
}

}


export const SearchCars = (make) => async dispatch => {
    const colRef = collection(db, "cars");
    // const docSnap = await getDocs(colRef);
    try {

    const q = query(colRef, where("make", "==", `${make}`));

      const docsSnap = await getDocs(q);
    //   console.log(docsSnap)
      if(docsSnap.docs.length > 0) {
            console.log(docsSnap.docs.map(doc => doc.data()))
            dispatch(carsAction.fetchCars((docsSnap.docs.map(doc=>doc.data()))))
      }
  }catch(err){
    console.log(err.response && err.response.data.message
        ? err.response.data.message
        : err.message)
    dispatch(productAction.ProductsFail(err.response && err.response.data.message
        ? err.response.data.message
        : err.message))
}

}