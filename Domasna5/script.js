const id = new URLSearchParams(window.location.search).get("id") || 1



const episodesContainer = document.getElementById("episodes")
const nextEpisodeButton = document.getElementById("next-btn")
const title = document.getElementById("title")
const image = document.getElementById("show-img")
const summary = document.getElementById("summary")

async function getShow() {

    const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await response.json()
    
    image.src = show.image.medium
    title.innerHTML = show.name
    summary.innerHTML = show.summary
}

async function getEpisodes() {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
    const episodes = await response.json()
   
    
    return episodes
}


 function renderEpisodes(episodes) {

    episodes.forEach(episode => {
        episodesContainer.innerHTML += 
       
        `<div class=episode> 
         <h2> ${episode.name} </h2>
         <p> Season: ${episode.season} </p>
         <p> Episode: ${episode.number} </p>
         <div class=episode-content>
         <img src="${episode.image?.medium || ''}">
         <p> ${episode.summary} </p>
         </div>
        </div>`
    });
}


nextEpisodeButton.addEventListener("click", () => {

    window.location.search = `?id=${+id + 1}`
})

getShow()
getEpisodes().then(renderEpisodes)