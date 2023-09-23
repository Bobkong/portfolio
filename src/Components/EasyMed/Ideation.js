import React from "react";

function Brainstorm() {
    return (
        <div>
            <span className='display-large h1' style={{marginTop: "1rem"}}>
                Time to brainstorm as many solutions as possible!
            </span>
            <p style={{marginTop: "2rem"}}>
                After analyzing the research, I worked with another designer to generate 20 features addressing key pain points and user needs.
            </p>
            <img src="https://ik.imagekit.io/poonr2gma/Group_85.png?updatedAt=1688425201390" style={{width: "100%", marginTop: "2rem"}}/>
        </div>
    );
}

function Prioritize() {
    return (
        <div>
            <span className='display-large h1' style={{marginTop: "8rem"}}>
                Given our time constraints, we need to prioritize the MVP features.
            </span>
            <p style={{marginTop: "2rem"}}>
                We prioritize features based on effort and impact of the feature, and then we got our MVP features with low effort and high impact:
            </p>
            <div className="flex" style={{marginTop: "2rem", alignItems: "center"}}>
                <div>
                    <div style={{display: "flex", columnGap: "12px", marginTop: "1rem"}}>
                        <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                        <span>Potential result and possibility of drug-drug and drug-food interactions</span>
                    </div>

                    <div style={{display: "flex", columnGap: "12px", marginTop: "1rem"}}>
                        <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                        <span>Potential side effects of drugs</span>
                    </div>

                    <div style={{display: "flex", columnGap: "12px", marginTop: "1rem"}}>
                        <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                        <span>Drug barcode scan to add drugs</span>
                    </div>

                    <div style={{display: "flex", columnGap: "12px", marginTop: "1rem"}}>
                        <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                        <span>User drug list</span>
                    </div>

                    <div style={{display: "flex", columnGap: "12px", marginTop: "1rem"}}>
                        <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                        <span>Scan food ingredients/prodcut barcode to check drug-food interaction</span>
                    </div>

                    <div style={{display: "flex", columnGap: "12px", marginTop: "1rem"}}>
                        <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                        <span>Information about common drug-drug and drug-food interaction pairs</span>
                    </div>

                    <div style={{display: "flex", columnGap: "12px", marginTop: "1rem"}}>
                        <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                        <span>Learning materials about adverse interactions</span>
                    </div>

                    <div style={{display: "flex", columnGap: "12px", marginTop: "1rem"}}>
                        <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                        <span>AI prediction disclaimers</span>
                    </div>

                    <div style={{display: "flex", columnGap: "12px", marginTop: "1rem"}}>
                        <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                        <span>Password encrypt and protection</span>
                    </div>

                    <div style={{display: "flex", columnGap: "12px", marginTop: "1rem"}}>
                        <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                        <span>Feedback feature to enable AI accountability</span>
                    </div>
                </div>

                <img src="https://ik.imagekit.io/poonr2gma/Frame_90.png?updatedAt=1688425475881" style={{width: "48%", objectFit: "cover"}}/>
            </div>
        </div>
    );
}

function Ideation() {
    return(
        <div style={{maxWidth: "70vw", marginLeft: "auto", marginRight: "auto"}}>
            <span className="label-large white">Ideation</span>
            <Brainstorm />
            <Prioritize />
        </div>
    )
}

export default Ideation;
