import {
  getDocs,
  collection,
  query,
  setDoc,
  getDoc,
  addDoc,
  doc,
} from "firebase/firestore";
import { set } from "firebase/database";
import { ref as sRef } from "firebase/storage";
import { getDb } from "./firebase";

const collection_name = "smartlocks";

export const findAll = async () => {
  return await getDocs(collection(getDb(), collection_name));
};

export const fetchAll = async () => {
  const data = [];
  const querySnapshot = await getDocs(collection(getDb(), collection_name));
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, data: doc.data() });
  });
  return await data;
};

export const setIsActiveSmartlock = (id, state) => {
  const smartlockRef = doc(getDb(), collection_name, id);
  setDoc(smartlockRef, { isActive: state }, { merge: true });
};

export const getDetailsSmartlock = async (id) => {
  const smartlockRef = doc(getDb(), collection_name, id);
  const smartlockSnap = await getDoc(smartlockRef);
  const smartlock = { id: smartlockSnap.id, data: smartlockSnap.data() };
  return smartlock;
};

export const addSmartlock = (productId, name, isActive) => {
  const docRef = addDoc(collection(getDb(), collection_name), {
    productId: productId,
    name: name,
    isActive: isActive,
  });
  console.log(docRef.id);
};

export const changeIsActive = async (id, state, name) => {
  set(sRef(getDb(), "smartlocks/" + id), {
    isActive: state,
    name: name,
  });
};
