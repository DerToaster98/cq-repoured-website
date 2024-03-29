import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LoadingSymbol from "./components/loadingSymbol/LoadingSymbol";

export const CQR_GITHUB_REPOSITORY_URL = "https://github.com/TeamChocoQuest/ChocolateQuestRepoured";
export const CQR_GITHUB_REPOSITORY_ISSUES_URL = CQR_GITHUB_REPOSITORY_URL + "/issues"
export const GITHUB_REPOSITORY = "ChocolateQuestRepoured";
export const GITHUB_REPOSITORY_OWNER = "TeamChocoQuest";
export const GITHUB_API_URL_BASE = "https://api.github.com"
export const GITHUB_API_URL_CQR = GITHUB_API_URL_BASE + "/repos/" + GITHUB_REPOSITORY_OWNER + "/" + GITHUB_REPOSITORY;

export const GITHUB_ISSUE_LINK_REGEX = "#[1-9][0-9]*";

export const SITE_BASE_URL = "cq-repoured-website";
export function getSiteBaseURL() {
    return window.location.origin + "/" + SITE_BASE_URL;
} 

export function generateLazyBackgroundWithJustImagePath(imagePath) {
    let urlsrc = getSiteBaseURL() + "/" + imagePath;
    let image = new Image();
    image.src = urlsrc;

    return(
        <LazyLoadImage placeholder={<LoadingSymbol></LoadingSymbol>} alt={image.alt} src={urlsrc}></LazyLoadImage>
    );
}

//Marked stuff
export const markedGHIssueLinkExtension = {
    name: 'ghissuelink',
    level: 'inline',                                 // Is this a block-level or inline-level tokenizer?
    // Hint to Marked.js to stop and check for a match
    start(src) { 
        //alert(src.match(" #") + "   " + src);
        //return src.match(/#/).index;
    },
    tokenizer(src, tokens) {
      const rule = / #[1-9][0-9]*/;  // Regex for the complete token
      const match = rule.exec(src);
      if (match) {
        return {                                         // Token to generate
          type: 'ghissuelink',                           // Should match "name" above
          raw: src,
          rawFront: src.split(match[0].substring(1))[0],
          rawBack: src.split(match[0].substring(1))[1],
          issueId: match[0].substring(2)
        };
      }
    },
    renderer(token) {
      return token.rawFront + `<a class="link-no-underline" target=_blank href=${CQR_GITHUB_REPOSITORY_ISSUES_URL + "/" + token.issueId}>${ '#' + token.issueId}</a>` + token.rawBack;
    },
  };