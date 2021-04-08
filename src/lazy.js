const isIntersecting = (entry) => {
    return entry.isIntersecting //true dentro de la pantalla
};
const accion = (entry)=> {
    const node = entry.target;
    console.log("Holis");

    //des registrar el node imagen (unlisten) para que deje de observar
    observer.unobserve(node);
};

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(accion);
});

export const registerImage = (image) => {
 observer.observe(image);
};
