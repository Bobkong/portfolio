import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AnimatedCursorContext } from "../HoverText/AnimatedCursorManager";
import { useContext } from 'react';

function Achievenment() {

    const { cursorStyleHandler } = useContext(AnimatedCursorContext);

    const textEnter = () => {
        cursorStyleHandler("text");
    };

    const textLeave = () => {
        cursorStyleHandler("default");
    };
    return (
        <div style={{
            width: "70vw",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10rem",
            marginBottom: "10rem"
        }}>
            <span className='display-large h1' >
                Main Features
            </span>

            <span className='headline-large neutrals' style={{ marginTop: "1rem" }} >
                In this project, I wear multiple hats, serving as a UI/UX designer, 3D modeler, and software engineer. Realistic Event Showcaser - Paris 2024 is not just a tool but a glimpse into the future of event showcasing and experience. Here are some main features:
            </span>
            <div style={{ display: "flex", columnGap: "12px", marginTop: "1rem" }}>
                <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{ width: "24px", height: "24px", marginTop: "0.3rem" }} />
                <div>
                    <span className="neutrals headline-large" style={{ display: "inline" }}>
                        Explore Olympic venues, locations of Olympic milestones, and iconic attractions in Paris.
                    </span>
                </div>
            </div>

            <div style={{ display: "flex", columnGap: "12px", marginTop: "1rem" }}>
                <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{ width: "24px", height: "24px", marginTop: "0.3rem" }} />
                <div>
                    <span className="neutrals headline-large" style={{ display: "inline" }}>
                        Engage with innovative 3D maps featuring detailed models.
                    </span>
                </div>
            </div>

            <div style={{ display: "flex", columnGap: "12px", marginTop: "1rem" }}>
                <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{ width: "24px", height: "24px", marginTop: "0.3rem" }} />
                <div>
                    <span className="neutrals headline-large" style={{ display: "inline" }}>
                        Meet the adorable Paris Olympic mascots - the Phryges!
                    </span>
                </div>
            </div>

            <div style={{ display: "flex", columnGap: "12px", marginTop: "1rem" }}>
                <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{ width: "24px", height: "24px", marginTop: "0.3rem" }} />
                <div>
                    <span className="neutrals headline-large" style={{ display: "inline" }}>
                        Access Google nearby recommendations for added convenience.
                    </span>
                </div>
            </div>

            <div style={{ display: "flex", columnGap: "12px", marginTop: "1rem" }}>
                <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{ width: "24px", height: "24px", marginTop: "0.3rem" }} />
                <div>
                    <span className="neutrals headline-large" style={{ display: "inline" }}>
                        Fully configurable, effortlessly customize your own events without altering a single line of JS code.
                    </span>
                </div>
            </div>
            <div style={{ display: "flex", columnGap: "12px", marginTop: "1rem" }}>
                <img src="https://ik.imagekit.io/poonr2gma/star.png?updatedAt=1681181592077" style={{ width: "24px", height: "24px", marginTop: "0.3rem" }} />
                <div>
                    <span className="neutrals headline-large" style={{ display: "inline" }}>
                        And more...
                    </span>
                </div>
            </div>
        </div >

    )
}

export default Achievenment;
