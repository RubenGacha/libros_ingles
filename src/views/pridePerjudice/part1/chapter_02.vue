<template>
<div id="cuerpo">
    <h1>Chapter 2</h1>

    


</div>
  
</template>

<script>
import {iniciando} from "@/assets/js/CommonMain.js"

export default {
    data:()=>({

    }),
    mounted(){
        this.$nextTick(()=>{
            let elem=this.$el.children
            let palabras=[
                {word:"acknowledged",meaning:"admitida|recononocida|aceptada|conocida"},
            ]
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