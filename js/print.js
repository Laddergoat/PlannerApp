/**
 * Created by andy on 12/12/13.
 */
/**
 * This function allows the CSS to be changed for the HTML.
 * This is done to prevent issues when you Print.
 * @param cssFile
 * @param cssLinkIndex
 */
function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}