<<<<<<< HEAD
function showSection(sectionId) { 
    // Hide all sections first
    let allSections = document.querySelectorAll(".members");
    allSections.forEach(section => {
        section.classList.remove("show");
    });

    // Show only the selected section
    document.getElementById(sectionId).classList.add("show");
}


document.addEventListener("DOMContentLoaded", function () {
    let members = document.querySelectorAll(".rotation-container");

    members.forEach((member) => {
        // Ensure back image is visible on refresh
        member.classList.remove("rotate-180");
        member.dataset.rotated = "false"; // Track rotation state

        member.addEventListener("click", function () {
            if (member.dataset.rotated === "false") {
                // First click: Rotate 180 degrees
                member.classList.add("rotate-180");
                member.dataset.rotated = "true"; // Mark as rotated
            } else {
                // Second click: Redirect to LinkedIn
                let frontLink = member.querySelector("a");
                if (frontLink) {
                    window.open(frontLink.href, "_blank"); // Open LinkedIn in new tab
                }
            }
        });
    });
});




// function showcp() {
//     document.getElementById("mcp").classList.add("show");
// }

// function showwa() {
//     document.getElementById("mwa").classList.add("show");
// }

// function showuiux() {
//     document.getElementById("muiux").classList.add("show");
// }

// function showpg() {
//     document.getElementById("mpg").classList.add("show");
// }

// function showct() {
//     document.getElementById("mct").classList.add("show");
// }

// function showdv() {
//     document.getElementById("mdv").classList.add("show");
// }

// function showpr() {
//     document.getElementById("mpr").classList.add("show");
// }


// // document.addEventListener("DOMContentLoaded", function () {
// //     let cpButton = document.querySelector(".cp");
// //     let membersSection = document.getElementById("mcp"); // Select by ID

// //     cpButton.addEventListener("click", function () {
// //         membersSection.classList.toggle("show"); // Toggle class to show/hide members
// //     });
// // });


// // document.addEventListener("DOMContentLoaded", function () {
// //     let cpButton = document.querySelector(".webarces");
// //     let membersSection = document.getElementById("mwa"); // Select by ID

// //     cpButton.addEventListener("click", function () {
// //         membersSection.classList.toggle("show"); // Toggle class to show/hide members
// //     });
// // });



// // document.addEventListener("DOMContentLoaded", function () {
// //     let cpButton = document.querySelector(".uiux");
// //     let membersSection = document.getElementById("muiux"); // Select by ID

// //     cpButton.addEventListener("click", function () {
// //         membersSection.classList.toggle("show"); // Toggle class to show/hide members
// //     });
// // });



// // document.addEventListener("DOMContentLoaded", function () {
// //     let cpButton = document.querySelector(".photography");
// //     let membersSection = document.getElementById("mpg"); // Select by ID

// //     cpButton.addEventListener("click", function () {
// //         membersSection.classList.toggle("show"); // Toggle class to show/hide members
// //     });
// // });



// // document.addEventListener("DOMContentLoaded", function () {
// //     let cpButton = document.querySelector(".content");
// //     let membersSection = document.getElementById("mct"); // Select by ID

// //     cpButton.addEventListener("click", function () {
// //         membersSection.classList.toggle("show"); // Toggle class to show/hide members
// //     });
// // });



// // document.addEventListener("DOMContentLoaded", function () {
// //     let cpButton = document.querySelector(".dataverse");
// //     let membersSection = document.getElementById("mdv"); // Select by ID

// //     cpButton.addEventListener("click", function () {
// //         membersSection.classList.toggle("show"); // Toggle class to show/hide members
// //     });
// // });



// // document.addEventListener("DOMContentLoaded", function () {
// //     let cpButton = document.querySelector(".pr");
// //     let membersSection = document.getElementById("mpr"); // Select by ID

// //     cpButton.addEventListener("click", function () {
// //         membersSection.classList.toggle("show"); // Toggle class to show/hide members
// //     });
=======
function showSection(sectionId) { 
    // Hide all sections first
    let allSections = document.querySelectorAll(".members");
    allSections.forEach(section => {
        section.classList.remove("show");
    });

    // Show only the selected section
    document.getElementById(sectionId).classList.add("show");
}


document.addEventListener("DOMContentLoaded", function () {
    let members = document.querySelectorAll(".rotation-container");

    members.forEach((member) => {
        // Ensure back image is visible on refresh
        member.classList.remove("rotate-180");
        member.dataset.rotated = "false"; // Track rotation state

        member.addEventListener("click", function () {
            if (member.dataset.rotated === "false") {
                // First click: Rotate 180 degrees
                member.classList.add("rotate-180");
                member.dataset.rotated = "true"; // Mark as rotated
            } else {
                // Second click: Redirect to LinkedIn
                let frontLink = member.querySelector("a");
                if (frontLink) {
                    window.open(frontLink.href, "_blank"); // Open LinkedIn in new tab
                }
            }
        });
    });
});




// function showcp() {
//     document.getElementById("mcp").classList.add("show");
// }

// function showwa() {
//     document.getElementById("mwa").classList.add("show");
// }

// function showuiux() {
//     document.getElementById("muiux").classList.add("show");
// }

// function showpg() {
//     document.getElementById("mpg").classList.add("show");
// }

// function showct() {
//     document.getElementById("mct").classList.add("show");
// }

// function showdv() {
//     document.getElementById("mdv").classList.add("show");
// }

// function showpr() {
//     document.getElementById("mpr").classList.add("show");
// }


// // document.addEventListener("DOMContentLoaded", function () {
// //     let cpButton = document.querySelector(".cp");
// //     let membersSection = document.getElementById("mcp"); // Select by ID

// //     cpButton.addEventListener("click", function () {
// //         membersSection.classList.toggle("show"); // Toggle class to show/hide members
// //     });
// // });


// // document.addEventListener("DOMContentLoaded", function () {
// //     let cpButton = document.querySelector(".webarces");
// //     let membersSection = document.getElementById("mwa"); // Select by ID

// //     cpButton.addEventListener("click", function () {
// //         membersSection.classList.toggle("show"); // Toggle class to show/hide members
// //     });
// // });



// // document.addEventListener("DOMContentLoaded", function () {
// //     let cpButton = document.querySelector(".uiux");
// //     let membersSection = document.getElementById("muiux"); // Select by ID

// //     cpButton.addEventListener("click", function () {
// //         membersSection.classList.toggle("show"); // Toggle class to show/hide members
// //     });
// // });



// // document.addEventListener("DOMContentLoaded", function () {
// //     let cpButton = document.querySelector(".photography");
// //     let membersSection = document.getElementById("mpg"); // Select by ID

// //     cpButton.addEventListener("click", function () {
// //         membersSection.classList.toggle("show"); // Toggle class to show/hide members
// //     });
// // });



// // document.addEventListener("DOMContentLoaded", function () {
// //     let cpButton = document.querySelector(".content");
// //     let membersSection = document.getElementById("mct"); // Select by ID

// //     cpButton.addEventListener("click", function () {
// //         membersSection.classList.toggle("show"); // Toggle class to show/hide members
// //     });
// // });



// // document.addEventListener("DOMContentLoaded", function () {
// //     let cpButton = document.querySelector(".dataverse");
// //     let membersSection = document.getElementById("mdv"); // Select by ID

// //     cpButton.addEventListener("click", function () {
// //         membersSection.classList.toggle("show"); // Toggle class to show/hide members
// //     });
// // });



// // document.addEventListener("DOMContentLoaded", function () {
// //     let cpButton = document.querySelector(".pr");
// //     let membersSection = document.getElementById("mpr"); // Select by ID

// //     cpButton.addEventListener("click", function () {
// //         membersSection.classList.toggle("show"); // Toggle class to show/hide members
// //     });
>>>>>>> 8fbb9e4 (Made some changes)
// // });