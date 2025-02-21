

let toggles = document.getElementsByClassName("toggle");
let contentDiv = document.getElementsByClassName("content");
let icons = document.getElementsByClassName("icon");

console.log(toggles, contentDiv, icons); // Debugging: Check the number of elements

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    // Toggle the current content
    if (contentDiv[i].style.height === "0px" || !contentDiv[i].style.height) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
    //   toggles[i].style.color = "#0084e9";
      if (icons[i]) {
        icons[i].src = "./icon-minus.svg"; // Set to minus icon when expanded
      }
    } else {
      contentDiv[i].style.height = "0px";
    //   toggles[i].style.color = "#111130";
      if (icons[i]) {
        icons[i].src = "./icon-plus.svg"; // Set to plus icon when collapsed
      }
    }

    // Close other content sections
    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = "0px";
        // toggles[j].style.color = "#111130";
        if (icons[j]) {
          icons[j].src = "./icon-plus.svg"; // Set to plus icon for other toggles
        }
      }
    }
  });
}
