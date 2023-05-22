"use client";

import Image from "next/image";
import Link from "next/link";
import Input from "../components/input";
import PriButton from "../components/PrimaryButton";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase";
import { db } from "../auth/firebase.js";
import { collection, addDoc } from "firebase/firestore";

export default function Cadastro() {

  const cadastrar = () => {
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const docRef = await addDoc(
          collection(db, "users"),
          {
            email: email,
            name: name,
            uid: user.uid,
          }
        );
        window.location.pathname = "/login";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <main className="flex min-h-screen flex-col bg-movie">
      <div className="mt-10 ml-10 xs:ml-20">
        <div className="font-mont">
          <span className="text-white font-light">Film</span>
          <span className="text-[#AC1A19] font-bold">Chase</span>
        </div>

        <div className="mt-10">
          <div className=" font-mont font-bold">
            <span className="text-white sm:text-4xl text-2xl">
              Crie uma conta nova
            </span>
            <span className="text-[#AC1A19] text-7xl">.</span>
          </div>

          <div className="font-mont mt-2">
            <span className="text-[#BABABA] sm:text-sm text-xs font-medium">
              Já tem uma conta?
            </span>
            <span className="text-[#AC1A19] sm:text-sm text-xs font-bold">
              <Link href="/login"> Entre</Link>
            </span>
            <div className=" mt-10">
              <Input placeholder="Nome" id="name" />
              <Input type="email" id="email" name="email" placeholder="Email" />
              <Input
                type={"password"}
                id="password"
                name="password"
                placeholder="Senha"
              />
            </div>
            <PriButton onClick={cadastrar}>Cadastrar</PriButton>
          </div>
        </div>
      </div>
    </main>
  );
}
