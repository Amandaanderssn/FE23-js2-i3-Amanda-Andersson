function t(t,e,o){let n=document.createElement(e);return"div"!=e&&"img"!=e?n.innerText=o:void 0!==n.src&&(n.src=o),n.innerText=o,t.append(n),n}const e=document.querySelector("#productSection");document.querySelector("#top-text");const o={method:"GET",headers:{"Content-type":"application/json; charset=UTF-8"}};function n(){let n=document.querySelector("#textInput").value;fetch(`https://dummyjson.com/products/search?q=${n}`,o).then(t=>{if(t.ok)return t.json();throw Error("HTTP error")}).then(o=>{e&&function(e){let o=document.querySelector("#productSection");for(let n of(o.innerHTML=" ",e)){let e=document.createElement("div");e.classList.add("eachProductCard"),o.append(e),t(e,"img",n.images[0]),t(e,"h2",n.title),t(e,"p","rated: "+n.rating.toString()),n.stock<10?t(e,"p",n.stock.toString()+" in stock. ONLY A FEW LEFT!!!"):t(e,"p",n.stock.toString()+" in stock"),t(e,"p","Category: "+n.category),t(e,"p",n.description).classList.add("descriptionText");let r=document.createElement("div");r.classList.add("addToCartButtonDiv"),e.append(r),t(r,"button","Add to cart")}}(o.products)})}const r=document.querySelector("#searchForm");r.addEventListener("submit",t=>{t.preventDefault(),n(),r.reset()}),n();
//# sourceMappingURL=index.681001c7.js.map
