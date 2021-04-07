const baseUrl = "https://randomfox.ca/images/";
const min=1;
const max=122;


const mountNode = document.querySelector("#images");

const random = () => Math.floor(Math.random() * (max - min)) + min

const createImageNode = () => {
    const imgContainer = document.createElement("div");
    imgContainer.className = "p-4";
    const image = document.createElement("img");
    image.className = "mx-auto";
    image.width = "320";
    image.src = `${baseUrl}/${random()}.jpg`;
    imgContainer.appendChild(image);
    return imgContainer ;
}
const imgContainer = createImageNode();


// mountNode.appendChild(imgContainer);

mountNode.append(
    imgContainer,
    createImageNode(),
    createImageNode(),
    createImageNode(),
    createImageNode()
)
