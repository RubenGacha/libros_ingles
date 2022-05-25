<template>
<div id="cuerpo">
    <h1>Chapter 2</h1>

    <p>Mr. Bennet was among the earliest of those who waited on Mr. Bingley. He had always intended to visit him, though to the last always assuring his wife that he should not go; and till the evening after the visit was paid she had no knowledge of it. it was then disclosed in the following manner. Observing his second daughter employed in trimming a hat, he suddenly addressed her with,--</p>

    <p>"I hope Mr.bingley will like it, Lizzy."</p>

    <p>"We are not in a way to know what Mr. Bingley likes," said her mother, resentfully, "since we are not to visit."</p>

    <p>"But you forget, mamma," said Elizabeth, "that we shall meet him at the assemblies, and that Mrs.Long has promised to introduce him"</p>
    
    <p>"I do not believe Mrs. Lond will do any such thing. she has two nieces of her own. she is a selfish, hypocritical woman, and I have no opinion of her."</p>

    <p>"No more have I," said Mr Bennet; " and I am glad to find that you do not depend on her serving you."</p>

    <p>Mrs. Bennet deigned not to make any reply; but, unable to contain herself, began scolding one of her daughters.</p>

    <p>"Don't keep coughing so, Kitty, for heaven's sake! Have a little compassion on my nerves. you tear them to pieces."</p>

    <p>"kitty has no discretion in her coughs," said her father; "she times them ill."</p>

    <p>"I do not cough for my own amusement," replied Kitty, fretfully. "When is your next ball to be, Lizzy?" "To-Morrow fortnight."</p>

    <p>"Ay, so it is," cried her mother, "and Mrs. Long does not come back till the day before; so, it will be impossible for her to introduce him, for she will not know him herself"</p>

    <p>"Then, my dear, you may have the advantage of your friend, and introduce Mr. Bingley to her."</p>

    <p>"Impossible, Mr. Bennet, impossible, when I am not acquainted with him myself; how can you be so teasing?"</p>

    <p>"I honour your circumspection. A fortnight's acquaintance is certainly very little. One cannot know what a man really is by the end of a fortnight. But if we do not venture, somebody else will; and after all, Mrs. Long and her nieces must stand their chance; and therefore, as she will think it an act of kindness, if you decline the office, I will take it on myseld."</p>

    <p>The girls stared at their father. Mrs. Bennet said only, "Nonsense, nonsense!"</p>

    <p>"what can be the meaning of that emphatic exclamation?" cried he. "Do you consider the forms of introduction, and the stress that is laid in them, as nonsense? I cannot quite agree with you there. what say you, Mary? for you are a young lady of deep reflection, I know and read great books, and make extracts.</p>

    <p>Mary wished to say something very sensible, but knew not how.</p>

    <p>"while Mary is adjusting her ideas," he continued, "let us return to Mr. Bingley"</p>

    <p>"I am sick of Mr. Bingley," cried his wife</p>

    <p>"I am sorry to hear that; but why did not you tell me so before? if I had known as much this morning, I certainly would not have called on him. It is very unlucky; but as I have actually paid the visit, we cannot escape the acquaintance now."</p>

    <p>the astonishment of the ladies was just what he wished; that of Mrs. Bennet perhaps surpassing the rest; though when the first tumult of joy was over, she began to declare that it was what she had expected all the while.</p>

    <p>"How good it was in you, my dear Mr. Bennet. But I knew I should persuade you at last. I was sure you loved your girls too well to neglect such an acquaintance. Well, how pleased I am! and it is such a good joke, too, that you should have gone this morning, and never said a word about it till now"</p>

    <p>"Now, Kitty, You may cough as much as you choose," said Mr. Bennet; and, as he spoke, he left the room, fatigued with the raptures of his wife.</p>

    <p>"what an excellent father you have, girls," said she, when the door was shut. "I do not know how you will ever make him ammends for his kindness; or me either, for that matter. At our time of life, it is not so pleasant, I can tell you, to be making new acquaintance every day; but for your sakes, we would do any thing. Lydia, my love, though you are the youngest, I dare say Mr. Bingley will dance with you at the next ball."</p>

    <p>"Oh," said Lydia, stoutly, "I am not afraid; for though I am the youngest, I'm the tallest."</p>

    <p>The rest of the evening was spent in conjecturing how soon he would return Mr. Bennet's visit, and determining when they should ask him to dinner.</p>


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
                {word:"earliest",meaning:"primeras|temprano"},
                {word:"those who waited",meaning:"los que esperaron"},
                {word:"intended",meaning:"intencion|destino"},
                {word:"though",meaning:"aunque"},
                {word:"to the last",meaning:"hasta el final"},
                {word:"till",meaning:"hasta"},
                {word:"after",meaning:"despues"},
                {word:"paid",meaning:"hecha|pagada|realizada"},
                {word:"had",meaning:"tuvo"},
                {word:"knowledge",meaning:"conocimiento"},
                {word:"of it",meaning:"de ello"},
                {word:"then",meaning:"entonces"},
                {word:"disclosed",meaning:"revelado"},
                {word:"following",meaning:"siguiente"},
                {word:"manner",meaning:"manera"},
                {word:"employed",meaning:"ocupada|empleada"},
                {word:"trimming",meaning:"recortando"},
                {word:"suddenly",meaning:"repentinamente"},
                {word:"addressed",meaning:"direccion"},
                {word:"will like it",meaning:"le guste"},
                {word:"resentfully",meaning:"resentida"},
                {word:"since",meaning:"ya que|pues"},
                {word:"mamma",meaning:"mamá"},
                {word:"shall meet",meaning:"deberiamos vernos"},
                {word:"believe",meaning:"creer"},
                {word:"any such thing",meaning:"tal cosa"},
                {word:"selfish",meaning:"egoista"},
                {word:"glad",meaning:"contento"},
                {word:"find",meaning:"declarar|encontrar"},
                {word:"deigned",meaning:"digna"},
                {word:"reply",meaning:"respuesta"},
                {word:"unable",meaning:"incapaz"},
                {word:"contain",meaning:"contener"},
                {word:"began",meaning:"empezo"},
                {word:"scolding",meaning:"regañar"},
                {word:"don't keep",meaning:"no sigas"},
                {word:"coughing",meaning:"tosiendo"},
                {word:"for heaven's sake",meaning:"por el amor de Dios"},
                {word:"so",meaning:"asi"},
                {word:"you tear them to pieces",meaning:"los haces pedazos"},
                {word:"in her coughs",meaning:"al toser"},
                {word:"times them ill",meaning:"los cronometra mal"},
                {word:"own",meaning:"propia"},
                {word:"amusement",meaning:"diversion"},
                {word:"fretfully",meaning:"impacientemente"},
                {word:"ball to be",meaning:"baile"},
                {word:"fortnight",meaning:"en quince|quincena"},
                {word:"so it is",meaning:"asi es"},
                {word:"cried",meaning:"exclamo|grito"},
                {word:"come back",meaning:"regresa"},
                {word:"it will be",meaning:"le sera"},
                {word:"herself",meaning:"por ella misma"},
                {word:"her",meaning:"ella|sus"},
                {word:"acquainted",meaning:"familiarizado"},
                {word:"teasing",meaning:"bromista"},
                {word:"honour",meaning:"honro"},
                {word:"circumspection",meaning:"prudencia|circunspeccion"},
                {word:"fortnight's acquaintance",meaning:"un conocido de quince dias"},
                {word:"venture",meaning:"ariesga|aventura"},
                {word:"somebody else will",meaning:"alguien mas lo hara"},
                {word:"stand",meaning:"estar"},
                {word:"therefore",meaning:"por lo tanto"},
                {word:"think",meaning:"pensar"},
                {word:"kindness",meaning:"bondad"},
                {word:"decline",meaning:"rechazas"},
                {word:"cargo",meaning:"office"},
                {word:"take it on",meaning:"asumir"},
                {word:"stared at",meaning:"miraron a"},
                {word:"nonsense",meaning:"tonterias|disparates"},
                {word:"meaning",meaning:"significado"},
                {word:"emphatic",meaning:"enfatica"},
                {word:"stress",meaning:"enfasis"},
                {word:"laid in them",meaning:"puestas en ellas"},
                {word:"quite",meaning:"estar del todo de"},
                {word:"agree",meaning:"acuerdo"},
                {word:"deep",meaning:"profunda"},
                {word:"know",meaning:"conozco"},
                {word:"extracts",meaning:"extratos"},
                {word:"sensible",meaning:"sensato"},
                {word:"knew not",meaning:"no sabia"},
                {word:"adjusting",meaning:"ajustando"},
                {word:"let us return",meaning:"volvamos"},
                {word:"sick",meaning:"harta"},
                {word:"would not have called on him",meaning:"no lo habria visitado"},
                {word:"unlucky",meaning:"desafortunado"},
                {word:"would not have called on him",meaning:"no lo habria visitado"},
                {word:"acquaintance",meaning:"conocerlo"},
                {word:"astonishment",meaning:"asombro"},
                {word:"perhaps",meaning:"quizas"},
                {word:"surpassing",meaning:"superando"},
                {word:"though",meaning:"aunque"},
                {word:"tumult",meaning:"tumulto"},
                {word:"was over",meaning:"paso"},
                {word:"all the while",meaning:"todo el tiempo"},
                {word:"how good",meaning:"que bien"},
                {word:"knew",meaning:"sabia"},
                {word:"should",meaning:"podria"},
                {word:"at last",meaning:"por fin"},
                {word:"neglect",meaning:"descuidar"},
                {word:"how pleased",meaning:"que contenta"},
                {word:"good joke",meaning:"buena broma"},
                {word:"too",meaning:"tambien"},
                {word:"cough",meaning:"toser"},
                {word:"as he spoke",meaning:"mientras hablaba"},
                {word:"left",meaning:"salio"},
                {word:"fatigued",meaning:"fatigado"},
                {word:"raptures",meaning:"extasis"},
                {word:"ammends",meaning:"compensacion"},
                {word:"ever",meaning:"alguna vez"},
                {word:"either",meaning:"tambien"},
                {word:"matter",meaning:"asunto|cosa"},
                {word:"at our time of life",meaning:"en nuestro momento de vida"},
                {word:"pleasent",meaning:"agradeble"},
                {word:"sakes",meaning:"bien"},
                {word:"youngest",meaning:"mas joven"},
                {word:"dare",meaning:"atrevo"},
                {word:"stoutly",meaning:"firmeza"},
                {word:"afraid",meaning:"miedo"},
                {word:"tallest",meaning:"mas alta"},
                {word:"spent",meaning:"paso"},
                {word:"how soon",meaning:"que tan pronto"},
                {word:"ask him to dinner",meaning:"invitarlo a cenar"},
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