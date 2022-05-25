<template>
<div id="cuerpo">
    <h1>Chapter 1</h1>

    <p>It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.</p>

    <p>"My dear Mr. Bennet," said his lady to him one day. "have you heard that Netherfield Park is let at last?"</p>

    <p>Mr. Bennet replied that he had not.</p>

    <p>"But it is," returned she; "for Mrs. Long has just been here, and she told me all about it.</p>

    <p>Mr. Bennet made no answer.</p>

    <p>"Do not you want to know who has taken it?" cried his wife, impatiently</p>

    <p>"you want to tell me, and I have no objection to hearing it.</p>

    <p>This was invitation enough.</p>

    <p>"Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on monday in a chaise and four to see the place, and was so much delighted with it that he agreed with Mr. Morris immediately; that he is to take possession before Michaelmas, and some of his servants are to be in the house by the end of next week.</p>

    <p>"What is his name?"</p>

    <p>"Bingley"</p>

    <p>"Is he married or single?"</p>

    <p>"Oh, single, my dear, to be sure! A sigle man of large fortune; four or five thousand a year. What a fine thing for our girls!"</p>

    <p>"How so? how can it affect them?"</p>

    <p>"My dear Mr. Bennet," replied his wife, "how can you be so tiresome?" you must know that I am thinking of his marrying one of them"</p>

    <p>"Is that his design in settling here?"</p>

    <p>"Design! nonsense, how can you talk so! But it is very likely that he may fall in love with one of them, and therefore you must visit him as soon as he comes."</p>

    <p>"I see no occasion for that. You and the girls may go, or you may send them by themselves, which perhaps will be still better, for as you are as handsome as any of them, Mr. Bingley might like you the best of the party."</p>

    <p>"My dear, you flatter me. I certainly have my share of beauty, but I do not pretend to be any thing extraordinary now. When a woman has five grown up daughters, she ought to give over thinking of her own beauty."</p>

    <p>"In such cases, a woman has not often much beauty to think of."</p>

    <p>"But my dear, you must indeed go and see Mr. Bingley when he comes into neighbourhood."</p>

    <p>"It is more than I engage for, I assure you."</p>

    <p>"But consider you daughters. Only think what an establishment it would be for one of them. Sir William and Lady Lucas are determined to go, merely on that account; for in general, you know, they visit no new comers. Indeed you must go, for it will be impossible for us to visit him, if you do not."</p>

    <p>"You are over scrupulous, surely. I dare say Mr. Bingley will be very glad to see you and I will send a few lineas by you to assure him of my hearty consent to his marrying whichever he chooses of the girls; though I must throw in a good word for my little Lizzy."</p>

    <p>"I desire you will do no such thing. Lizzy is not a bit better than the others; and I am sure she is not half so handsome as Jane, nor half so good-humoured as Lidia. But you are always giving her the preference."</p>

    <p>"They have none of them much to recommend them" replied he: "they are all silly and ignorant like other girls; but Lizzy has something more of quickness than her sisters."</p>

    <p>"Mr. Bennet, How can you abuse your own children in such a way? you take delight in vexing me. you have no compassion on my poor nerves."</p>

    <p>"you mistake me, my dear. I have a high respect for your nerves. They are my old frinds. I have heard you mention them with consideration these twenty years at least"</p>

    <p>"Ah, you do not know what I suffer."</p>

    <p>"But I hope you will get over it, and live to see many young men of four thousand a year come into the neighbourhood."</p>

    <p>"It will be no use to us, if twenty such should come, since you will not visit them."</p>

    <p>"Depend upon it, my dear, that when there are twenty, I will visit them all."</p>

    <p>Mr. Bennet was so odd a mixture of quick parts, sarcastic humour, reserve, and caprice, that the experience of three-and-twenty years had been insufficient to make his wife understand his character. Her mind was less difficult to develop. She was a woman of mean understanding. little information, and uncertain temper. When she was discontented, she fancied herself nervous. The business of her life was to get her daughters married; its solace was visiting and news.</p>


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
                {word:"must",meaning:"debe"},
                {word:"however",meaning:"sin embargo"},
                {word:"known",meaning:"conocido"},
                {word:"feelings",meaning:"sentimientos"},
                {word:"views of such",meaning:"puntos de vista que"},
                {word:"neighbourhood",meaning:"vecindario"},
                {word:"fixed",meaning:"fijada"},
                {word:"surrounding",meaning:"alrededores"},
                {word:"rightful",meaning:"legitimamente"},
                {word:"dear",meaning:"estimada|estimado|querida|querido"},
                {word:"lady",meaning:"dama|señora"},
                {word:"let at last",meaning:"alquila por fin"},
                {word:"replied",meaning:"respondio|replico"},
                {word:"returned",meaning:"respondio|replico"},
                {word:"cried",meaning:"gritando|llorando"},
                {word:"enough",meaning:"Suficiente"},
                {word:"came down",meaning:"bajo"},
                {word:"chaise and four",meaning:"carruaje de cuatro caballos"},
                {word:"so much delighted",meaning:"tan encantado|tan encantada"},
                {word:"agreed",meaning:"acordo|acordado"},
                {word:"michaelmas",meaning:"Día de San Miguel Arcángel"},
                {word:"sure",meaning:"por supuesto|seguro"},
                {word:"thousand",meaning:"mil"},
                {word:"how so",meaning:"¿como es eso?"},
                {word:"tiresome",meaning:"aburrido|cansado|pesado"},
                {word:"marrying",meaning:"casamiento"},
                {word:"design",meaning:"plan|proyecto|diseño"},
                {word:"settling",meaning:"establecimiento"},
                {word:"nonsense",meaning:"disparates"},
                {word:"likely",meaning:"posible|probable|apropiado"},
                {word:"fall in love",meaning:"enamorarse"},
                {word:"therefore",meaning:"por lo tanto"},
                {word:"soon",meaning:"pronto"},
                {word:"which perhaps",meaning:"que tal vez"},
                {word:"still",meaning:"todavia|aun"},
                {word:"for as",meaning:"porque como"},
                {word:"handsome",meaning:"guapa"},
                {word:"might like you",meaning:"le podria gustar"},
                {word:"flatter",meaning:"halagar|adular"},
                {word:"share",meaning:"Cuota"},
                {word:"grown up",meaning:"adultas|crecidas"},
                {word:"ought to give over",meaning:"deberia dejar de"},
                {word:"such",meaning:"tal"},
                {word:"often",meaning:"suele"},
                {word:"to think of",meaning:"en que pensar"},
                {word:"indeed",meaning:"por supuesto|de hecho"},
                {word:"than I engage for",meaning:"de lo que yo me comprometo"},
                {word:"would be",meaning:"seria"},
                {word:"merely",meaning:"simplemente"},
                {word:"new comers",meaning:"recien llegados"},
                {word:"over scrupulous",meaning:"demasiado escrupuloso"},
                {word:"surely",meaning:"seguramente"},
                {word:"for it will be impossible for us to visit him",meaning:"porque nos sera imposible visitarlo"},
                {word:"dare",meaning:"atrevo|atrevimiento"},
                {word:"will be very glad",meaning:"estara muy contento"},
                {word:"by you to assure him",meaning:"para asegurarle"},
                {word:"hearty",meaning:"sincero"},
                {word:"whichever",meaning:"cualquiera"},
                {word:"though",meaning:"aunque"},
                {word:"throw",meaning:"tirar|lanzar|hacer"},
                {word:"desire",meaning:"deseo"},
                {word:"none",meaning:"ninguno"},
                {word:"silly",meaning:"tontas"},
                {word:"quickness",meaning:"viveza|agudeza|agilidad"},
                {word:"abuse",meaning:"insultar|ofender"},
                {word:"way",meaning:"manera|forma"},
                {word:"delight",meaning:"placer|encanta|deleita"},
                {word:"vexing",meaning:"irritante|impacientar|afligir"},
                {word:"mistake",meaning:"confundir|error|mal interpretar"},
                {word:"at least",meaning:"al menos"},
                {word:"you will get over it",meaning:"que lo superes"},
                {word:"it will be no use to us",meaning:"de nada nos servira"},
                {word:"since",meaning:"ya que"},
                {word:"depend upon it",meaning:"depende de ello"},
                {word:"so odd",meaning:"tan extraña"},
                {word:"mixture",meaning:"mezcla"},
                {word:"mean",meaning:"medio"},
                {word:"uncertain",meaning:"incierto"},
                {word:"discontented",meaning:"descontenta"},
                {word:"fancied",meaning:"imaginaba"},
                {word:"to get",meaning:"llegar"},
                {word:"solace",meaning:"consuelo"},

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