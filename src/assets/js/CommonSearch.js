export function search(elem,palabra){

    console.log("*********************************llamado***************************")
    console.log(palabra)

    let exp1="";
    let ignoreTags =['SCRIPT','BUTTON','INPUT'];

    if(palabra.word.includes(" ")){
        let dividida=palabra.word.split(" ").reduce((exp1,word)=>{
            if(word.includes("'")){
                let apostrofe=word.split("'").reduce((exp,p)=>{
                    return exp+'(<span class="significado" valor="[a-z |]*">)?[ \']?'+p+'[ \']?(<\/span>)?'
                },"")
                return exp1+apostrofe
            }else{
                return exp1+'(<span class="significado" valor="[a-z |]*">)?[ ]?'+word+'[ ]?(<\/span>)?'
            }
            
        },"(")
        dividida+=")"
        exp1=new RegExp(dividida,'ig')
    }else{
        exp1=new RegExp("(\\b"+palabra.word+"\\b)",'ig')
    }

    for(var i=0; i< elem.length;i++){
        if(ignoreTags.indexOf(elem[i].nodeName)<0){
            let coincValues=elem[i].innerHTML.match(exp1)
            if(coincValues!=null){
                let content=elem[i].innerHTML
                let exp2=new RegExp("(( )?\\b"+palabra.word+"\\b( )?)",'ig')
                console.log(exp2)
                console.log(elem[i].textContent)
                let devolver=elem[i].textContent.match(exp2)
                let returnValueFormat

                if (devolver!=null){
                    returnValueFormat = content.replace(exp1, '<span class="significado" valor="'+palabra.meaning+'">'+devolver[0]+'</span>');
                }else{
                    returnValueFormat = content.replace(exp1, '<span class="significado" valor="'+palabra.meaning+'"> '+palabra.word+'</span>');
                }

                // console.log(devolver)
                // console.log(content)
                // console.log(returnValueFormat)
                // console.log(exp1)
                elem[i].innerHTML=returnValueFormat
            }
            
        }
    }
}