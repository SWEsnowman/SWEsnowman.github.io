const header = document.querySelector(".intro");
const intro = `
<h1>Olof Persson</h1>
<p>I am a student at the Stevens Institute of Technology studying Computer Science</p>

`
header.innerHTML = intro;
header.querySelector("h1").style.textAlign = "center";
header.querySelector("p").style.textAlign = "center";

