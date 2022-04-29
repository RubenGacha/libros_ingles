export function meaning(element){
            let valores=element.getAttribute("valor").split("|")
            let ol=document.createElement("ol")
            ol.setAttribute("class","menuValores")
            ol.classList.add("ocultar")
            valores.forEach(valor=>{
                let li=document.createElement("li")
                li.textContent=valor
                ol.appendChild(li)
            })
            element.appendChild(ol)

            element.addEventListener('mouseover',(e)=>{
                    let lista=e.target.lastElementChild
                    if(e.target.nodeName=='SPAN'){lista.classList.remove("ocultar")}
            })

            element.addEventListener('mouseout',(e)=>{
                let lista=e.target.lastElementChild
                if(e.target.nodeName=='SPAN'){lista.classList.add("ocultar")}
            })
        }