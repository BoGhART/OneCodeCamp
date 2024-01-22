// var obj = {

//     name:"Harold",
//     age: 24,
//     hello: function(){
//         console.log("Hello");
//     },
//     location: "Caloocan", 
//     update_location: function(new_location){
//         this.location = new_location;
//         console.log("Location updated from: "+location+" to: "+new_location);    
//     }   
// };

// obj.update_location("Solano");
// obj.update_location();

// // obj.hello();

// // obj.celebrate_bay = function(){
// //     this.age ++;
// //     console.log(this.name + " is now " +this.age+ " yrs old")
// // }

// // obj.celebrate_bay();

// //get elem by ID
// var headingElement = document.getElementById("heading");
// console.log("Element by ID: ", headingElement);

// //get elem by class
// var textElement = document.getElementById("text");
// console.log("Elements by class name: ", textElement);

// //get elem by tag name
// var listItems = document.getElementById("li");
// console.log("Elements by tag name:". listItems);

// //query selector
// var containerElement = document.querySelector("#container");
// console.log("Query selector: ", containerElement);

// //parent code
// var listParent = document.getElementById("list").parentNode;
// console.log("Parent node: ", listParent);

// //child node
// var containerChildren = document.getElementById("container").children;
// console.log("Children: ", containerChildren);

// //previous sibling
// var firstListItem = document.querySelector("li");
// var previoussibling = firstListItem.previousSibling;
// console.log("Previous sibling: ", previoussibling);

// //next Sibling
// var nextSibling = firstListItem.nextSibling;
// console.log("Next Sibling: ", nextSibling);

// //Mod inner html
// headingElement.innerHTML ="Updatedcontext";
// console.log("Modified inner html: ", headingElement.innerHTML);

// //Modifying text content
// var textElements = document.getElementsByClassName("text")[0];
// textElements.textContent = "New Text";

// //Setting attribute
// var imageElement = document.createElement("img");
// imageElement.setAttribute("src", "image.jpg");
// console.log("Image Element with src attribute: ", imageElement);

// //Modifying styles:
// var btnElement = document.getElementById("btn");
// btnElement.style.backgroundColor = "blue";
// console.log("Modified style: ", btnElement.style);

// //creating and appending elements
// var newParagraph = document.createElement("p");
// newParagraph.textContent = "This is a new paragraph";
// document.getElementById("container").appendChild(newParagraph);

const button = document.getElementById("btn");
button.addEventListener("click", handleClick);

function handleClick(event){
    console.log("Button is clicked");
}