//Movie App => API => fetch the details of any movie that we want
//trending movies of the year
//genre => thriller, drama,comedy
//fecth the most rated imdb movies
const api='http://www.omdbapi.com/?apikey=61e576a4&t='
let notfound=document.getElementById('notfound');
let found=document.getElementById('found');
function searchmovie() {
    let moviename = document.getElementById('moviename');
    let query = api + moviename.value;
//console.log(query);
//fetch(query).then((data)=>{
   // console.log(data);
// });
//we get response but we need data so
    fetch(query)
        .then((data) => data.json())
        .then((data) => {
            console.log(data);
            if (data.Error) {
                notfound.classList.remove('d-none');
                found.classList.add('d-none')
                document.getElementById('name').innerText = moviename.value;
            } else {
                notfound.classList.add('d-none');
                found.classList.remove('d-none');
                document.getElementById('plot').innerText=data.Plot;
                document.getElementById('title').innerText = data.Title;
                document.getElementById('poster').src = data.Poster;
                document.getElementById('genre').innerText = data.Genre;
                document.getElementById('language').innerText = data.Language; // Assuming you have this field in your JSON
                document.getElementById('collection').innerText = data.BoxOffice; // Assuming you have this field in your JSON
                document.getElementById('awards').innerText = data.Awards;
                document.getElementById('director').innerText = data.Director;
                document.getElementById('writer').innerText = data.Writer;
                document.getElementById('date').innerText = data.imdbRating; // Assuming you have this field in your JSON
            }
        });
}
