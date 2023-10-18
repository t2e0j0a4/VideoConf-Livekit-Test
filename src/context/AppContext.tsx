"use client";
import { useRouter } from "next/navigation";
import React, { Dispatch, FormEvent, FormEventHandler, SetStateAction, createContext, useState } from "react";

interface AppContextTypes {
    fullName: string, 
    setFullName: Dispatch<SetStateAction<string>>,
    getIntoRoom: (e: FormEvent<HTMLFormElement>) => void
}

export const AppContext = createContext< AppContextTypes | undefined >(undefined);


const AppState = ({children}: {children: React.ReactNode}) => {

    const router = useRouter();

    const [ fullName, setFullName ] = useState<string>('');

    const getIntoRoom = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (fullName) {
            router.push('/room');
        }
    }

    return (
        <AppContext.Provider value={{fullName: fullName, setFullName: setFullName, getIntoRoom: getIntoRoom}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppState