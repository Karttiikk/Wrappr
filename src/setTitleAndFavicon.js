// src/setTitleAndFavicon.js

export function setTitleAndFavicon(title, faviconURL) {
    // Change the title
    document.title = title;
  
    // Find the existing favicon element or create a new one
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = faviconURL;
  
    // If the link element is newly created, append it to the head
    if (!document.querySelector("link[rel*='icon']")) {
      document.head.appendChild(link);
    }
  }
export default setTitleAndFavicon;