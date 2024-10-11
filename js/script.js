const sitiosTuristicos = [
    { name: 'Cerro Plateado', link: 'subpaginas/cerro.html', showAside: false },
    { name: 'Chorro De San Pedro', link: 'subpaginas/chorrosanpedro.html', showAside: false },
    { name: 'Ruta De La Panela', link: 'subpaginas/rutapanela.html', showAside: false },
    { name: 'Ruta De La Madre Laura', link: 'subpaginas/rutamadrelaura.html', showAside: false },
    { name: 'Parque De Las Orquídeas', link: 'subpaginas/parqueorquideas.html', showAside: false },
    { name: 'Murrí', link: 'subpaginas/murri.html', showAside: false },
    { name: 'Páramo De Frontino', link: 'subpaginas/paramofrontino.html', showAside: false },
];

const sitiosInteres = [
    { name: 'Trucheras Nore', link: 'subpaginas/trucherasnore.html', showAside: false },
    { name: 'Villa Nore', link: 'subpaginas/villanore.html', showAside: false },
    { name: 'Trucheras Cabras', link: 'subpaginas/trucherascabras.html', showAside: false },
    { name: 'Bufalera Murrí', link: 'subpaginas/Bufaleramurri.html', showAside: false },
    { name: 'Zona Urbana', link: 'subpaginas/zonaurbana.html', showAside: false },
];

const createListItems = (list, containerId) => {
    const container = document.getElementById(containerId);
    list.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('dropdown-item');
        const link = document.createElement('a');
        link.href = "#";
        link.textContent = item.name;
        link.onclick = () => loadPage(item.link, item.showAside);
        listItem.appendChild(link);
        container.appendChild(listItem);
    });
};

const loadPage = (url, showAside = false) => {
    console.log(`Loading ${url} ${showAside}`)
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById('contenido').innerHTML = html;
            const aside = document.querySelector('.aside');
            if (showAside) {
                aside.classList.add('visible');
                document.querySelector('.container').classList.add('aside-visible');
            } else {
                aside.classList.remove('visible');
                document.querySelector('.container').classList.remove('aside-visible');
            }
        })
        .catch(error => console.log('Error loading page:', error));
};

document.addEventListener('DOMContentLoaded', () => {
    createListItems(sitiosTuristicos, 'sitiosTuristicosList');
    createListItems(sitiosInteres, 'sitiosInteresList');
});
