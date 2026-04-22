'use client';

import { Button, Input } from '@nextui-org/react'
import { useState } from "react";

import AlumniDataTable from "@/components/alumniTable";
import { title } from "@/components/primitives";
import UserDataTable from "@/components/userTable";


export default function RegistrationDataPage() {
  const password = "BECM_Carnival_1.0";
  const [inputPassword, setInputPassword] = useState("");
  const [authentic, setAuthentic] = useState(false);

  const handlePassword = () => {
    if (inputPassword === password) {
      console.log("Password correct");
      setAuthentic(true);
    }
    else {
      console.log("Password incorrect");
      setAuthentic(false);
    }
  }

  if (!authentic) {
    return (
      <div className="flex flex-col items-center">
        <form className='max-w-xl w-full'>
          <Input className='w-full py-3' onValueChange={(value) => { setInputPassword(value) }} placeholder="Enter password" label="Password:" labelPlacement='outside' type='password' />
          <Button className='w-full mb-5' onClick={handlePassword}>Submit</Button>
        </form>
      </div>
    )
  } else {
    return (
      <div className="flex flex-col items-center">
        <h1 className={title({ class: "mb-5 text-center" })}>Registration Data</h1>
        {
          <>
            <UserDataTable password={password} />
            <AlumniDataTable password={password} />
          </>
        }
      </div >
    );
  }
}
