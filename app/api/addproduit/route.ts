import { database } from "@/db/firebase"
import { addDoc, collection } from "firebase/firestore"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    const data = await req.json()
    try {
        await addDoc(collection(database, "produit"), data)
        return NextResponse.json("ok")
    } catch (error) {
        console.log(error)
        return NextResponse.json("erreur")
    }
}