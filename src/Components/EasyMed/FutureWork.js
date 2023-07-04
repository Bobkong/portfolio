import React from "react";

function FutureWork() {
    return(
        <div style={{maxWidth: "70vw", marginLeft: "auto", marginRight: "auto", marginTop: "10rem"}}>
            <span className="label-large white">Future Work</span>
            <span className='display-large h1' style={{marginTop: "1rem"}}>
                Design never stops being better!
            </span>
            <p style={{marginTop: "2rem"}}>
                Due to time constraints, EasyMed is currently a minimum viable product, and we acknowledge that there is still much work to be done in the future. However, we remain committed to constantly improving and innovating. Here are some of our future directions.
            </p>
            <div style={{display: "flex", columnGap: "12px", marginTop: "2rem"}}>
                <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                <span >AI improvement: We aim to enhance our machine-learning model to incorporate dosage information as an input parameter, and also plan to implement a food recognition feature where users can simply take a picture of their meal instead of manually inputting each ingredient.
                </span>
            </div>

            <div style={{display: "flex", columnGap: "12px", marginTop: "2rem"}}>
                <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                <span >User experience optimization: To provide more personal report, we plan to implement more features such as medication reminders and text-based search for drugs and food.
                </span>
            </div>

            <div style={{display: "flex", columnGap: "12px", marginTop: "2rem"}}>
                <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                <span >MyChart Integration: We also aim to integrate EasyMed with digital health record systems such as MyChart to enhance data sharing between patients and physicians, providing more transparency and efficiency.
                </span>
            </div>

        </div>
    )
}

export default FutureWork;
