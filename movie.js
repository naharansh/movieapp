const form=document.querySelector('form')
const movie=document.querySelector('.container')
const poster=document.querySelector('.poster')
const det=document.querySelector('.details')
const box=document.querySelector('#box')
form.addEventListener('submit',(e)=>{
        e.preventDefault()
        if(box.value != '')
        {
        getmovie(box.value);  

        }
        else
        {
            movie.innerHTML="<h2>Please enter the movie name</h2>";
        }
})
//
const getmovie =async(val)=>{
    try{
        const key="d23a533c";
    const data=await fetch(`http://www.omdbapi.com/?apikey=${key}&t=${val}`)
    const res=await data.json();
    console.log(res);
    showdata(res);
    }catch(error)
    {
        movie.innerHTML=`<h1>Some error has been occur</h1>`
    }
}   
const showdata=(res)=>{
    // console.log(data)
    movie.innerHTML=' ';
    movie.classList.remove("noback")
    const { Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster } = res;
    const movieelement=document.createElement('div');
    // console.log(Title)
    movieelement.classList.add("moviedetalis")
    movieelement.innerHTML=`<h2>${Title}</h2> <p><strong>Rating:&#11088;${imdbRating}</strong></p>`;
    //  movie.appendChild(movieelement)
    const gen=document.createElement('div')
    gen.classList.add("genre");
    Genre.split(",").forEach(element => {
          const p=document.createElement('p')
          p.innerText=element;
          gen.appendChild(p);    
    });
    movieelement.appendChild(gen);
    movieelement.innerHTML+=` <p><strong>ReleasedDate:&#11088;${Released}</strong></p> <p><strong>Duration:&#11088;${Runtime}</strong></p>
                <p><strong>Cast:&#11088;${Actors}</strong></p> <p><strong>Plot:&#11088;${Plot}</strong></p>`;
    movie.appendChild(movieelement)
    const pos= document.createElement("div");
    pos.classList.add("poster-movie")
    pos.innerHTML=`<img src="${Poster}">`
    movie.appendChild(pos)
    movie.appendChild(movieelement)

}