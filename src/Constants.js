import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const CQR_GITHUB_REPOSITORY_URL = "https://github.com/TeamChocoQuest/ChocolateQuestRepoured";
export const SITE_BASE_URL = "cq-repoured-website";
export function getSiteBaseURL() {
    return window.location.origin + "/" + SITE_BASE_URL;
} 

export function generateLazyBackgroundWithJustImagePath(imagePath) {
    let urlsrc = getSiteBaseURL() + "/" + imagePath;
    let image = new Image();
    image.src = urlsrc;

    return(
        <LazyLoadImage alt={image.alt} src={urlsrc}></LazyLoadImage>
    );
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
