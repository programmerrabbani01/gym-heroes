import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initiliazeAuthentication from "../Pages/Login/Firebase/Firebase.init";
// Call Firebase Init
initiliazeAuthentication();

//hooks
const useFirebase = () => {
  // Create New User
  const [email, setEmail] = useState({});
  const [password, setPass] = useState({});
  const [user, setUser] = useState({});
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  //Create New User
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setUser(userCredential.user); // Directly set the user state
    })
    .catch((error) => {
      console.error("Error creating user:", error.message); // Log the error if needed
    });

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setUser(user);
    })
    .catch((error) => {
      console.error("Error creating user:", error.message); // Log the error if needed
    });

  const signUsingGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.error("Error creating user:", error.message); // Log the error if needed
      });
  };
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth]);

  return {
    setEmail,
    setPass,
    logOut,
    user,
    signUsingGoogle,
  };
};

export default useFirebase;
