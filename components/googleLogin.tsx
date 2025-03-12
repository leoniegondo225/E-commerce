"use client"
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

function GoogleLogin() {

    const redirecte = useRouter()
    
    const googleSignin = async () => {
        const req = await fetch("/api/google", {
            headers: {"Content-type": "application/json"},
            method: "GET"
        })
        const res = await req.json()
        if(res) {
            const app = initializeApp(res);
            const auth = getAuth(app)
            const provider = new GoogleAuthProvider()
            const info = await signInWithPopup(auth, provider)
            //On stocke les info recupèrées de google
            localStorage.setItem("users", JSON.stringify({
              id: info.user.uid,
              nom: info.user.displayName,
              photo: info.user.photoURL
            }))
            redirecte.push('/dashboard')
        } 
    }

  return (
    <button onClick={() => googleSignin()} className="btn btn-light form-control mb-4"> <FcGoogle className="me-2"/>Se connecter avec google</button>
  )
}

export default GoogleLogin
