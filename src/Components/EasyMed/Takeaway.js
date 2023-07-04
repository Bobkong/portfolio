import React from "react";

function Takeaway() {
    return(
        <div style={{maxWidth: "70vw", marginLeft: "auto", marginRight: "auto"}}>
            <span className="label-large white">Key Takeaways</span>
            <span className='display-large h1' style={{marginTop: "1rem"}}>
                Designing an AI product for senior adult taught me a lot.
            </span>
            <p style={{marginTop: "2rem"}}>
                This hackathon experience has been truly unique. I had the opportunity to collaborate with individuals from different roles, integrate various AI technologies into my design, and communicate extensively with senior users and healthcare professionals. Here are a few things I’ve learned: 
            </p>
            <div style={{display: "flex", columnGap: "12px", marginTop: "2rem"}}>
                <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                <span >Prioritize, prioritize, and prioritize: Working under a tight deadline, prioritization becomes crucial for achieving our goals. We need to prioritize the different user groups, potential features, and user feedback to implement the most important parts.
                </span>
            </div>

            <div style={{display: "flex", columnGap: "12px", marginTop: "2rem"}}>
                <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                <span >Designing AI products is challenging yet fulfilling: Designing AI products differs from traditional digital products as ethical issues may be introduced unintentionally. To avoid such issues, we can follow established AI design frameworks. I utilized the Microsoft Responsible AI framework in designing EasyMed.
                </span>
            </div>

            <div style={{display: "flex", columnGap: "12px", marginTop: "2rem"}}>
                <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                <span >Worthwhile to design for accessibility: Through interviews and user testing, I discovered that many senior users face challenges while using digital products. This has inspired me to further explore accessible design and design solutions that cater to vulnerable groups in the future.
                </span>
            </div>

        </div>
    )
}

export default Takeaway;
