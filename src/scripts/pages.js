import { playstoreLink, websiteUrl, windowsLink } from "./constants.js";

// Page Class
class Page {
  constructor(href, label, otherUrls = []) {
    this.href = href;
    this.label = label;
    this.otherUrls = otherUrls.concat(href);
  }

}
// define data types js constructors
// check if list contains a given item
// add script tags to astro pages
// PWAs in astro
export const pages = [
  new Page("/", "Go to Home"),
  new Page(windowsLink, "Get GRM for Windows"),
  new Page(playstoreLink, "Get GRM for Android"),
  new Page(websiteUrl, "Visit GRM Website"),
];
