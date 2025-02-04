const searchInput = document.querySelector("#search-input");
const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
// console.log(searchInput.value);
const fromE1 = document.querySelector("form");
const searchResults = document.querySelector(".search-results");
const showMore = document.querySelector("#show-more-button");
// const searchBtn = doc
let page = 1;
let inputValue = ''
const searchImage =async()=>{
    inputValue = searchInput?.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputValue}&client_id=${accessKey}`;
    const response = await fetch(url);
    // console.log(response);
    const res = await response.json();
    // console.log(res);
    if(page === 1){
        searchResults.innerHTML = "";
    }
    const finalDB = res.results;
    finalDB.map((ele)=>{
        console.log(ele);
        const imageBox = document.createElement("div");
        imageBox.classList.add("search-result");
        imageBox.innerHTML = `
            <img src="${ele?.urls?.small}" alt="{ele?.alt_description}" /> <a href="${ele?.links?.html}">${ ele?.alt_description}</a>`
        searchResults.appendChild(imageBox)   
    })
    page++;
    if(page>1){
        showMore.style.display = "block";
    }
}
fromE1.addEventListener("submit" , (e)=>{
    // console.log(e.target.value);
    e.preventDefault();
    page = 1;
    searchImage();
})

showMore.addEventListener("click" , ()=>{
    searchImage();
})


