"use strict";(self["webpackChunkplantilla"]=self["webpackChunkplantilla"]||[]).push([[443],{6526:function(e,n,o){function a(e){let n=e.getAttribute("valor").split("|"),o=document.createElement("ol");o.setAttribute("class","menuValores"),o.classList.add("ocultar"),n.forEach((e=>{let n=document.createElement("li");n.textContent=e,o.appendChild(n)})),e.appendChild(o),e.addEventListener("mouseover",(e=>{let n=e.target.lastElementChild;"SPAN"==e.target.nodeName&&n.classList.remove("ocultar")})),e.addEventListener("mouseout",(e=>{let n=e.target.lastElementChild;"SPAN"==e.target.nodeName&&n.classList.add("ocultar")}))}function t(e,n){console.log("*********************************llamado***************************"),console.log(n);let o="",a=["SCRIPT","BUTTON","INPUT"];if(n.word.includes(" ")){let e=n.word.split(" ").reduce(((e,n)=>{if(n.includes("'")){let o=n.split("'").reduce(((e,n)=>e+'(<span class="significado" valor="[a-z |]*">)?[ \']?'+n+"[ ']?(</span>)?"),"");return e+o}return e+'(<span class="significado" valor="[a-z |]*">)?[ ]?'+n+"[ ]?(</span>)?"}),"(");e+=")",o=new RegExp(e,"ig")}else o=new RegExp("(\\b"+n.word+"\\b)","ig");for(var t=0;t<e.length;t++)if(a.indexOf(e[t].nodeName)<0){let a=e[t].innerHTML.match(o);if(null!=a){let a=e[t].innerHTML,i=new RegExp("(( )?\\b"+n.word+"\\b( )?)","ig");console.log(i),console.log(e[t].textContent);let r,s=e[t].textContent.match(i);r=null!=s?a.replace(o,'<span class="significado" valor="'+n.meaning+'">'+s[0]+"</span>"):a.replace(o,'<span class="significado" valor="'+n.meaning+'"> '+n.word+"</span>"),e[t].innerHTML=r}}}function i(e,n){for(let a of e)t(n,a);let o=this.$el.getElementsByClassName("significado");for(let t of o)a(t);return n}o.d(n,{k:function(){return i}})},7381:function(e,n,o){o.r(n),o.d(n,{default:function(){return h}});var a=o(6252);const t={class:"about"},i=(0,a._)("h1",null,"This is an about page",-1),r=[i];function s(e,n){return(0,a.wg)(),(0,a.iD)("div",t,r)}var d=o(3744);const u={},m=(0,d.Z)(u,[["render",s]]);var h=m},9058:function(e,n,o){o.r(n),o.d(n,{default:function(){return l}});var a=o(6252);const t={id:"cuerpo"},i=(0,a.uE)("<h1>Chapter 1</h1><p>It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.</p><p>&quot;My dear Mr. Bennet,&quot; said his lady to him one day. &quot;have you heard that Netherfield Park is let at last?&quot;</p><p>Mr. Bennet replied that he had not.</p><p>&quot;But it is,&quot; returned she; &quot;for Mrs. Long has just been here, and she told me all about it.</p><p>Mr. Bennet made no answer.</p><p>&quot;Do not you want to know who has taken it?&quot; cried his wife, impatiently</p><p>&quot;you want to tell me, and I have no objection to hearing it.</p><p>This was invitation enough.</p><p>&quot;Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on monday in a chaise and four to see the place, and was so much delighted with it that he agreed with Mr. Morris immediately; that he is to take possession before Michaelmas, and some of his servants are to be in the house by the end of next week.</p><p>&quot;What is his name?&quot;</p><p>&quot;Bingley&quot;</p><p>&quot;Is he married or single?&quot;</p><p>&quot;Oh, single, my dear, to be sure! A sigle man of large fortune; four or five thousand a year. What a fine thing for our girls!&quot;</p><p>&quot;How so? how can it affect them?&quot;</p><p>&quot;My dear Mr. Bennet,&quot; replied his wife, &quot;how can you be so tiresome?&quot; you must know that I am thinking of his marrying one of them&quot;</p><p>&quot;Is that his design in settling here?&quot;</p><p>&quot;Design! nonsense, how can you talk so! But it is very likely that he may fall in love with one of them, and therefore you must visit him as soon as he comes.&quot;</p><p>&quot;I see no occasion for that. You and the girls may go, or you may send them by themselves, which perhaps will be still better, for as you are as handsome as any of them, Mr. Bingley might like you the best of the party.&quot;</p><p>&quot;My dear, you flatter me. I certainly have my share of beauty, but I do not pretend to be any thing extraordinary now. When a woman has five grown up daughters, she ought to give over thinking of her own beauty.&quot;</p><p>&quot;In such cases, a woman has not often much beauty to think of.&quot;</p><p>&quot;But my dear, you must indeed go and see Mr. Bingley when he comes into neighbourhood.&quot;</p><p>&quot;It is more than I engage for, I assure you.&quot;</p><p>&quot;But consider you daughters. Only think what an establishment it would be for one of them. Sir William and Lady Lucas are determined to go, merely on that account; for in general, you know, they visit no new comers. Indeed you must go, for it will be impossible for us to visit him, if you do not.&quot;</p><p>&quot;You are over scrupulous, surely. I dare say Mr. Bingley will be very glad to see you and I will send a few lineas by you to assure him of my hearty consent to his marrying whichever he chooses of the girls; though I must throw in a good word for my little Lizzy.&quot;</p><p>&quot;I desire you will do no such thing. Lizzy is not a bit better than the others; and I am sure she is not half so handsome as Jane, nor half so good-humoured as Lidia. But you are always giving her the preference.&quot;</p><p>&quot;They have none of them much to recommend them&quot; replied he: &quot;they are all silly and ignorant like other girls; but Lizzy has something more of quickness than her sisters.&quot;</p><p>&quot;Mr. Bennet, How can you abuse your own children in such a way? you take delight in vexing me. you have no compassion on my poor nerves.&quot;</p><p>&quot;you mistake me, my dear. I have a high respect for your nerves. They are my old frinds. I have heard you mention them with consideration these twenty years at least&quot;</p><p>&quot;Ah, you do not know what I suffer.&quot;</p><p>&quot;But I hope you will get over it, and live to see many young men of four thousand a year come into the neighbourhood.&quot;</p><p>&quot;It will be no use to us, if twenty such should come, since you will not visit them.&quot;</p><p>&quot;Depend upon it, my dear, that when there are twenty, I will visit them all.&quot;</p><p>Mr. Bennet was so odd a mixture of quick parts, sarcastic humour, reserve, and caprice, that the experience of three-and-twenty years had been insufficient to make his wife understand his character. Her mind was less difficult to develop. She was a woman of mean understanding. little information, and uncertain temper. When she was discontented, she fancied herself nervous. The business of her life was to get her daughters married; its solace was visiting and news.</p>",34),r=[i];function s(e,n,o,i,s,d){return(0,a.wg)(),(0,a.iD)("div",t,r)}var d=o(6526),u={data:()=>({}),mounted(){this.$nextTick((()=>{let e=this.$el.children,n=[{word:"acknowledged",meaning:"admitida|recononocida|aceptada|conocida"},{word:"must",meaning:"debe"},{word:"however",meaning:"sin embargo"},{word:"known",meaning:"conocido"},{word:"feelings",meaning:"sentimientos"},{word:"views of such",meaning:"puntos de vista que"},{word:"neighbourhood",meaning:"vecindario"},{word:"fixed",meaning:"fijada"},{word:"surrounding",meaning:"alrededores"},{word:"rightful",meaning:"legitimamente"},{word:"dear",meaning:"estimada|estimado|querida|querido"},{word:"lady",meaning:"dama|señora"},{word:"let at last",meaning:"alquila por fin"},{word:"replied",meaning:"respondio|replico"},{word:"returned",meaning:"respondio|replico"},{word:"cried",meaning:"gritando|llorando"},{word:"enough",meaning:"Suficiente"},{word:"came down",meaning:"bajo"},{word:"chaise and four",meaning:"carruaje de cuatro caballos"},{word:"so much delighted",meaning:"tan encantado|tan encantada"},{word:"agreed",meaning:"acordo|acordado"},{word:"michaelmas",meaning:"Día de San Miguel Arcángel"},{word:"sure",meaning:"por supuesto|seguro"},{word:"thousand",meaning:"mil"},{word:"how so",meaning:"¿como es eso?"},{word:"tiresome",meaning:"aburrido|cansado|pesado"},{word:"marrying",meaning:"casamiento"},{word:"design",meaning:"plan|proyecto|diseño"},{word:"settling",meaning:"establecimiento"},{word:"nonsense",meaning:"disparates"},{word:"likely",meaning:"posible|probable|apropiado"},{word:"fall in love",meaning:"enamorarse"},{word:"therefore",meaning:"por lo tanto"},{word:"soon",meaning:"pronto"},{word:"which perhaps",meaning:"que tal vez"},{word:"still",meaning:"todavia|aun"},{word:"for as",meaning:"porque como"},{word:"handsome",meaning:"guapa"},{word:"might like you",meaning:"le podria gustar"},{word:"flatter",meaning:"halagar|adular"},{word:"share",meaning:"Cuota"},{word:"grown up",meaning:"adultas|crecidas"},{word:"ought to give over",meaning:"deberia dejar de"},{word:"such",meaning:"tal"},{word:"often",meaning:"suele"},{word:"to think of",meaning:"en que pensar"},{word:"indeed",meaning:"por supuesto|de hecho"},{word:"than I engage for",meaning:"de lo que yo me comprometo"},{word:"would be",meaning:"seria"},{word:"merely",meaning:"simplemente"},{word:"new comers",meaning:"recien llegados"},{word:"over scrupulous",meaning:"demasiado escrupuloso"},{word:"surely",meaning:"seguramente"},{word:"for it will be impossible for us to visit him",meaning:"porque nos sera imposible visitarlo"},{word:"dare",meaning:"atrevo|atrevimiento"},{word:"will be very glad",meaning:"estara muy contento"},{word:"by you to assure him",meaning:"para asegurarle"},{word:"hearty",meaning:"sincero"},{word:"whichever",meaning:"cualquiera"},{word:"though",meaning:"aunque"},{word:"throw",meaning:"tirar|lanzar|hacer"},{word:"desire",meaning:"deseo"},{word:"none",meaning:"ninguno"},{word:"silly",meaning:"tontas"},{word:"quickness",meaning:"viveza|agudeza|agilidad"},{word:"abuse",meaning:"insultar|ofender"},{word:"way",meaning:"manera|forma"},{word:"delight",meaning:"placer|encanta|deleita"},{word:"vexing",meaning:"irritante|impacientar|afligir"},{word:"mistake",meaning:"confundir|error|mal interpretar"},{word:"at least",meaning:"al menos"},{word:"you will get over it",meaning:"que lo superes"},{word:"it will be no use to us",meaning:"de nada nos servira"},{word:"since",meaning:"ya que"},{word:"depend upon it",meaning:"depende de ello"},{word:"so odd",meaning:"tan extraña"},{word:"mixture",meaning:"mezcla"},{word:"mean",meaning:"medio"},{word:"uncertain",meaning:"incierto"},{word:"discontented",meaning:"descontenta"},{word:"fancied",meaning:"imaginaba"},{word:"to get",meaning:"llegar"},{word:"solace",meaning:"consuelo"}];n.sort(((e,n)=>e.word<n.word?-1:e.word>n.word?1:0)),this.iniciando(n,e)}))},methods:{iniciando:d.k}},m=o(3744);const h=(0,m.Z)(u,[["render",s]]);var l=h},4965:function(e,n,o){o.r(n),o.d(n,{default:function(){return l}});var a=o(6252);const t={id:"cuerpo"},i=(0,a.uE)("<h1>Chapter 2</h1><p>Mr. Bennet was among the earliest of those who waited on Mr. Bingley. He had always intended to visit him, though to the last always assuring his wife that he should not go; and till the evening after the visit was paid she had no knowledge of it. it was then disclosed in the following manner. Observing his second daughter employed in trimming a hat, he suddenly addressed her with,--</p><p>&quot;I hope Mr.bingley will like it, Lizzy.&quot;</p><p>&quot;We are not in a way to know what Mr. Bingley likes,&quot; said her mother, resentfully, &quot;since we are not to visit.&quot;</p><p>&quot;But you forget, mamma,&quot; said Elizabeth, &quot;that we shall meet him at the assemblies, and that Mrs.Long has promised to introduce him&quot;</p><p>&quot;I do not believe Mrs. Lond will do any such thing. she has two nieces of her own. she is a selfish, hypocritical woman, and I have no opinion of her.&quot;</p><p>&quot;No more have I,&quot; said Mr Bennet; &quot; and I am glad to find that you do not depend on her serving you.&quot;</p><p>Mrs. Bennet deigned not to make any reply; but, unable to contain herself, began scolding one of her daughters.</p><p>&quot;Don&#39;t keep coughing so, Kitty, for heaven&#39;s sake! Have a little compassion on my nerves. you tear them to pieces.&quot;</p><p>&quot;kitty has no discretion in her coughs,&quot; said her father; &quot;she times them ill.&quot;</p><p>&quot;I do not cough for my own amusement,&quot; replied Kitty, fretfully. &quot;When is your next ball to be, Lizzy?&quot; &quot;To-Morrow fortnight.&quot;</p><p>&quot;Ay, so it is,&quot; cried her mother, &quot;and Mrs. Long does not come back till the day before; so, it will be impossible for her to introduce him, for she will not know him herself&quot;</p><p>&quot;Then, my dear, you may have the advantage of your friend, and introduce Mr. Bingley to her.&quot;</p><p>&quot;Impossible, Mr. Bennet, impossible, when I am not acquainted with him myself; how can you be so teasing?&quot;</p><p>&quot;I honour your circumspection. A fortnight&#39;s acquaintance is certainly very little. One cannot know what a man really is by the end of a fortnight. But if we do not venture, somebody else will; and after all, Mrs. Long and her nieces must stand their chance; and therefore, as she will think it an act of kindness, if you decline the office, I will take it on myseld.&quot;</p><p>The girls stared at their father. Mrs. Bennet said only, &quot;Nonsense, nonsense!&quot;</p><p>&quot;what can be the meaning of that emphatic exclamation?&quot; cried he. &quot;Do you consider the forms of introduction, and the stress that is laid in them, as nonsense? I cannot quite agree with you there. what say you, Mary? for you are a young lady of deep reflection, I know and read great books, and make extracts.</p><p>Mary wished to say something very sensible, but knew not how.</p><p>&quot;while Mary is adjusting her ideas,&quot; he continued, &quot;let us return to Mr. Bingley&quot;</p><p>&quot;I am sick of Mr. Bingley,&quot; cried his wife</p><p>&quot;I am sorry to hear that; but why did not you tell me so before? if I had known as much this morning, I certainly would not have called on him. It is very unlucky; but as I have actually paid the visit, we cannot escape the acquaintance now.&quot;</p><p>the astonishment of the ladies was just what he wished; that of Mrs. Bennet perhaps surpassing the rest; though when the first tumult of joy was over, she began to declare that it was what she had expected all the while.</p><p>&quot;How good it was in you, my dear Mr. Bennet. But I knew I should persuade you at last. I was sure you loved your girls too well to neglect such an acquaintance. Well, how pleased I am! and it is such a good joke, too, that you should have gone this morning, and never said a word about it till now&quot;</p><p>&quot;Now, Kitty, You may cough as much as you choose,&quot; said Mr. Bennet; and, as he spoke, he left the room, fatigued with the raptures of his wife.</p><p>&quot;what an excellent father you have, girls,&quot; said she, when the door was shut. &quot;I do not know how you will ever make him ammends for his kindness; or me either, for that matter. At our time of life, it is not so pleasant, I can tell you, to be making new acquaintance every day; but for your sakes, we would do any thing. Lydia, my love, though you are the youngest, I dare say Mr. Bingley will dance with you at the next ball.&quot;</p><p>&quot;Oh,&quot; said Lydia, stoutly, &quot;I am not afraid; for though I am the youngest, I&#39;m the tallest.&quot;</p><p>The rest of the evening was spent in conjecturing how soon he would return Mr. Bennet&#39;s visit, and determining when they should ask him to dinner.</p>",27),r=[i];function s(e,n,o,i,s,d){return(0,a.wg)(),(0,a.iD)("div",t,r)}var d=o(6526),u={data:()=>({}),mounted(){this.$nextTick((()=>{const e=this.$el.children,n=[{word:"among",meaning:"entre"},{word:"earliest",meaning:"primeras|temprano"},{word:"those who waited",meaning:"los que esperaron"},{word:"intended",meaning:"intencion|destino"},{word:"though",meaning:"aunque"},{word:"to the last",meaning:"hasta el final"},{word:"till",meaning:"hasta"},{word:"after",meaning:"despues"},{word:"paid",meaning:"hecha|pagada|realizada"},{word:"had",meaning:"tuvo"},{word:"knowledge",meaning:"conocimiento"},{word:"of it",meaning:"de ello"},{word:"then",meaning:"entonces"},{word:"disclosed",meaning:"revelado"},{word:"following",meaning:"siguiente"},{word:"manner",meaning:"manera"},{word:"employed",meaning:"ocupada|empleada"},{word:"trimming",meaning:"recortando"},{word:"suddenly",meaning:"repentinamente"},{word:"addressed",meaning:"direccion"},{word:"will like it",meaning:"le guste"},{word:"resentfully",meaning:"resentida"},{word:"since",meaning:"ya que|pues"},{word:"mamma",meaning:"mamá"},{word:"shall meet",meaning:"deberiamos vernos"},{word:"believe",meaning:"creer"},{word:"any such thing",meaning:"tal cosa"},{word:"selfish",meaning:"egoista"},{word:"glad",meaning:"contento"},{word:"find",meaning:"declarar|encontrar"},{word:"deigned",meaning:"digna"},{word:"reply",meaning:"respuesta"},{word:"unable",meaning:"incapaz"},{word:"contain",meaning:"contener"},{word:"began",meaning:"empezo"},{word:"scolding",meaning:"regañar"},{word:"don't keep",meaning:"no sigas"},{word:"coughing",meaning:"tosiendo"},{word:"for heaven's sake",meaning:"por el amor de Dios"},{word:"so",meaning:"asi"},{word:"you tear them to pieces",meaning:"los haces pedazos"},{word:"in her coughs",meaning:"al toser"},{word:"times them ill",meaning:"los cronometra mal"},{word:"own",meaning:"propia"},{word:"amusement",meaning:"diversion"},{word:"fretfully",meaning:"impacientemente"},{word:"ball to be",meaning:"baile"},{word:"fortnight",meaning:"en quince|quincena"},{word:"so it is",meaning:"asi es"},{word:"cried",meaning:"exclamo|grito"},{word:"come back",meaning:"regresa"},{word:"it will be",meaning:"le sera"},{word:"herself",meaning:"por ella misma"},{word:"her",meaning:"ella|sus"},{word:"acquainted",meaning:"familiarizado"},{word:"teasing",meaning:"bromista"},{word:"honour",meaning:"honro"},{word:"circumspection",meaning:"prudencia|circunspeccion"},{word:"fortnight's acquaintance",meaning:"un conocido de quince dias"},{word:"venture",meaning:"ariesga|aventura"},{word:"somebody else will",meaning:"alguien mas lo hara"},{word:"stand",meaning:"estar"},{word:"therefore",meaning:"por lo tanto"},{word:"think",meaning:"pensar"},{word:"kindness",meaning:"bondad"},{word:"decline",meaning:"rechazas"},{word:"cargo",meaning:"office"},{word:"take it on",meaning:"asumir"},{word:"stared at",meaning:"miraron a"},{word:"nonsense",meaning:"tonterias|disparates"},{word:"meaning",meaning:"significado"},{word:"emphatic",meaning:"enfatica"},{word:"stress",meaning:"enfasis"},{word:"laid in them",meaning:"puestas en ellas"},{word:"quite",meaning:"estar del todo de"},{word:"agree",meaning:"acuerdo"},{word:"deep",meaning:"profunda"},{word:"know",meaning:"conozco"},{word:"extracts",meaning:"extratos"},{word:"sensible",meaning:"sensato"},{word:"knew not",meaning:"no sabia"},{word:"adjusting",meaning:"ajustando"},{word:"let us return",meaning:"volvamos"},{word:"sick",meaning:"harta"},{word:"would not have called on him",meaning:"no lo habria visitado"},{word:"unlucky",meaning:"desafortunado"},{word:"would not have called on him",meaning:"no lo habria visitado"},{word:"acquaintance",meaning:"conocerlo"},{word:"astonishment",meaning:"asombro"},{word:"perhaps",meaning:"quizas"},{word:"surpassing",meaning:"superando"},{word:"though",meaning:"aunque"},{word:"tumult",meaning:"tumulto"},{word:"was over",meaning:"paso"},{word:"all the while",meaning:"todo el tiempo"},{word:"how good",meaning:"que bien"},{word:"knew",meaning:"sabia"},{word:"should",meaning:"podria"},{word:"at last",meaning:"por fin"},{word:"neglect",meaning:"descuidar"},{word:"how pleased",meaning:"que contenta"},{word:"good joke",meaning:"buena broma"},{word:"too",meaning:"tambien"},{word:"cough",meaning:"toser"},{word:"as he spoke",meaning:"mientras hablaba"},{word:"left",meaning:"salio"},{word:"fatigued",meaning:"fatigado"},{word:"raptures",meaning:"extasis"},{word:"ammends",meaning:"compensacion"},{word:"ever",meaning:"alguna vez"},{word:"either",meaning:"tambien"},{word:"matter",meaning:"asunto|cosa"},{word:"at our time of life",meaning:"en nuestro momento de vida"},{word:"pleasent",meaning:"agradeble"},{word:"sakes",meaning:"bien"},{word:"youngest",meaning:"mas joven"},{word:"dare",meaning:"atrevo"},{word:"stoutly",meaning:"firmeza"},{word:"afraid",meaning:"miedo"},{word:"tallest",meaning:"mas alta"},{word:"spent",meaning:"paso"},{word:"how soon",meaning:"que tan pronto"},{word:"ask him to dinner",meaning:"invitarlo a cenar"}];n.sort(((e,n)=>e.word<n.word?-1:e.word>n.word?1:0)),this.iniciando(n,e)}))},methods:{iniciando:d.k}},m=o(3744);const h=(0,m.Z)(u,[["render",s]]);var l=h},348:function(e,n,o){o.r(n),o.d(n,{default:function(){return l}});var a=o(6252);const t={id:"cuerpo"},i=(0,a._)("h1",null,"Chapter 3",-1),r=[i];function s(e,n,o,i,s,d){return(0,a.wg)(),(0,a.iD)("div",t,r)}var d=o(6526),u={data:()=>({}),mounted(){this.$nextTick((()=>{const e=this.$el.children,n=[{word:"among",meaning:"entre"}];n.sort(((e,n)=>e.word<n.word?-1:e.word>n.word?1:0)),this.iniciando(n,e)}))},methods:{iniciando:d.k}},m=o(3744);const h=(0,m.Z)(u,[["render",s]]);var l=h}}]);
//# sourceMappingURL=about.07c81e2f.js.map