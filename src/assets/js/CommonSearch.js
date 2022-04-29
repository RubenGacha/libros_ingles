export function search(elem,palabra){

            let exp1=new RegExp('\\b'+palabra.word+'\\b','ig')
            let ignoreTags =['SCRIPT','BUTTON','INPUT']
            //recorrer las etiquetas del documento
            for(var i=0; i< elem.length;i++){
                if(ignoreTags.indexOf(elem[i].nodeName)<0){
                    let coincValues=elem[i].textContent.match(exp1)
                    if(coincValues!=null){
                        for (var j =0; j < coincValues.length; j++) {
                            var exp2 = new RegExp('('+coincValues[j]+')(?!>)', 'gi');
                            var content=elem[i].innerHTML
                            var returnValueFormat = content.replace(exp2, '<span class="significado" valor="'+palabra.meaning+'">$1</span>');
                            elem[i].innerHTML=returnValueFormat
                        }
                    }
                    
                }
            }
        }