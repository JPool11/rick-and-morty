function getData(done){
    const results = fetch('https://rickandmortyapi.com/api/character')
    results.then(response => response.json())
    .then(data => {
        done(data);
    });
}
getData(data => {
    data.results.forEach(result => {
        const article = document.createRange().createContextualFragment(`
        <article>
            <div class="image-container">
                <img src="${result.image}" alt="Personaje">
            </div>
            <h2>${result.name}</h2>
            <span>${result.status}</span>
            <p>${result.species}</p>
            <p>${result.gender}</p>
        </article>
        `);
        const main = document.querySelector('main');
        main.append(article);
    });
});