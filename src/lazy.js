const isIntersecting = (entry) => {
    return entry.isIntersecting //true dentro de la pantalla
};
const loadImage = (entry)=> {
    const container = entry.target; //container (DIV)
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    imagen.src = url;
    //des registrar el node imagen (unlisten) para que deje de observar
    observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (image) => {
 observer.observe(image);
};
