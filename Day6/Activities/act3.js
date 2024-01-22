document.addEventListener("click", function(event) {
    // let currentColor = "#CCE8CC";
    //button func
    const buttonColors = {
        pink: "#FFC0CB",
        purple: "#800080",
        blue: "#0000FF",
        green: "#008000",
        red: "#FF0000",
        rylblu: "#4169e1",
        greenish: "#CCE8CC",
    };
    //OG code w/ circle shrink
    function createCircle(event, color) {
        const { clientX: a, clientY: b } = event;
        const radius = Math.floor(Math.random() * 191) + 10;

        const circle = document.createElement("div");
        circle.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: ${color};
            width: ${radius * 2}px;
            height: ${radius * 2}px;
            left: ${a - radius}px;
            top: ${b - radius}px;
            transition: transform 2s, opacity 2s;
        `;

        document.body.appendChild(circle);

        //circle shrink
        function shrinkCircle() {
            const newSize = parseInt(circle.style.width, 10) - 1;//speed of shrink

            if (newSize > 0) {
                const newRadius = newSize / 2;
                circle.style.width = circle.style.height = `${newSize}px`;
                circle.style.left = `${a - newRadius}px`;
                circle.style.top = `${b - newRadius}px`;
                requestAnimationFrame(shrinkCircle);
            } else {
                document.body.removeChild(circle);
            }
        }

        requestAnimationFrame(shrinkCircle);
    }
    //fetch color
    document.querySelectorAll('.button').forEach(function(button) {
        button.addEventListener('click', function(event) {
            currentColor = buttonColors[button.id];
        });
    });
    //reset(remove circle/color)
    const resetbtn = document.getElementById("resetbtn");
    if (resetbtn) {
        resetbtn.addEventListener('click', function(event) {
            currentColor = buttonColors.reset;
        });
    }
    //trigger
    document.addEventListener('click', function(event) {
        createCircle(event, currentColor);
    });
});



    
    
// //upon click
// document.addEventListener("click", function (event) {
    //         //get x & y coordinates of click spot
    //         const { clientX: a, clientY: b } = event;

    //         //get random size from 10-200px
    //         const radius = Math.floor(Math.random() * 191) + 10;

    //         //circle element
    //         const circle = document.createElement("container");

    //         //circle
    //         circle.style.cssText = `
    //             position: absolute;
    //             border-radius: 50%;
    //             background-color: #CCE8CC;
    //             width: ${radius * 2}px;
    //             height: ${radius * 2}px;
    //             left: ${a - radius}px;
    //             top: ${b - radius}px;
    //         `;
    //         //display circle
    //         document.body.appendChild(circle);

    //         // Shrink and fade out the circle
    //         function shrinkCircle() {
    //             const newSize = parseInt(circle.style.width, 10) - 4;
                
    //             if (newSize > 0) {
    //                 const newRadius = newSize / 2;
    //                 circle.style.width = circle.style.height = `${newSize}px`;
    //                 circle.style.left = `${a - newRadius}px`;
    //                 circle.style.top = `${b - newRadius}px`;
    //                 requestAnimationFrame(shrinkCircle);
    //             } else {
    //                 document.body.removeChild(circle);
    //             }
    //         }
                
    //         requestAnimationFrame(shrinkCircle);
// }); 

