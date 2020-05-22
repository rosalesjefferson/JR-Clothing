// Pull firebase utility library by importing firebase from 'firebase/app.'
import firebase from 'firebase/app'
// we can now import firestore and auth after importting firebae from 'forebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyC3i9zlb8AaG_y1kkD-W_4jO5AkyPsVg_w",
    authDomain: "ecommerce-f6276.firebaseapp.com",
    databaseURL: "https://ecommerce-f6276.firebaseio.com",
    projectId: "ecommerce-f6276",
    storageBucket: "ecommerce-f6276.appspot.com",
    messagingSenderId: "904227223524",
    appId: "1:904227223524:web:f5f102bcd842f0dca1b9f1",
    measurementId: "G-6SCKJFC054"
  }





// user sign in
// this function is for storing the data of the user in the users collection database
export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return

  // reference of fetch data
  // long version
  // const userReference = firestore.collection('users').doc(userAuth.uid)

  //reference
  // const userReference = firestore.collection('users')
  // get collection ref using .data userReference.get(). This returns a object of .empty, size and docs(which is our all of the unique with object each id)
  // we can check if a documents inside a collectionRef is empty by using .empty..

  // short version
  // docReference is use to get, set, update or delete data. We use this as a reference

  const userDocReference = firestore.doc(`users/${userAuth.uid}`)
  
  // wait for the userDocReference to get the userAuth.uid
  // snapshoptObject was get from userDocReference and use get() method request
  const snapShot = await userDocReference.get()
  // userReference.get().data() is use to get the data object

  // we can also add collections using collectionRef and add() method request

  // snapshot is a collection of data
  // check if the user is exist in users collection database
  if(!snapShot.exists){
    // get the displayName and email of currentUser and also the date that the data is created
    const { displayName, email } = userAuth 
    const created_at = new Date();

    // if the user is not exist, the code below will run and create a new user information to users collection database
    try{
      await userDocReference.set({
        displayName,
        email,
        created_at,
        ...additionalData
      })
    } catch(error){
      console.log('Error Creating user', error.message)
    }
  }
  // return user reference so we can use user Reference in some parts of our code, component or use to do other things
  return userDocReference
} 




firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ promt: 'select_account' })

// export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ promt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)


// export firebase in case we want the whole library
export default firebase

// colletion
export const convertCollectionSnapshotToMap = (collections) =>{
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data() 
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title: title,
      items: items
     }
  })

  // convert to the original object. Because our current data is array. We need to convert it to original object
  return transformedCollection.reduce((accumulator, collection) => { 
    // accumulator is now : exp.: collection.title.toLowerCase() is hats then = collection is the collection items. Now the value of accumulator is hats{ routeName: blah, id: blah, title: blah, items: [blah blah blah blah]}
      accumulator[collection.title.toLowerCase()] = collection
      return accumulator
   }, {})

}
// resolve is use for our api call for example. If the fetch is successful that is resolve and if not, that is reject. After returning a successfull fetch, we can use .then to get the data. The .then is a function that executed if the promise is resolve.
// get current user
export const getCurrentUser = () =>{
  return new Promise((resolve, reject) =>{
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      unsubscribe();
      resolve(userAuth)
    }, reject)
  })
}

// export const getCurrentUser = () =>{
//   auth.onAuthStateChanged(async user =>{
//     try{
//       const userAuth = await user
//       return userAuth
//     }catch(err){
//       return err
//     }
//   })
// }

// batch is use to group and make a 1 big request to avoid passing half of the data if the internet connection is lost
// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//   const collectionRef = firestore.collection(collectionKey)

//   const batch = firestore.batch()

//   objectsToAdd.forEach(obj => {

//     const newDocReference = collectionRef.doc()

//     // instead of calling newDocReference.set(), we will call .batch.set() to make a 1 big request
//     batch.set(newDocReference, obj)
//   })
//     // this will fire our request and it returns a promise to check wether our request is resolve or reject.
//     return await batch.commit()
// }

// 




// there are 2 kinds of read. get and list
// get request can get specific documents
// list can get the whole collections but not specific documents
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {

//     // This rule allows anyone on the internet to view, edit, and delete
//     // all data in your Firestore database. It is useful for getting
//     // started, but it is configured to expire after 30 days because it
//     // leaves your app open to attackers. At that time, all client
//     // requests to your Firestore database will be denied.
//     //
//     // Make sure to write security rules for your app before that time, or else
//     // your app will lose access to your Firestore database
//     match /{document=**} {
//       allow read, write: if request.time < timestamp.date(2020, 5, 22);
//     }
//   }
// }