// part 1
// https://www.indiatimes.com/news/

// # The number of articles on the page
// too complex to me

// # The number of images on the page
document.getElementsByTagName("img").length // I got 70


// # The number of exit links on the page
let exit_link_count = 0; 

// getting all links from the site
Array.from(document.getElementsByTagName("a")).forEach(elm => {
    if(!elm.href) return;
    
    const link = (elm.href);

    // checkint weather links is exit link or not
    const origin = location.origin;
    if (link.startsWith(origin)) {
        // not an exit link
    } else {
        // exit link
        exit_link_count++;
    }
})
console.log(exit_link_count) // after running the code I got 95

// same code for google news site 
