import { useContext } from 'react';
import {context} from "./context.js"
import { Displaycard } from './Displaycard.js';


export function Cards() {
    
    var contextdata = useContext(context);
    console.log(contextdata);
    // contextdata.map((e)=>console.log(e))
    return (
        <>Card
        <div className="cards">
            {
                contextdata.map((ele,index)=>{
                    return <Displaycard key={index} data={ele} />
                })
            }
            

        </div>
        </>
    )
}

