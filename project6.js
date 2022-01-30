window.addEventListener('click', (event) => {
    const btn = document.createElement('h1'); // create element h1 
    document.body.appendChild(btn); // add element h1 to body 

if (event.clientX%2 == 0) {
    document.body.style.backgroundColor = "red";
}
if (event.clientX%2 == 1) {
    document.body.style.backgroundColor = "black"
}
    
})