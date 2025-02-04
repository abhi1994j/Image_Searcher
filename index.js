const searchInput = document.querySelector("#search-input");
const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
// console.log(searchInput.value);
const fromE1 = document.querySelector("form");
// const searchBtn = doc
let page = 1;
let inputValue = ''
const searchImage =async()=>{
    inputValue = searchInput?.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputValue}&client_id=${accessKey}`;
    const response = await fetch(url);
    // console.log(response);
    const res = await response.json();
    console.log(res);
    const finalDB = res.results;
    finalDB.map((ele)=>{
        const imageBox = document.createElement('div');
        

        
    })
}
fromE1.addEventListener("submit" , (e)=>{
    // console.log(e.target.value);
    e.preventDefault();
    searchImage();
})


