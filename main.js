let button1 = document.querySelector('.button_1')
let button2 = document.querySelector('.button_2')
let video = document.querySelector("#video_player")

/*fetch("https://vidsrc.to/vapi/movie/add")
    .then(res => res.json())
    .then(data => movieApp(data))
    .catch(err => console.log(err))

    form.addEventListener("submit", () => {
        fetch(`https://vidsrc.to/vapi/movie/add`)
        .then(res => res.json())
        .then(data => movieApp(data))
        .catch(err => console.log(err))

        inp.value = ""
    })

function movieApp(data){
        video.setAttribute("src", `${data.result.page.items[0].embed_url_imdb}`)
    } */

video.setAttribute("src", "https://vidsrc.to/embed/movie/123")

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    video.setAttribute("src", `https://vidsrc.to/embed/movie/${inp.value == "" ? "123" : `${inp.value}`}`)

})


button1.addEventListener("click", () => {
    button1.style.backgroundColor = "#152c42";
    button1.style.color = '#f8c55c';
    button2.style.backgroundColor = "#f8c55c";
    button2.style.color = "#152c42";
})

button2.addEventListener("click", () => {
    button2.style.backgroundColor = "#152c42";
    button2.style.color = '#f8c55c';
    button1.style.backgroundColor = "#f8c55c"
    button1.style.color = "#152c42";
})