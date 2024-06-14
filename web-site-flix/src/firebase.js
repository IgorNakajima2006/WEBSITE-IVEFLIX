import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { addDoc, collection, getFireStore } from "firebase/firestore"
import { toast } from "react-toastify";


// DATABASE PARA O CADASTRO E  O LOGIN DO USUÁRIO:
const firebaseConfig = {
  apiKey: "AIzaSyD5wpPiB3mMEgiRgycIAzGw6dK1ySgE5F8",
  authDomain: "iveflix-web-site.firebaseapp.com",
  projectId: "iveflix-web-site",
  storageBucket: "iveflix-web-site.appspot.com",
  messagingSenderId: "114932083389",
  appId: "1:114932083389:web:10bea90b2a2de9ef4fe5d4"
};


// CONSTANTE PARA INICIALIZAR O DB:
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFireStore(app);

// cONSTANTE DE CADASTRO, ONDE IRÁ PRECISAR DO NOME, EMAIL E SENHA DO USUÁRIO;
const signup = async (name, email, password)=>{
  // TRY: CRIAÇÃO DO USER
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    // CATCH: EVITANDO POSSÍVEIS ERROS QUE PODEM ACONTECER AO CRIAR A CONTA, ONDE APARECE UM ALERTA DIZENDO "ERROR":
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

// CONSTANTE DE LOGIN, ONDE O USUÁRIO SO IRÁ PRECISAR DO EMAIL E DA SUA SENHA PARA ENTRAR:
const login = async (email, password)=>{
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

// CONSTANTE PARA A SAIDA DA CONTA DO USER:
const logout = async ()=>{
  signOut(auth)
}

export {auth, db, login, signup, logout};