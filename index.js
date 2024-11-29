const search=document.querySelector("#search-icon");
console.log(search);
const searchBar= document.querySelector(".search-bar");
console.log(searchBar)

search.addEventListener("click", function(e){
   
   searchBar.classList.toggle("active")
   menuBar.classList.remove("navs");
   
})


let navBar=document.querySelector("#nav-bar");
console.log(navBar);
let menuBar=document.querySelector(".link")
console.log(menuBar);

navBar.addEventListener("click",function(){

   menuBar.classList.toggle("navs");
   searchBar.classList.remove("active")
  
})

window.onscroll=()=>{
   
   
   menuBar.classList.remove("navs");
}
