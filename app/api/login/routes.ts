import {auth, database} from "@/db/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { NextResponse } from "next/server"


export const POST = async (req: Request) =>{
    const {email, password} = await req.json()
    try {
        const userinfo= await signInWithEmailAndPassword(auth, email, password)
        const uid= userinfo.user.uid
        console.log(uid)
        const snap = await getDoc(doc(database, "users",uid))
        if(snap.exists()) {
            const data = snap.data()
            return NextResponse.json({data})
        }else{
            return NextResponse.json("Email ou mot de passe incorrecte")
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json("Email ou mot de passe incorrecte")
    }
}