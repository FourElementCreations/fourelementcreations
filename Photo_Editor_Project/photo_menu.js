import { tuts } from './tutorials.js'

const tutsMenu = tuts.forEach(tutorial => {
   const link = document.createElement("a");
   link.href = tutorial.url;
   link.textContent = tutorial.title;
   linksContainer.appendChild(link);
 });


const menuContent = `<a href="../../../index.html">
<div class="logo">
   <img src="../../../img/4EC_logo32.png"/>
<h1>Michael Osterhus</h1>
</div>
</a>

<div id="wrapper"> 
<div class="wrap">

   <a href="../index.html"><h3>PHOTO EDITOR PROJECTS</h3></a>
 ${tutsMenu}      

</div>

</div>`

const bodyElement = document.querySelector('body');
bodyElement.insertAdjacentHTML('afterbegin', menuContent);