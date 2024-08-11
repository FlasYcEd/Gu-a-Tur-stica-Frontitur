const sitiosTuristicos = [
    { name: 'Cerro Plateado', link: 'subpaginas/cerro.html' },
    { name: 'Chorro De San Pedro', link: 'subpaginas/chorrosanpedro.html' },
    { name: 'Ruta De La Panela', link: 'subpaginas/rutapanela.html' },
    { name: 'Ruta De La Madre Laura', link: 'subpaginas/rutamadrelaura.html' },
    { name: 'Parque De Las Orquídeas', link: 'subpaginas/parqueorquideas.html' },
    { name: 'Murrí', link: 'subpaginas/murri.html' },
    { name: 'Páramo De Frontino', link: 'subpaginas/paramofrontino.html' },
];

const sitiosInteres = [
    { name: 'Trucheras Nore', link: 'subpaginas/trucherasnore.html' },
    { name: 'Villa Nore', link: 'subpaginas/villanore.html' },
    { name: 'Trucheras Cabras', link: 'subpaginas/trucherascabras.html' },
    { name: 'Bufalera Murrí', link: 'subpaginas/Bufaleramurri.html' },
    { name: 'Zona Urbana', link: 'subpaginas/zonaurbana.html' },
];

const createListItems = (list, containerId) => {
    const container = document.getElementById(containerId);
    list.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('dropdown-item');
        const link = document.createElement('a');
        link.href = "#";
        link.textContent = item.name;
        link.onclick = () => loadPage(item.link);
        listItem.appendChild(link);
        container.appendChild(listItem);
    });
};

const loadPage = (url) => {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById('contenido').innerHTML = html;
        })
        .catch(error => console.log('Error loading page:', error));
};

document.addEventListener('DOMContentLoaded', () => {
    createListItems(sitiosTuristicos, 'sitiosTuristicosList');
    createListItems(sitiosInteres, 'sitiosInteresList');
});
