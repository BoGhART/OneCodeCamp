//upon click
document.addEventListener("click", function (event) {
    //get x & y coordinates of click spot
    const { clientX: a, clientY: b } = event;
    //get random size from 10-200px
    const radius = Math.floor(Math.random() * 191) + 10;

    //circle element
    const circle = document.createElement("container");

    //circle
    circle.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background-color: #CCE8CC;
        width: ${radius * 2}px;
        height: ${radius * 2}px;
        left: ${a - radius}px;
        top: ${b - radius}px;
    `;
    //display circle
    document.body.appendChild(circle);
});
