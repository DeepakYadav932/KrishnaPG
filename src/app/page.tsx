"use client";
import { redirect } from "next/navigation"

export default function Home(): React.ReactNode {
  try {
    redirect('/home')
    return null
  } catch (error) {
    console.log({ error })
  }
}
