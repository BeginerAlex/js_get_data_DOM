var t=document.querySelectorAll(".population"),e=0;t.forEach(function(t){var o=parseFloat(t.textContent.trim().replace(/,/g,""));isNaN(o)||(e+=o)});var o=e/t.length,n=document.querySelector(".total-population"),a=document.querySelector(".average-population");n.textContent=e.toLocaleString(),a.textContent=o.toLocaleString();
//# sourceMappingURL=index.cde3e906.js.map
