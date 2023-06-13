import React, {useState, useEffect, RefObject} from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

function useIntersection(props) {
    const el = props.el;
    const options = props.options;

    const [intersection, setIntersection] = useState(true);

    useEffect(() => {
        if (el.current == null) return;

        const intersectionObserver = new IntersectionObserver(
            function (entries) {
                setIntersection(entries[0].intersectionRatio === 1);
              },
            { ...options, threshold: [1] }
        );

        intersectionObserver.observe(el.current);

        return (() => {
            intersectionObserver.disconnect();
        });
    }, [el.current]);

    return intersection;
    
}

export default useIntersection;
