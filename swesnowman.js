//intro section
const header = document.querySelector(".intro");
const intro = `
<h1>Olof Persson</h1>
<p>I am a student at the Stevens Institute of Technology studying Computer Science</p>

`
header.innerHTML = intro;
//styling
const introheader = header.querySelector("h1");
introheader.style.textAlign = "center";
introheader.style.fontSize = "10pc";
const introparagraph = header.querySelector("p");
introparagraph.style.textAlign = "center";
introparagraph.style.fontSize = "4pc";


