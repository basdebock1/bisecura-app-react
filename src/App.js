import NotFound from "./NotFound";
import BiSecura from "./BiSecura";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useAuthState } from "react-firebase-hooks/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAIIihyk3cKic6PpbHhBrUg9In9tWC4qQE",
  authDomain: "bisecura.firebaseapp.com",
  projectId: "bisecura",
  storageBucket: "bisecura.appspot.com",
  messagingSenderId: "341558596091",
  appId: "1:341558596091:web:7303a41ebe389445ff7b5e",
  measurementId: "G-GY9PMC3VDN",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <section>
        {user ? (
          <>
            <BiSecura />
            <SignOut />
          </>
        ) : (
          <SignIn />
        )}
      </section>
    </div>
  );

  function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    };
    return <button onClick={signInWithGoogle}>Sign in with Google</button>;
  }

  function SignOut() {
    return (
      auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>
          Sign Out
        </button>
      )
    );
  }
}

export default App;
