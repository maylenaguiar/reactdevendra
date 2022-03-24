import { initializeApp } from "firebase/app";
import { getFirestore } from  "firebase/firestore";
import { getDocs, collection, query, where, getDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)

export const getProducts =(categoryId) =>{
  return new Promise ((resolve,reject)=>{ 
  const collectionRef = categoryId ?  
    query(collection(database, 'products'), where('category','==', categoryId)) :
    collection(database, 'products')

      getDocs(collectionRef).then(querySnapshot =>{
           const products = querySnapshot.docs.map(doc =>{
             return { id: doc.id, ...doc.data() }
           })
           resolve(products) 
          }).catch((error)=>{
            reject('Error obteniendo productos: ', error)
          })
 })
}
export const getProductById =(productId) =>{
  return new Promise ((resolve, reject)=>{
    const docRef = doc(database, 'products', productId)
        getDoc(docRef).then(response =>{
          const product = {id: response.id, ...response.data()}
          resolve(product)
  }).catch((error)=>{
    reject('Error obteniendo producto: ', error)
  })
})
} 