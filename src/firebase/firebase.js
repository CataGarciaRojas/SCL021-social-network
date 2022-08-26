// import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebaseConfig.js';

/**
 *
 * @param user Object {}
 * @returns {Promise<string>}
 */
// eslint-disable-next-line consistent-return
export async function save(user) {
  try {
    const docRef = await addDoc(collection(db, 'users'), user);
    console.log('Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// save().then((data) => console.log(data))
//   .catch((e) => {
//     console.log(e.message);
//   });
