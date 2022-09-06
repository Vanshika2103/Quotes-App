
const newQouteBtn = document.querySelector("#new-qoute-btn");
const qoute = document.querySelector("#qoute");
const author = document.querySelector("#author")


const api = "https://api.quotable.io/random";
const newQoutes = ()=>{
    fetch(api).then(resonse=>resonse.json()).then(qoutes=>{
        // console.log(qoutes.content);
        qoute.innerText = qoutes.content;
        author.innerText = `By ${qoutes.authorSlug}`
    })
}


newQouteBtn.addEventListener("click",newQoutes);