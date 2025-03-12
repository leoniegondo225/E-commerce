import { auth, database } from "@/db/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { NextResponse } from "next/server"


export const POST = async ( req: Request) =>{
    const { nom, prenom, sexe, ville, pays, tel, email, password, adresse, typeCompte} = await req.json()
    try {


        const userinfo = await createUserWithEmailAndPassword(auth, email, password)
        const uid = userinfo.user.uid
        console.log(uid)
        const data = { uid,nom, prenom, sexe, ville, pays, tel, email, adresse, typeCompte}
    await setDoc(doc(database,"users", uid ),data)
    console.log(data)
    return NextResponse.json({data})
    
    } catch (error) {
        console.log(error)
        return NextResponse.json("une erreur s'est produite")
    }
}