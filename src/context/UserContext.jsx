import { createContext, useState } from "react";

export const datacontext = createContext();

function UserContext({children}){
    const [added,setadded] = useState(false);
    const [cnt,setcnt] = useState(0);
    const [clicked,setclicked] = useState(false);
    const [image,setimage] = useState(null);
    const [price,setprice] = useState(null);

    const value = {
        added,
        setadded,
        cnt,
        setcnt,
        clicked,
        setclicked,
        image,
        setimage,
        price,
        setprice
    }

    return (
        <div>
            <datacontext.Provider value={value}>
                {children}
            </datacontext.Provider>
        </div>
    );
}

export default UserContext;