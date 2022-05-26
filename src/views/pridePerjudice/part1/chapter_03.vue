<template>
<div id="cuerpo">
    <h1>Chapter 3</h1>

    

</div>
  
</template>

<script>
import {iniciando} from "@/assets/js/CommonMain.js"

export default {
    data:()=>({

    }),
    mounted(){
        this.$nextTick(()=>{
            const elem=this.$el.children
            const palabras=[
                {word:"among",meaning:"entre"},
                
            ]

            palabras.sort((a,b)=>{
                if (a.word < b.word) return -1
                else if (a.word > b.word) return 1
                else return 0
            })
            this.iniciando(palabras,elem)
        })

    },
    methods:{
        iniciando,
    }
}
</script>

<style>

</style>