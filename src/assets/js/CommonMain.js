import {meaning} from "@/assets/js/CommonMeaning.js"
import {search} from "@/assets/js/CommonSearch.js"

export function iniciando(palabras,elem){
    for(let palabra of palabras){
        search(elem,palabra)
    }

    let eventoPalabras=this.$el.getElementsByClassName("significado")

    for(let word of eventoPalabras){
        meaning(word)
    }

    return elem
}