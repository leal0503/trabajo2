import { 
  initializeApp 
  }  from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'

  import{
   getFirestore,
   addDoc,
   collection,
   getDocs
  } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'


  import { 
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  sendEmailVerification
  }  from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'
  
  const firebaseConfig = {
    apiKey: "AIzaSyAmu2gYUmxUw4apISlPjzFTwrJxrdkevuQ",
    authDomain: "desnube2024-a85c7.firebaseapp.com",
    projectId: "desnube2024-a85c7",
    storageBucket: "desnube2024-a85c7.appspot.com",
    messagingSenderId: "587847150857",
    appId: "1:587847150857:web:b1f92136b3dc1df71b77d8",
    measurementId: "G-5JW0H62XEX"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  
  //metodo de autenticacion de usuario
  export const accessuser=(email,password)=>
    signInWithEmailAndPassword(auth, email, password)
  
  //Verificación de logeo
  export function userstate(){
    onAuthStateChanged(auth, (user) => {
      if (user) { 
        const uid = user.uid;
        console.log("usuario: "+uid)
      } else {
        window.location.href="../index.html"
      }
    });
  }
  
  //Cerrar sesión
  export const logout=()=>signOut(auth)

  //registrar usuario nuevo
  export const createuser=(email, password)=>
    createUserWithEmailAndPassword(auth, email, password)
  
  //Email de verificacion
  export const everification=()=>
    sendEmailVerification(auth.currentUser)
  
  //agregar datos
  export const Addproducto = (codigo,nombre,descripcion, cantidad)=>
    addDoc (collection(db, "productos"), {
      codigo,
      nombre, 
      descripcion, 
      cantidad
    });

    //mostrar productos
    export const viewproducts=()=>
      getDocs(collection(db,"productos"));