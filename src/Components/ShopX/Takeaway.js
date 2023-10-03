import React from "react";

function Takeaway() {
    return(
        <div style={{maxWidth: "100vw", width: "100%"}}>
            <div style={{maxWidth: "70vw", marginLeft: "auto", marginRight: "auto"}}>
                <span className='display-large h1'>
                Key Takeaways
                </span>
                
                <div style={{display: "flex", columnGap: "12px", marginTop: "2rem"}}>
                    <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                    <span >During the hackathon, we delved into e-commerce, retail, and technology. Despite being newcomers, we eagerly embraced the challenge, focusing on Square's API and merchant needs. This experience expanded our knowledge, broadened our horizons, and deepened our understanding of this domain.
                    </span>
                </div>

                <div style={{display: "flex", columnGap: "12px", marginTop: "2rem"}}>
                    <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{width: "24px", height: "24px", marginTop: "0.3rem"}}/>
                    <span >We also honed our skills in seamlessly integrating diverse technologies to create a more holistic and impactful user experience We combined Square API with tools like Google Maps, Google ARCore, Google Pay, and Meta Spark AR, creating a comprehensive shopping journey. This experience sharpened our abilities and empowered us to navigate the intricate interplay of technologies, delivering a robust solution.
                    </span>
                </div>

            </div>
            

        </div>
    )
}

export default Takeaway;
