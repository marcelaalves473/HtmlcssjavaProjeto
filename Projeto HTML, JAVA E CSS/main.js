
 buton class="btn btn-1"></buton>
<buton class="btn btn-2"></buton>
<buton class="btn btn-3"></buton>
<buton class="btn btn-4"></buton>
<buton class="btn btn-5"></buton>
<buton class="btn btn-6"></buton>
<buton class="btn btn-7"></buton>
<buton class="btn btn-8"></buton>

let btns = 
        document.getElementsByClassName("b") 
for(let i = 0; i<btns.length;i++) {
btns[i].addEventListener("click"function() { 
let buttonstyle = getComputedStyle(this);
let butttonBgcolor =
             buttonstyle["backgroundColor"]
Document.body.style.backgroundColor
                        = butttonBgcolor;
});}                        