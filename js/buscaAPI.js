const buscaAPI = 'https://fernando-silvaa.github.io/API-pagina-NandoTube/API%20videos.json';

buscarVideosAPI();

async function buscarVideosAPI() {
    const res = await fetch(buscaAPI);
    videos = await res.json();
    exibirVideos(videos);
}