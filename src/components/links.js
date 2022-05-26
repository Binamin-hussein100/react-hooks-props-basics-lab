import React from "react";

function Links(props){
    console.log(props)
   
    return(
        <div>
            <h3>Links</h3>
            <a href={props.master.links.github}>Github</a>
            <a href={props.master.links.linkedin}>LinkedIn</a>
        </div>
    )
}

export default Links