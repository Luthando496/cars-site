import {carsAction} from '../store'
import { doc, getDocs,collection , query, where,getDoc } from "firebase/firestore";
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


export const getDetails = (id) =>
    async dispatch =>{
        try{

            dispatch(carsAction.fetchRequest())

            
                const docRef =  doc(db, "cars", `${id}`);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                dispatch(carsAction.fetchSingleCar(docSnap.data()))
                } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
                }

            // console.log(citySnapshot.docs.map(doc => doc.data()))




        }catch(err){
            console.log(err.response && err.response.data.message
                ? err.response.data.message
                : err.message)
            dispatch(carsAction.fetchFail(err.response && err.response.data.message
                ? err.response.data.message
                : err.message))
        }
}