import React, {useEffect} from "react";
import {Panels} from "../LoadingPanel/panels"

function InProgress() {

    useEffect(() => {
        document.title = 'In Progress';
    }, []);

    return (
        <div style={{
            textAlign: "center",
            width: "70vw",
            margin: "auto",
            height: "90vh",
            display: "flex",
            alignItems: "center"
        }}>
            
            <Panels />
            <span className="white display-large">Hey Sorry. I'm currently in the process of completing this case study. In the meantime, please feel free to explore other projects.</span>
        </div>

    );
}

export default InProgress;
