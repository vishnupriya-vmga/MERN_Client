import React from "react";
import { Mycontext } from './Mycontext';
import  Mycomponent  from './Mycomponent';
import { useState } from "react";
import Header from "./Component/Header";
import Login from "./Component/Login";

export default function Example(){
    const [text,setText]=useState("")
    return(
        //provide
        <div>
            <Mycontext.Provider value={{text,setText}}>
                <Mycomponent/>        
            </Mycontext.Provider>
        </div>

    )
}