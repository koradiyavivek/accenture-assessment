// part 1
Array.from(document.getElementsByTagName("a")).forEach(elm => {
    // if don't have href attribute then a tag is not a valid link
    if(!elm.href) return;

    elm.onclick = function() {
        alert(elm.innerText);
    }
})

// part 2
Array.from(document.getElementsByTagName("a")).forEach(elm => {
    // if don't have href attribute then a tag is not a valid link
    if(!elm.href) return;

    elm.onclick = function() {
        window.open(elm.href,'popup','width=600,height=600')
    }
})
