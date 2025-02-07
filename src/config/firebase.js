import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore"; 
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyC33BCvhsCkfKlC7pklhA16NIBT6XoRDaI",
  authDomain: "chat-app-gs-d3f9d.firebaseapp.com",
  projectId: "chat-app-gs-d3f9d",
  storageBucket: "chat-app-gs-d3f9d.firebasestorage.app",
  messagingSenderId: "289162534925",
  appId: "1:289162534925:web:042a13bfc2be1158d53544"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;

        await setDoc(doc(db, "users", user.uid), {    
            id: user.uid,
            username: username.toLowerCase(),
            email,
            name: "",
            avatar: "",
            bio: "Hey, there! I am using chat app",
            lastSeen: Date.now()
        });

        await setDoc(doc(db, "chats", user.uid), {    
            chatData: []
        });

        toast.success("Signup successful!");
    } catch (error) {
        console.error(error);
        toast.error(error.code);
    }
}



export { signup };
