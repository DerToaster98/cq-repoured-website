import { useEffect, useState } from "react";

export const CQR_GITHUB_REPOSITORY_URL = "https://github.com/TeamChocoQuest/ChocolateQuestRepoured";
export const SITE_BASE_URL = "cq-repoured-website";
export function getSiteBaseURL() {
    return window.location.origin + "/" + SITE_BASE_URL;
} 

export function LazyBackground({src}) {
    const [source, setSource] = useState(getSiteBaseURL() + '/loading.gif');

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setSource(src);
    }, [src]);

    return(
        <div style={{backgroundImage: `url(${source})`}}></div>
    )
}
