import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Slide } from 'react-slideshow-image';
import { getSiteBaseURL, LazyBackground } from '../../Constants';

const SLIDE_PATH_PREFIX = 'slides/';

function createSingleSlide(images, slidename) {
    let urlsrc = getSiteBaseURL() + "/" + images[slidename];
    let image = new Image();
    image.src = urlsrc;
    return (
        <div className="each-slide">
            <LazyLoadImage
                alt={image.alt}
                src={urlsrc}
                /*
                height={image.height}
                width={image.width}
                */
            ></LazyLoadImage>
        </div>
    );
}

function generateSlides(images) {
    var slides = [];
    for(let i = 0; i < images.length; i++) {
        slides[i] = createSingleSlide(images, i);
    }
    return slides;
}

export function createSlideShowObject(images) {
    var ret = (
        <Slide easing="ease" arrows={false}>
            {generateSlides(images)}
        </Slide>);
    return ret;
}

export const SLIDES_CASTLES = [
    SLIDE_PATH_PREFIX + 'castles/1.jpg',
    SLIDE_PATH_PREFIX + 'castles/2.jpg',
    SLIDE_PATH_PREFIX + 'castles/3.jpg',
    SLIDE_PATH_PREFIX + 'castles/4.jpg',
    SLIDE_PATH_PREFIX + 'castles/5.jpg',
    SLIDE_PATH_PREFIX + 'castles/6.jpg',
    SLIDE_PATH_PREFIX + 'castles/7.jpg',
    SLIDE_PATH_PREFIX + 'castles/8.jpg',
    SLIDE_PATH_PREFIX + 'castles/9.jpg',
    SLIDE_PATH_PREFIX + 'castles/10.jpg'
]

export const SLIDES_VOLCANO = [
    SLIDE_PATH_PREFIX + 'volcano/1.jpg',
    SLIDE_PATH_PREFIX + 'volcano/2.jpg',
    SLIDE_PATH_PREFIX + 'volcano/3.jpg',
    SLIDE_PATH_PREFIX + 'volcano/4.jpg'
]

export const SLIDES_CASTLES_SNOW = [
    SLIDE_PATH_PREFIX + 'castles_snow/1.jpg',
    SLIDE_PATH_PREFIX + 'castles_snow/2.jpg',
    SLIDE_PATH_PREFIX + 'castles_snow/3.jpg',
    SLIDE_PATH_PREFIX + 'castles_snow/4.jpg',
    SLIDE_PATH_PREFIX + 'castles_snow/5.jpg',
    SLIDE_PATH_PREFIX + 'castles_snow/6.jpg',
    SLIDE_PATH_PREFIX + 'castles_snow/7.jpg',
    SLIDE_PATH_PREFIX + 'castles_snow/8.jpg',
    SLIDE_PATH_PREFIX + 'castles_snow/9.jpg'
]

export const SLIDES_STRONGHOLDS = [
    SLIDE_PATH_PREFIX + 'strongholds/1.jpg',
    SLIDE_PATH_PREFIX + 'strongholds/2.jpg',
    SLIDE_PATH_PREFIX + 'strongholds/3.jpg',
    SLIDE_PATH_PREFIX + 'strongholds/4.jpg',
    SLIDE_PATH_PREFIX + 'strongholds/5.jpg',
    SLIDE_PATH_PREFIX + 'strongholds/6.jpg',
    SLIDE_PATH_PREFIX + 'strongholds/7.jpg',
    SLIDE_PATH_PREFIX + 'strongholds/8.jpg',
    SLIDE_PATH_PREFIX + 'strongholds/9.jpg'
]

export const SLIDES_OUTPOSTS = [
    SLIDE_PATH_PREFIX + 'outposts/1.jpg',
    SLIDE_PATH_PREFIX + 'outposts/2.jpg',
    SLIDE_PATH_PREFIX + 'outposts/3.jpg',
    SLIDE_PATH_PREFIX + 'outposts/4.jpg',
    SLIDE_PATH_PREFIX + 'outposts/5.jpg',
    SLIDE_PATH_PREFIX + 'outposts/6.jpg',
    SLIDE_PATH_PREFIX + 'outposts/7.jpg'
]

export const SLIDES_TAVERNS = [

]

export const SLIDES_NETHER = [
    SLIDE_PATH_PREFIX + 'nether/1.jpg',
    SLIDE_PATH_PREFIX + 'nether/2.jpg',
    SLIDE_PATH_PREFIX + 'nether/3.jpg',
    SLIDE_PATH_PREFIX + 'nether/4.jpg',
    SLIDE_PATH_PREFIX + 'nether/5.jpg'
]

export const SLIDES_SHIPS = [
    SLIDE_PATH_PREFIX + 'ships/1.jpg',
    SLIDE_PATH_PREFIX + 'ships/2.jpg',
    SLIDE_PATH_PREFIX + 'ships/3.jpg',
    SLIDE_PATH_PREFIX + 'ships/4.jpg',
    SLIDE_PATH_PREFIX + 'ships/5.jpg',
    SLIDE_PATH_PREFIX + 'ships/6.jpg',
    SLIDE_PATH_PREFIX + 'ships/7.jpg',
    SLIDE_PATH_PREFIX + 'ships/8.jpg',
    SLIDE_PATH_PREFIX + 'ships/9.jpg'
]

export const SLIDES_CAVES = [
    SLIDE_PATH_PREFIX + 'caves/1.jpg',
    SLIDE_PATH_PREFIX + 'caves/2.jpg'
]

export const SLIDES_WALL = [
    SLIDE_PATH_PREFIX + 'wall/1.jpg'
]