let i = 0;
let placeholder = "";
const txt = "Enter more keywords to improve search accuracy";
const txt2 = "cccc";
const speed = 300;
function type() {
    const element = document.getElementById("search-box-2");
    const content = element.getAttribute("placeholder");
    
    if((content == txt)){
        setTimeout(function() {
                i = 0;
                placeholder = "";
                const txt = "Enter more keywords to improve search accuracy";
                const speed = 300;
            }, 2000);
    }
    //else{
    //     console.log("rrrrr");
    // }
    // if (content === null || content === "") {
        if (i < txt.length) {
            placeholder += txt.charAt(i);
            document.getElementById("search-box-2").setAttribute("placeholder", placeholder);
            i++;
            setTimeout(type, speed);
        } else {
            setTimeout(function() {
                document.getElementById("search-box-2").setAttribute("placeholder", "");
                setTimeout(type, speed);
            }, 1000);
        }
    // }
}

// Panggil fungsi type
type();