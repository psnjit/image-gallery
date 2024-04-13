let scrollContainer= document.querySelector(".gallery");
let backBtn= document.getElementById("backButton");
let nextBtn= document.getElementById("nextButton");

scrollContainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault(); 
    scrollContainer.style.scrollBehavior="auto";
    scrollContainer.scrollLeft+=evt.deltaY
})

backBtn.addEventListener("click", ()=>{
    console.log("Back");
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft -= 900;
})

nextBtn.addEventListener("click", ()=>{
    console.log("Next");
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft += 900;
})