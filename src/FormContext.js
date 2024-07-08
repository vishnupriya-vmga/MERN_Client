import {createContent,useState} from "react";
export const FormContent=createContent();
export const FormProvider=({childComp})=>{
    const [localDB,setDB]=useState([])
    return(
        <FormContent.Provider
        value={{localDB,setDB}}>
            {childComp}

        </FormContent.Provider>
    )
}