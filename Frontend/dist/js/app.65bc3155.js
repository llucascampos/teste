(function(t){function a(a){for(var o,i,n=a[0],l=a[1],c=a[2],d=0,p=[];d<n.length;d++)i=n[d],r[i]&&p.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(a);while(p.length)p.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],o=!0,n=1;n<e.length;n++){var l=e[n];0!==r[l]&&(o=!1)}o&&(s.splice(a--,1),t=i(i.s=e[0]))}return t}var o={},r={app:0},s=[];function i(a){if(o[a])return o[a].exports;var e=o[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=o,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var o in t)i.d(e,o,function(a){return t[a]}.bind(null,o));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=a,n=n.slice();for(var c=0;c<n.length;c++)a(n[c]);var u=l;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},3719:function(t,a,e){"use strict";var o=e("fb48"),r=e.n(o);r.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var o=e("2b0e"),r=e("bb71");e("da64");o["a"].use(r["a"],{iconfont:"md"});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("app-header"),e("app-menu"),e("router-view"),e("app-footer",{staticClass:"footer"})],1)},i=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-toolbar",{attrs:{color:"primary lighten-1",dark:""}},[e("v-toolbar-side-icon",{on:{click:function(a){return t.abrirMenu()}}}),e("v-toolbar-title",{attrs:{"data-v-step":"1"}},[e("v-btn",{attrs:{flat:"",to:"/"}},[e("v-icon",[t._v("home")])],1)],1),e("v-spacer"),e("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[e("v-btn",{attrs:{flat:"",to:"/Motoristas","data-v-step":"3"}},[t._v("Motoristas")]),e("v-btn",{attrs:{flat:"",to:"/Passageiros","data-v-step":"4"}},[t._v("Passageiros")]),e("v-btn",{attrs:{flat:"",to:"/Corridas","data-v-step":"5"}},[t._v("Corridas")])],1)],1),e("v-tour",{attrs:{name:"myTour",steps:t.steps,options:t.myOption}})],1)},l=[],c=e("cebc"),u=e("2f62"),d={name:"my-tour",data:function(){return{myOption:{useKeyboardNavigation:!1,labels:{buttonSkip:"Terminar tour",buttonPrevious:"Voltar",buttonNext:"Próximo",buttonStop:"Fim"}},steps:[{target:'[data-v-step="1"]',content:"Clique aqui quando desejar voltar para a página inicial."},{target:'[data-v-step="2"]',content:"Cadastrar nova corrida. Aqui você consegue cadastrar novas corridas, lembre-se para cadastrar uma corrida é necessário ter motoristas e passageiros cadastrados. ",params:{placement:"bottom"}},{target:'[data-v-step="3"]',content:"Para visualizar e cadastrar novos motoristas."},{target:'[data-v-step="4"]',content:"Para viasualizar e cadastrar novos passageiros"},{target:'[data-v-step="5"]',content:"Visualizar corridas cadastradas"}]}},methods:{iniciarTour:function(){this.$tours["myTour"].start()}}},p=d,v={mixins:[p],methods:Object(c["a"])({},Object(u["b"])(["abrirMenu"])),computed:{menu:function(){return this.$store.state.menu}}},m=v,f=e("2877"),b=e("6544"),g=e.n(b),h=e("8336"),x=e("132d"),_=e("9910"),k=e("71d9"),y=e("2a7f"),C=e("706c"),V=Object(f["a"])(m,n,l,!1,null,null,null),P=V.exports;g()(V,{VBtn:h["a"],VIcon:x["a"],VSpacer:_["a"],VToolbar:k["a"],VToolbarItems:y["a"],VToolbarSideIcon:C["a"],VToolbarTitle:y["b"]});var j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-footer",{staticClass:"pa-4 text-md-center",attrs:{color:"primary",dark:""}},[e("v-layout",{attrs:{"justify-center":""}},[e("div",[t._v("© "+t._s((new Date).getFullYear()))])])],1)},w=[],A={},T=A,S=e("553a"),M=e("a722"),$=Object(f["a"])(T,j,w,!1,null,"5b7f440f",null),F=$.exports;g()($,{VFooter:S["a"],VLayout:M["a"]});var O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-navigation-drawer",{attrs:{absolute:"",temporary:"",stateless:""},model:{value:t.menu,callback:function(a){t.menu=a},expression:"menu"}},[e("v-list",{staticClass:"pt-1"},[e("v-list-tile",[e("v-list-tile-content",[e("v-list-tile-title",[e("h3",[t._v("Menu")])])],1),e("v-list-tile-action",[e("v-icon",{on:{click:function(a){return t.fecharMenu()}}},[t._v("close")])],1)],1)],1),e("v-list",{staticClass:"p-0",attrs:{dense:""}},[e("v-divider"),e("v-list-tile",{attrs:{to:"/"}},[e("v-list-tile-action",[e("v-icon",[t._v("home")])],1),e("v-list-tile-content",[e("v-list-tile-title",[t._v("Inicio")])],1)],1),e("v-list-tile",{attrs:{to:"/Motoristas"}},[e("v-list-tile-action",[e("v-icon",[t._v("drive_eta")])],1),e("v-list-tile-content",[e("v-list-tile-title",[t._v("Motoristas")])],1)],1),e("v-list-tile",{attrs:{to:"/Passageiros"}},[e("v-list-tile-action",[e("v-icon",[t._v("person")])],1),e("v-list-tile-content",[e("v-list-tile-title",[t._v("Passageiros")])],1)],1),e("v-list-tile",{attrs:{to:"/Corridas"}},[e("v-list-tile-action",[e("v-icon",[t._v("swap_horiz")])],1),e("v-list-tile-content",[e("v-list-tile-title",[t._v("Corridas")])],1)],1)],1)],1)},I=[],D={methods:Object(c["a"])({},Object(u["b"])(["fecharMenu"])),computed:{menu:function(){return this.$store.state.menu}}},N=D,z=e("ce7e"),E=e("8860"),B=e("ba95"),L=e("40fe"),R=e("5d23"),q=e("f774"),G=Object(f["a"])(N,O,I,!1,null,null,null),J=G.exports;g()(G,{VDivider:z["a"],VIcon:x["a"],VList:E["a"],VListTile:B["a"],VListTileAction:L["a"],VListTileContent:R["a"],VListTileTitle:R["b"],VNavigationDrawer:q["a"]});var H={components:{AppHeader:P,AppFooter:F,AppMenu:J}},K=H,Y=e("7496"),Q=Object(f["a"])(K,s,i,!1,null,"81bbcb3a",null),U=Q.exports;g()(Q,{VApp:Y["a"]});var W=e("8c4f"),X=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("div",{staticClass:"text-xs-center mt-5"},[e("v-layout",{attrs:{"align-center":"","justify-center":"",row:""}},[e("v-flex",[e("h1",[t._v("BEM-VINDO!")]),e("v-btn",{attrs:{flat:"",large:""},on:{click:function(a){return t.iniciarTour()}}},[t._v("Conheça a Aplicação")]),e("cadastrar-viagem",{staticClass:"mt-5"})],1)],1)],1),e("v-tour",{attrs:{name:"myTour",steps:t.steps,options:t.myOption}})],1)},Z=[],tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-layout",[e("v-snackbar",{attrs:{color:t.color,"multi-line":"multi-line"===t.mode,timeout:t.timeout,vertical:"vertical"===t.mode,top:"top"===t.y},model:{value:t.snackbar,callback:function(a){t.snackbar=a},expression:"snackbar"}},[t._v("\n        "+t._s(t.text)+"\n        "),e("v-btn",{attrs:{dark:"",flat:""},on:{click:function(a){t.snackbar=!1}}},[t._v("Fechar")])],1)],1),e("v-layout",{attrs:{"align-center":"","justify-center":""}},[e("v-btn",{attrs:{color:"primary",dark:"","data-v-step":"2"},on:{click:function(a){a.stopPropagation(),t.dialog=!0}}},[t._v("\n            Cadastrar Nova Corrida\n        ")])],1),e("v-dialog",{attrs:{persistent:""},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-stepper",{attrs:{vertical:""},model:{value:t.e1,callback:function(a){t.e1=a},expression:"e1"}},[e("v-form",{ref:"form"},[e("v-stepper-step",{attrs:{complete:t.e1>1,step:"1"}},[t._v("Selecione o Motorista")]),e("v-stepper-items",[e("v-stepper-content",{attrs:{step:"1"}},[e("v-card",{staticClass:"mb-2 px-5",attrs:{color:"green lighten-5",height:"150px"}},[e("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[e("v-flex",{attrs:{md7:"",sm10:""}},[e("v-autocomplete",{attrs:{items:t.listaMotoristas,"item-text":"nome",label:"Motorista",rules:t.obrigatorio,"no-data-text":"Não há motoristas cadastrados","append-icon":"airline_seat_recline_extra","return-object":""},model:{value:t.viagem.motorista,callback:function(a){t.$set(t.viagem,"motorista",a)},expression:"viagem.motorista"}})],1)],1)],1),e("v-btn",{attrs:{color:"primary"},on:{click:function(a){t.e1=2}}},[t._v("Continue")]),e("v-btn",{attrs:{flat:""},on:{click:function(a){return t.cancelar()}}},[t._v("Cancelar")])],1),e("v-stepper-step",{attrs:{complete:t.e1>2,step:"2"}},[t._v("Escolha o Passageiro")]),e("v-stepper-content",{attrs:{step:"2"}},[e("v-card",{staticClass:"mb-2 px-5",attrs:{color:"green lighten-5",height:"150px"}},[e("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[e("v-flex",{attrs:{md6:""}},[e("v-autocomplete",{attrs:{items:t.listaPassageiros,"item-text":"nome",label:"Passageiro",rules:t.obrigatorio,"no-data-text":"Não há passageiros cadastrados","append-icon":"perm_identity","return-object":""},model:{value:t.viagem.passageiro,callback:function(a){t.$set(t.viagem,"passageiro",a)},expression:"viagem.passageiro"}})],1)],1)],1),e("v-btn",{staticClass:"hidden-xs-only",attrs:{icon:""},on:{click:function(a){t.e1=1}}},[e("v-icon",[t._v("reply")])],1),e("v-btn",{attrs:{color:"primary"},on:{click:function(a){t.e1=3}}},[t._v("Continue")]),e("v-btn",{attrs:{flat:""},on:{click:function(a){return t.cancelar()}}},[t._v("Cancelar")])],1),e("v-stepper-step",{attrs:{step:"3"}},[t._v("Informe o Valor")]),e("v-stepper-content",{attrs:{step:"3"}},[e("v-card",{staticClass:"mb-2 px-5",attrs:{color:"green lighten-5",height:"150px"}},[e("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[e("v-flex",{attrs:{md6:""}},[e("v-text-field",{attrs:{label:"Valor",rules:t.obrigatorio,prefix:"R$",type:"number","append-icon":"attach_money"},model:{value:t.viagem.valor,callback:function(a){t.$set(t.viagem,"valor",a)},expression:"viagem.valor"}})],1)],1)],1),e("v-btn",{staticClass:"hidden-xs-only",attrs:{icon:""},on:{click:function(a){t.e1=2}}},[e("v-icon",[t._v("reply")])],1),e("v-btn",{attrs:{color:"primary"},on:{click:function(a){return t.salvar()}}},[t._v("Salvar")]),e("v-btn",{attrs:{flat:""},on:{click:function(a){return t.cancelar()}}},[t._v("Cancelar")])],1)],1)],1)],1)],1),e("v-tour",{attrs:{name:"myTour",steps:t.steps,options:t.myOption}})],1)},at=[],et=e("5176"),ot=e.n(et),rt=e("bc3a"),st=e.n(rt),it="https://backend-dot-lucas-teste-238218.appspot.com/",nt={mixins:[p],data:function(){return{dialog:!1,e1:0,listaPassageiros:[],listaMotoristas:[],viagem:{motorista:null,passageiro:null,valor:null},defaultItem:{motorista:null,passageiro:null,valor:null},obrigatorio:[function(t){return!!t||"Esse campos é necessário"}],snackbar:!1,color:"",mode:"",timeout:3e3,text:"Salvo com Sucesso",y:"top"}},created:function(){this.inicializando()},methods:{inicializando:function(){var t=this;st.a.all([st.a.get("".concat(it,"/Passageiros")),st.a.get("".concat(it,"/Motoristas/viagem"))]).then(st.a.spread(function(a,e){t.listaPassageiros=a.data.response,t.listaMotoristas=e.data.response})).catch(function(t){console.log(t.response.status),console.log(t)})},cancelar:function(){this.e1=1,this.dialog=!1,this.$refs.form.resetValidation(),this.viagem=ot()({},this.defaultItem)},salvar:function(){var t=this;this.$refs.form.validate()&&st.a.post("".concat(it,"/corridas"),this.viagem).then(function(a){t.snackbar=!0,t.inicializando(),t.cancelar()})}}},lt=nt,ct=(e("3719"),e("c6a6")),ut=e("b0af"),dt=e("169a"),pt=e("0e8f"),vt=e("4bd4"),mt=e("2db4"),ft=e("7e85"),bt=e("e516"),gt=e("9c54"),ht=e("56a4"),xt=e("2677"),_t=Object(f["a"])(lt,tt,at,!1,null,null,null),kt=_t.exports;g()(_t,{VAutocomplete:ct["a"],VBtn:h["a"],VCard:ut["a"],VDialog:dt["a"],VFlex:pt["a"],VForm:vt["a"],VIcon:x["a"],VLayout:M["a"],VSnackbar:mt["a"],VStepper:ft["a"],VStepperContent:bt["a"],VStepperItems:gt["a"],VStepperStep:ht["a"],VTextField:xt["a"]});var yt={mixins:[p],components:{CadastrarViagem:kt}},Ct=yt,Vt=e("a523"),Pt=Object(f["a"])(Ct,X,Z,!1,null,null,null),jt=Pt.exports;g()(Pt,{VBtn:h["a"],VContainer:Vt["a"],VFlex:pt["a"],VLayout:M["a"]});var wt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("tabela-motorista")],1)},At=[],Tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-layout",[e("v-snackbar",{attrs:{color:t.color,"multi-line":"multi-line"===t.mode,timeout:t.timeout,vertical:"vertical"===t.mode,top:"top"===t.y},model:{value:t.snackbar,callback:function(a){t.snackbar=a},expression:"snackbar"}},[t._v("\n        "+t._s(t.text)+"\n        "),e("v-btn",{attrs:{dark:"",flat:""},on:{click:function(a){t.snackbar=!1}}},[t._v("Fechar")])],1)],1),e("div",{staticClass:" mt-3 mb-5"},[e("v-layout",{attrs:{wrap:"","justify-space-around":""}},[e("v-flex",{attrs:{xs12:"",sm4:"",md4:""}},[e("v-autocomplete",{attrs:{items:t.opcoesFiltro,label:"Filtrar Por"},model:{value:t.filtrarPor,callback:function(a){t.filtrarPor=a},expression:"filtrarPor"}})],1),e("v-flex",{attrs:{xs12:"",sm4:"",md4:""}},[e("v-text-field",{attrs:{label:this.filtrarPor,disabled:null==this.filtrarPor},model:{value:t.filtro,callback:function(a){t.filtro=a},expression:"filtro"}})],1),e("v-flex",{attrs:{sm2:""}},[e("v-btn",{attrs:{color:"primary",disabled:""==this.filtro},on:{click:function(a){return t.filtrar()}}},[t._v("Filtrar")])],1)],1)],1),e("v-toolbar",[e("v-toolbar-title",[t._v("Motoristas")]),e("v-spacer"),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var o=a.on;return[e("v-btn",t._g({attrs:{fab:"",dark:"",color:"green",small:""},on:{click:function(a){return t.inicializando()}}},o),[e("v-icon",{attrs:{dark:""}},[t._v("replay")])],1)]}}])},[e("span",[t._v("Atualizar página")])]),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var o=a.on;return[e("v-btn",t._g({attrs:{fab:"",dark:"",color:"primary",small:""},on:{click:function(a){t.dialog=!0}}},o),[e("v-icon",{attrs:{dark:""}},[t._v("add")])],1)]}}])},[e("span",[t._v("Adicionar novo motorista")])])],1),e("v-dialog",{attrs:{"max-width":"70%",persistent:""},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",{attrs:{"justify-center":""}},[e("v-form",{ref:"form"},[e("v-card-title",[e("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),e("v-card-text",[e("v-container",{attrs:{"grid-list-md":""}},[e("v-layout",{attrs:{wrap:"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm6:"",md10:""}},[e("v-text-field",{attrs:{label:"Nome",rules:t.obrigatorio,"append-icon":"face"},model:{value:t.motorista.nome,callback:function(a){t.$set(t.motorista,"nome",a)},expression:"motorista.nome"}})],1)],1),e("v-layout",{attrs:{wrap:"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm6:"",md10:""}},[e("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"###.###.###-##",expression:"'###.###.###-##'"}],attrs:{label:"CPF",rules:t.documentoValido,"append-icon":"perm_identity"},model:{value:t.motorista.cpf,callback:function(a){t.$set(t.motorista,"cpf",a)},expression:"motorista.cpf"}})],1)],1),e("v-layout",{attrs:{wrap:"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm6:"",md10:""}},[e("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"##/##/####",expression:"'##/##/####'"}],attrs:{label:"Data de Nascimento",rules:t.dataValida,"append-icon":"date_range"},model:{value:t.motorista.nascimento,callback:function(a){t.$set(t.motorista,"nascimento",a)},expression:"motorista.nascimento"}})],1)],1),e("v-layout",{attrs:{wrap:"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm6:"",md10:""}},[e("v-text-field",{attrs:{label:"Modelo Do Carro",rules:t.obrigatorio,"append-icon":"drive_eta"},model:{value:t.motorista.modeloCarro,callback:function(a){t.$set(t.motorista,"modeloCarro",a)},expression:"motorista.modeloCarro"}})],1)],1),e("v-layout",{attrs:{wrap:"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm6:"",md5:""}},[e("v-radio-group",{attrs:{mandatory:!1,row:"",rules:t.obrigatorio},model:{value:t.motorista.sexo,callback:function(a){t.$set(t.motorista,"sexo",a)},expression:"motorista.sexo"}},[e("v-radio",{attrs:{label:"Masculino",value:"Masculino"}}),e("v-radio",{attrs:{label:"Feminino",value:"Feminino"}})],1)],1),e("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[e("v-switch",{attrs:{label:"Status:  "+t.formatarStatus(this.motorista.ativo)},model:{value:t.motorista.ativo,callback:function(a){t.$set(t.motorista,"ativo",a)},expression:"motorista.ativo"}})],1)],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.fechar}},[t._v("Cancelar")]),e("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.salvar}},[t._v("Salvar")])],1)],1)],1)],1),e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.listaMotoristas,"hide-actions":"","no-data-text":"Sem Dados"},scopedSlots:t._u([{key:"items",fn:function(a){return[e("td",{staticClass:"text-xs-left"},[t._v(t._s(a.item.nome))]),e("td",{staticClass:"text-xs-left"},[t._v(t._s(t.mCpf(a.item.cpf)))]),e("td",{staticClass:"text-xs-left"},[t._v(t._s(t.formatarData(a.item.dataNascimento)))]),e("td",{staticClass:"text-xs-left"},[t._v(t._s(a.item.modeloCarro))]),e("td",{staticClass:"text-xs-left"},[t._v(t._s(a.item.sexo))]),e("td",{staticClass:"text-xs-left"},[t._v(t._s(t.formatarStatus(a.item.ativo)))]),e("td",{staticClass:"justify-center layout px-0"},[e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(o){o.on;return[e("v-icon",{staticClass:"mr-2",on:{click:function(e){return t.editarItem(a.item)}}},[t._v("edit")])]}}],null,!0)},[e("span",[t._v("Editar")])])],1)]}}])},[e("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"})],1)],1)},St=[],Mt=(e("a481"),e("28a5"),{data:function(){return{snackbar:!1,color:"",mode:"",timeout:3e3,text:"Salvo com Sucesso",y:"top",obrigatorio:[function(t){return!!t||"Campo Obrigatório"}],documentoValido:[function(t){return!!t||"Campo Obrigatório"},function(t){return 14==t.length||"Insira um CPF Válido"}],dataValida:[function(t){return!!t||"Campo Obrigatório"},function(t){return 10==t.length||"Insira a Data Corretamente"}]}},methods:{formatarData:function(t){var a=t.split("-"),e=a[2].split("T")[0]+"/"+a[1]+"/"+a[0];return e},formataDataParaBanco:function(t){var a=t.split("/")[0],e=t.split("/")[1],o=t.split("/")[2];return o+"-"+("0"+e).slice(-2)+"-"+("0"+a).slice(-2)},formatarCpf:function(t){return t.replace(/\D/g,"")},mCpf:function(t){return t=t.replace(/\D/g,""),t=t.replace(/(\d{3})(\d)/,"$1.$2"),t=t.replace(/(\d{3})(\d)/,"$1.$2"),t=t.replace(/(\d{3})(\d{1,2})$/,"$1-$2"),t}}}),$t=Mt,Ft="https://backend-dot-lucas-teste-238218.appspot.com/",Ot={mixins:[$t],data:function(){return{dialog:!1,headers:[{text:"Nome",align:"left",value:"nome",sortable:!1},{text:"CPF",align:"left",value:"cpf",sortable:!1},{text:"Data de Nascimento",align:"left",value:"nascimento",sortable:!1},{text:"Modelo do Carro",align:"left",value:"modeloCarro",sortable:!1},{text:"Sexo",align:"left",value:"sexo",sortable:!1},{text:"Status",align:"left",value:"status",sortable:!1},{text:"Ações",value:"acoes",sortable:!1}],listaMotoristas:[],editarIndex:-1,motorista:{nome:"",cpf:"",nascimento:"",modeloCarro:null,sexo:null,ativo:!1},defaultItem:{nome:"",cpf:"",nascimento:"",modeloCarro:null,sexo:null,ativo:!1},filtrarPor:null,filtro:"",opcoesFiltro:["Nome","CPF","Modelo do Carro","Sexo"],obrigatorio:[function(t){return!!t||"Esse campos é necessário"}]}},computed:{formTitle:function(){return-1===this.editarIndex?"Adicionar Motorista":"Editar Motorista"}},watch:{dialog:function(t){t||this.fechar()}},created:function(){this.inicializando()},methods:{inicializando:function(){var t=this;st.a,st.a.get("".concat(Ft,"/motoristas"),{headers:{"content-type":"application/json",Accept:"application/json","Access-Control-Allow-Credentials":!0,"Access-Control-Allow-Origin":!0}}).then(function(a){t.listaMotoristas=a.data.response,console.log(a.data)}).catch(function(a){console.log(a),t.errored=!0})},editarItem:function(t){this.editarIndex=this.listaMotoristas.indexOf(t),this.motorista=ot()({},t),this.motorista.nascimento=this.formatarData(this.motorista.dataNascimento),console.log(this.motorista),this.dialog=!0},fechar:function(){var t=this;this.dialog=!1,setTimeout(function(){t.$refs.form.resetValidation(),t.motorista=ot()({},t.defaultItem),t.editarIndex=-1},300)},salvar:function(){var t=this;this.$refs.form.validate()&&(this.editarIndex>-1?(this.motorista.nascimento=this.formataDataParaBanco(this.motorista.nascimento),this.motorista.cpf=this.formatarCpf(this.motorista.cpf),st.a.put("".concat(Ft,"/motoristas"),this.motorista).then(function(a){t.text="Atualizado com sucesso",t.snackbar=!0,t.inicializando(),t.fechar()}).catch(function(a){console.log(a),t.errored=!0})):(this.motorista.nascimento=this.formataDataParaBanco(this.motorista.nascimento),this.motorista.cpf=this.formatarCpf(this.motorista.cpf),st.a.post("".concat(Ft,"/motoristas"),this.motorista).then(function(a){t.snackbar=!0,t.inicializando()})),this.fechar())},formatarStatus:function(t){return 0==t?"Inativo":"Ativo"},filtrar:function(){var t=this;st.a.get("".concat(Ft,"/motoristas/filtrar/").concat(this.filtrarPor,"/").concat(this.filtro),{headers:{"content-type":"application/json",Accept:"application/json","Access-Control-Allow-Credentials":!0,"Access-Control-Allow-Origin":!0}}).then(function(a){t.listaMotoristas=a.data.response,console.log(a.data)}).catch(function(a){console.log(a),t.errored=!0})}}},It=Ot,Dt=e("99d9"),Nt=e("12b2"),zt=e("8fea"),Et=e("8e36"),Bt=e("67b6"),Lt=e("43a6"),Rt=e("b73d"),qt=e("3a2f"),Gt=Object(f["a"])(It,Tt,St,!1,null,null,null),Jt=Gt.exports;g()(Gt,{VAutocomplete:ct["a"],VBtn:h["a"],VCard:ut["a"],VCardActions:Dt["a"],VCardText:Dt["b"],VCardTitle:Nt["a"],VContainer:Vt["a"],VDataTable:zt["a"],VDialog:dt["a"],VFlex:pt["a"],VForm:vt["a"],VIcon:x["a"],VLayout:M["a"],VProgressLinear:Et["a"],VRadio:Bt["a"],VRadioGroup:Lt["a"],VSnackbar:mt["a"],VSpacer:_["a"],VSwitch:Rt["a"],VTextField:xt["a"],VToolbar:k["a"],VToolbarTitle:y["b"],VTooltip:qt["a"]});var Ht={components:{TabelaMotorista:Jt}},Kt=Ht,Yt=Object(f["a"])(Kt,wt,At,!1,null,null,null),Qt=Yt.exports;g()(Yt,{VContainer:Vt["a"]});var Ut=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("tabela-Passageiros")],1)},Wt=[],Xt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-layout",[e("v-snackbar",{attrs:{color:t.color,"multi-line":"multi-line"===t.mode,timeout:t.timeout,vertical:"vertical"===t.mode,top:"top"===t.y},model:{value:t.snackbar,callback:function(a){t.snackbar=a},expression:"snackbar"}},[t._v("\n      "+t._s(t.text)+"\n      "),e("v-btn",{attrs:{dark:"",flat:""},on:{click:function(a){t.snackbar=!1}}},[t._v("Fechar")])],1)],1),e("div",{staticClass:" mt-3 mb-5"},[e("v-layout",{attrs:{wrap:"","justify-space-around":""}},[e("v-flex",{attrs:{xs12:"",sm4:"",md4:""}},[e("v-autocomplete",{attrs:{items:t.opcoesFiltro,label:"Filtrar Por"},model:{value:t.filtrarPor,callback:function(a){t.filtrarPor=a},expression:"filtrarPor"}})],1),e("v-flex",{attrs:{xs12:"",sm4:"",md4:""}},[e("v-text-field",{attrs:{label:this.filtrarPor,disabled:null==this.filtrarPor},model:{value:t.filtro,callback:function(a){t.filtro=a},expression:"filtro"}})],1),e("v-flex",{attrs:{sm2:""}},[e("v-btn",{attrs:{color:"primary",disabled:""==this.filtro},on:{click:function(a){return t.filtrar()}}},[t._v("Filtrar")])],1)],1)],1),e("v-toolbar",[e("v-toolbar-title",[t._v("Passageiros")]),e("v-spacer"),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var o=a.on;return[e("v-btn",t._g({attrs:{fab:"",dark:"",color:"green",small:""},on:{click:function(a){return t.inicializando()}}},o),[e("v-icon",{attrs:{dark:""}},[t._v("replay")])],1)]}}])},[e("span",[t._v("Atualizar página")])]),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var o=a.on;return[e("v-btn",t._g({attrs:{fab:"",dark:"",color:"primary",small:""},on:{click:function(a){t.dialog=!0}}},o),[e("v-icon",{attrs:{dark:""}},[t._v("add")])],1)]}}])},[e("span",[t._v("Adicionar passageiro")])])],1),e("v-dialog",{attrs:{"max-width":"70%",persistent:""},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",{attrs:{"justify-center":""}},[e("v-form",{ref:"form"},[e("v-card-title",[e("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),e("v-card-text",[e("v-container",{attrs:{"grid-list-md":""}},[e("v-layout",{attrs:{wrap:"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm6:"",md10:""}},[e("v-text-field",{attrs:{label:"Nome",rules:t.obrigatorio,"append-icon":"face"},model:{value:t.passageiro.nome,callback:function(a){t.$set(t.passageiro,"nome",a)},expression:"passageiro.nome"}})],1)],1),e("v-layout",{attrs:{wrap:"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm6:"",md10:""}},[e("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"###.###.###-##",expression:"'###.###.###-##'"}],attrs:{label:"CPF",rules:t.documentoValido,"append-icon":"perm_identity"},model:{value:t.passageiro.cpf,callback:function(a){t.$set(t.passageiro,"cpf",a)},expression:"passageiro.cpf"}})],1)],1),e("v-layout",{attrs:{wrap:"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm6:"",md10:""}},[e("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"##/##/####",expression:"'##/##/####'"}],attrs:{label:"Data de Nascimento",rules:t.dataValida,"append-icon":"date_range"},model:{value:t.passageiro.nascimento,callback:function(a){t.$set(t.passageiro,"nascimento",a)},expression:"passageiro.nascimento"}})],1)],1),e("v-layout",{attrs:{wrap:"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm6:"",md5:""}},[e("v-radio-group",{attrs:{mandatory:!1,row:"",rules:t.obrigatorio},model:{value:t.passageiro.sexo,callback:function(a){t.$set(t.passageiro,"sexo",a)},expression:"passageiro.sexo"}},[e("v-radio",{attrs:{label:"Masculino",value:"Masculino"}}),e("v-radio",{attrs:{label:"Feminino",value:"Feminino"}})],1)],1)],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.fechar}},[t._v("Cancelar")]),e("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.salvar}},[t._v("Salvar")])],1)],1)],1)],1),e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.listaPassageiros,"hide-actions":"","no-data-text":"Sem Dados"},scopedSlots:t._u([{key:"items",fn:function(a){return[e("td",{staticClass:"text-xs-left"},[t._v(t._s(a.item.nome))]),e("td",{staticClass:"text-xs-left"},[t._v(t._s(t.mCpf(a.item.cpf)))]),e("td",{staticClass:"text-xs-left"},[t._v(t._s(t.formatarData(a.item.dataNascimento)))]),e("td",{staticClass:"text-xs-left"},[t._v(t._s(a.item.sexo))]),e("td",{staticClass:"justify-center layout px-0"},[e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(o){o.on;return[e("v-icon",{staticClass:"mr-2",on:{click:function(e){return t.editarItem(a.item)}}},[t._v("edit")])]}}],null,!0)},[e("span",[t._v("Editar")])])],1)]}}])})],1)},Zt=[],ta="https://backend-dot-lucas-teste-238218.appspot.com/",aa={mixins:[$t],data:function(){return{dialog:!1,headers:[{text:"Nome",align:"left",value:"nome",sortable:!1},{text:"CPF",align:"left",value:"cpf",sortable:!1},{text:"Data de Nascimento",align:"left",value:"nascimento",sortable:!1},{text:"Sexo",align:"left",value:"sexo",sortable:!1},{text:"Ações",value:"acoes",sortable:!1}],listaPassageiros:[],editarIndex:-1,passageiro:{nome:null,cpf:"",nascimento:"",sexo:null},defaultItem:{nome:null,cpf:"",nascimento:"",sexo:null},filtrarPor:null,filtro:"",opcoesFiltro:["Nome","CPF","Sexo"]}},computed:{formTitle:function(){return-1===this.editarIndex?"Adicionar passageiro":"Editar passageiro"}},watch:{dialog:function(t){t||this.fechar()}},created:function(){this.inicializando()},methods:{inicializando:function(){var t=this;st.a.get("".concat(ta,"/passageiros"),{headers:{"content-type":"application/json",Accept:"application/json","Access-Control-Allow-Credentials":!0,"Access-Control-Allow-Origin":!0}}).then(function(a){t.listaPassageiros=a.data.response,console.log(a.data)}).catch(function(a){console.log(a),t.errored=!0})},editarItem:function(t){this.editarIndex=this.listaPassageiros.indexOf(t),this.passageiro=ot()({},t),this.passageiro.cpf=this.mCpf(this.passageiro.cpf),this.passageiro.nascimento=this.formatarData(this.passageiro.dataNascimento),this.dialog=!0},fechar:function(){var t=this;this.dialog=!1,setTimeout(function(){t.$refs.form.resetValidation(),t.passageiro=ot()({},t.defaultItem),t.editarIndex=-1},300)},salvar:function(){var t=this;this.$refs.form.validate()&&(this.editarIndex>-1?(this.passageiro.nascimento=this.formataDataParaBanco(this.passageiro.nascimento),this.passageiro.cpf=this.formatarCpf(this.passageiro.cpf),st.a.put("".concat(ta,"/passageiros"),this.passageiro).then(function(a){t.text="Atualizado com sucesso",t.snackbar=!0,t.inicializando(),t.fechar()}).catch(function(a){console.log(a),t.errored=!0})):(this.passageiro.nascimento=this.formataDataParaBanco(this.passageiro.nascimento),this.passageiro.cpf=this.formatarCpf(this.passageiro.cpf),st.a.post("".concat(ta,"/passageiros"),this.passageiro).then(function(a){t.snackbar=!0,t.inicializando()})),this.fechar())},filtrar:function(){var t=this;st.a.get("".concat(ta,"/passageiros/filtrar/").concat(this.filtrarPor,"/").concat(this.filtro),{headers:{"content-type":"application/json",Accept:"application/json","Access-Control-Allow-Credentials":!0,"Access-Control-Allow-Origin":!0}}).then(function(a){t.listaPassageiros=a.data.response,console.log(a.data)}).catch(function(a){console.log(a),t.errored=!0})}}},ea=aa,oa=Object(f["a"])(ea,Xt,Zt,!1,null,null,null),ra=oa.exports;g()(oa,{VAutocomplete:ct["a"],VBtn:h["a"],VCard:ut["a"],VCardActions:Dt["a"],VCardText:Dt["b"],VCardTitle:Nt["a"],VContainer:Vt["a"],VDataTable:zt["a"],VDialog:dt["a"],VFlex:pt["a"],VForm:vt["a"],VIcon:x["a"],VLayout:M["a"],VRadio:Bt["a"],VRadioGroup:Lt["a"],VSnackbar:mt["a"],VSpacer:_["a"],VTextField:xt["a"],VToolbar:k["a"],VToolbarTitle:y["b"],VTooltip:qt["a"]});var sa={components:{TabelaPassageiros:ra}},ia=sa,na=Object(f["a"])(ia,Ut,Wt,!1,null,null,null),la=na.exports;g()(na,{VContainer:Vt["a"]});var ca=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("tabela-corridas")],1)},ua=[],da=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:" mt-3 mb-5"},[e("v-layout",{attrs:{wrap:"","justify-space-around":""}},[e("v-flex",{attrs:{xs12:"",sm4:"",md4:""}},[e("v-autocomplete",{attrs:{items:t.opcoesFiltro,label:"Filtrar Por"},model:{value:t.filtrarPor,callback:function(a){t.filtrarPor=a},expression:"filtrarPor"}})],1),e("v-flex",{attrs:{xs12:"",sm4:"",md4:""}},[e("v-text-field",{attrs:{label:this.filtrarPor,disabled:null==this.filtrarPor},model:{value:t.filtro,callback:function(a){t.filtro=a},expression:"filtro"}})],1),e("v-flex",{attrs:{sm2:""}},[e("v-btn",{attrs:{color:"primary",disabled:""==this.filtro},on:{click:function(a){return t.filtrar()}}},[t._v("Filtrar")])],1)],1)],1),e("v-toolbar",[e("v-toolbar-title",[t._v("Registro de Corridas")]),e("v-spacer"),e("v-btn",{attrs:{fab:"",dark:"",color:"green",small:""},on:{click:function(a){return t.inicializando()}}},[e("v-icon",{attrs:{dark:""}},[t._v("replay")])],1)],1),e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.listaViagens,"hide-actions":"","no-data-text":"Sem Dados"},scopedSlots:t._u([{key:"items",fn:function(a){return[e("td",{staticClass:"text-xs-left"},[t._v(t._s(a.item.nomeMotorista))]),e("td",{staticClass:"text-xs-left"},[t._v(t._s(a.item.nomePassageiro))]),e("td",{staticClass:"text-xs-left"},[t._v(t._s(t.formatarMoeda(a.item.valor)))])]}}])})],1)},pa=[],va="https://backend-dot-lucas-teste-238218.appspot.com/",ma={data:function(){return{dialog:!1,headers:[{text:"Motorista",align:"left",value:"motorista",sortable:!1},{text:"Passageiro",align:"left",value:"passageiro",sortable:!1},{text:"Valor",align:"left",value:"valor",sortable:!1}],listaViagens:[],filtrarPor:null,filtro:"",opcoesFiltro:["motorista","passageiro"]}},created:function(){this.inicializando()},methods:{inicializando:function(){var t=this;st.a.get("".concat(va,"/corridas"),{headers:{"content-type":"application/json",Accept:"application/json","Access-Control-Allow-Credentials":!0,"Access-Control-Allow-Origin":!0}}).then(function(a){t.listaViagens=a.data.response,console.log(a.data)}).catch(function(a){console.log(a),t.errored=!0})},filtrar:function(){var t=this;st.a.get("".concat(va,"/corridas/filtrar/").concat(this.filtrarPor,"/").concat(this.filtro),{headers:{"content-type":"application/json",Accept:"application/json","Access-Control-Allow-Credentials":!0,"Access-Control-Allow-Origin":!0}}).then(function(a){t.listaViagens=a.data.response,console.log(a.data)}).catch(function(a){console.log(a),t.errored=!0})},formatarMoeda:function(t){return"R$ "+t.toFixed(2)}}},fa=ma,ba=Object(f["a"])(fa,da,pa,!1,null,null,null),ga=ba.exports;g()(ba,{VAutocomplete:ct["a"],VBtn:h["a"],VDataTable:zt["a"],VFlex:pt["a"],VIcon:x["a"],VLayout:M["a"],VSpacer:_["a"],VTextField:xt["a"],VToolbar:k["a"],VToolbarTitle:y["b"]});var ha={components:{TabelaCorridas:ga}},xa=ha,_a=Object(f["a"])(xa,ca,ua,!1,null,null,null),ka=_a.exports;g()(_a,{VContainer:Vt["a"]}),o["a"].use(W["a"]);var ya=new W["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:jt},{path:"/Motoristas",name:"motoristas",component:Qt},{path:"/Passageiros",name:"passageiros",component:la},{path:"/Corridas",name:"corridas",component:ka}]});o["a"].use(u["a"]);var Ca=new u["a"].Store({state:{menu:!1},mutations:{fecharMenu:function(t){t.menu=!1},abrirMenu:function(t){t.menu=!0}},actions:{}}),Va=e("3a60"),Pa=e.n(Va),ja=e("2536"),wa=e.n(ja);e("2440"),o["a"].use(wa.a),o["a"].use(Pa.a),o["a"].config.productionTip=!1,new o["a"]({router:ya,store:Ca,render:function(t){return t(U)}}).$mount("#app")},fb48:function(t,a,e){}});
//# sourceMappingURL=app.65bc3155.js.map