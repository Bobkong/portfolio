import React from "react";

function Takeaway() {
    return(
        <div style={{maxWidth: "100vw", backgroundColor: "#1b1b1b", width: "100%", marginTop: "10rem", paddingTop: "10rem", paddingBottom: "10rem"}}>
            <div style={{maxWidth: "70vw", marginLeft: "auto", marginRight: "auto"}}>
                <span className='display-large h1'>
                Key Takeaways
                </span>
                
                <div style={{display: "flex", columnGap: "12px", marginTop: "2rem"}}>
                    <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                    <span >To excel in business design, it's essential to gain profound insights into the behavior of each role, paving the way for the creation of tailored and effective solutions.
                    </span>
                </div>

                <div style={{display: "flex", columnGap: "12px", marginTop: "2rem"}}>
                    <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                    <span >Evaluate the feasibility and alignment of the solution with business needs from the outset, particularly in cases where the company operates on a tight budget. Involving developers at an early stage and gathering their feedback on the design is crucial to success.
                    </span>
                </div>

                <div style={{display: "flex", columnGap: "12px", marginTop: "2rem"}}>
                    <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                    <span >Maintain a rational approach in discussions with both product managers and developers. As the advocate for an exceptional user experience, be ready to provide detailed explanations for every design decision you make.
                    </span>
                </div>
            </div>
            

        </div>
    )
}

export default Takeaway;
