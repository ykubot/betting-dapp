webpackJsonp([1],{"/1xV":function(e,n){},"5W1q":function(e,n){},EEbw:function(e,n){e.exports={version:"0.20.5"}},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("7+uW"),s={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var o=t("VU/8")({name:"App"},s,!1,function(e){t("n1d8")},null,null).exports,i=t("/ocq"),c={1:"Main Net",2:"Deprecated Morden test network",3:"Ropsten test network",4:"Rinkeby test network",42:"Kovan test network",4447:"Truffle Develop Network",5777:"Ganache Blockchain"},r=t("NYxO"),u={name:"hello-metamask",computed:Object(r.b)({isInjected:function(e){return e.web3.isInjected},network:function(e){return c[e.web3.networkId]},coinbase:function(e){return e.web3.coinbase},balance:function(e){return e.web3.balance},ethBalance:function(e){if(null!==e.web3.web3Instance)return e.web3.web3Instance().fromWei(e.web3.balance,"ether")}})},p={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"metamask-info"},[e.isInjected?t("p",{attrs:{id:"has-metamask"}},[t("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}}),e._v(" Metamask installed")]):t("p",{attrs:{id:"no-metamask"}},[t("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}}),e._v(" Metamask not found")]),e._v(" "),t("p",[e._v("Network: "+e._s(e.network))]),e._v(" "),t("p",[e._v("Account: "+e._s(e.coinbase))]),e._v(" "),t("p",[e._v("Balance: "+e._s(e.balance)+" Wei // "+e._s(e.ethBalance)+" Eth")])])},staticRenderFns:[]};var m={name:"casino",mounted:function(){console.log("dispatching getContractInstance"),this.$store.dispatch("getContractInstance")},data:function(){return{amount:null,pending:!1,winEvent:null}},methods:{clickNumber:function(e){var n=this;console.log(e.target.innerHTML,this.amount),this.winEvent=null,this.pending=!0,this.$store.state.contractInstance().bet(e.target.innerHTML,{gas:3e5,value:this.$store.state.web3.web3Instance().toWei(this.amount,"ether"),from:this.$store.state.web3.coinbase},function(e,t){e?(console.log(e),n.pending=!1):n.$store.state.contractInstance().Won().watch(function(e,t){e?console.log("could not get event Won()"):(n.winEvent=t.args,n.winEvent._amount=parseInt(t.args._amount,10),n.pending=!1)})})}}},d={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"casino"},[t("h1",[e._v("Welcome to the Casino")]),e._v(" "),t("h4",[e._v("Please pick a number between 1 and 10")]),e._v(" Amount to bet: "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],attrs:{placeholder:"0 Ether"},domProps:{value:e.amount},on:{input:function(n){n.target.composing||(e.amount=n.target.value)}}}),e._v(" "),t("ul",[t("li",{on:{click:e.clickNumber}},[e._v("1")]),e._v(" "),t("li",{on:{click:e.clickNumber}},[e._v("2")]),e._v(" "),t("li",{on:{click:e.clickNumber}},[e._v("3")]),e._v(" "),t("li",{on:{click:e.clickNumber}},[e._v("4")]),e._v(" "),t("li",{on:{click:e.clickNumber}},[e._v("5")]),e._v(" "),t("li",{on:{click:e.clickNumber}},[e._v("6")]),e._v(" "),t("li",{on:{click:e.clickNumber}},[e._v("7")]),e._v(" "),t("li",{on:{click:e.clickNumber}},[e._v("8")]),e._v(" "),t("li",{on:{click:e.clickNumber}},[e._v("9")]),e._v(" "),t("li",{on:{click:e.clickNumber}},[e._v("10")])]),e._v(" "),e.pending?t("img",{attrs:{id:"loader",src:"https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif"}}):e._e(),e._v(" "),e.winEvent?t("div",{staticClass:"event"},[e.winEvent._status?t("p",{attrs:{id:"has-won"}},[t("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}}),e._v(" Congragulations, you have won "+e._s(e.winEvent._amount)+" wei")]):t("p",{attrs:{id:"has-lost"}},[t("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}}),e._v(" Sorry you lost, try again.")])]):e._e()])},staticRenderFns:[]};var l={name:"casino-dapp",beforeCreate:function(){console.log("registerWeb3 Action dispatched from casino-dapp.vue"),this.$store.dispatch("registerWeb3")},components:{"hello-metamask":t("VU/8")(u,p,!1,function(e){t("/1xV")},"data-v-69d75b3f",null).exports,"casino-component":t("VU/8")(m,d,!1,function(e){t("u0M+")},"data-v-1a883bd0",null).exports}},b={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("casino-component"),this._v(" "),n("hello-metamask")],1)},staticRenderFns:[]};var y=t("VU/8")(l,b,!1,function(e){t("oO1N")},"data-v-0836d353",null).exports;a.a.use(i.a);var f=new i.a({routes:[{path:"/",name:"casino-dapp",component:y}]}),v={web3:{isInjected:!1,web3Instance:null,networkId:null,coinbase:null,balance:null,error:null},contractInstance:null},w=t("woOf"),_=t.n(w),g=t("//Fk"),h=t.n(g),k=t("8k0n"),I=t.n(k),x=new h.a(function(e,n){var t=window.web3;if(void 0!==t){var a=new I.a(t.currentProvider);e({injectedWeb3:a.isConnected(),web3:function(){return a}})}else n(new Error("Unable to connect to Metamask"))}).then(function(e){return new h.a(function(n,t){e.web3().version.getNetwork(function(a,s){a?t(new Error("Unable to retrieve network ID")):(e=_()({},e,{networkId:s}),n(e))})})}).then(function(e){return new h.a(function(n,t){e.web3().eth.getCoinbase(function(a,s){a?t(new Error("Unable to retrieve coinbase")):(e=_()({},e,{coinbase:s}),n(e))})})}).then(function(e){return new h.a(function(n,t){e.web3().eth.getBalance(e.coinbase,function(a,s){a?t(new Error("Unable to retrieve balance for address: "+e.coinbase)):(e=_()({},e,{balance:s}),n(e))})})}),W=function(e){var n=window.web3;n=new I.a(n.currentProvider),setInterval(function(){if(n&&E.state.web3.web3Instance)if(n.eth.coinbase!==E.state.web3.coinbase){var e=n.eth.coinbase;n.eth.getBalance(n.eth.coinbase,function(n,t){n?console.log(n):E.dispatch("pollWeb3",{coinbase:e,balance:parseInt(t,10)})})}else n.eth.getBalance(E.state.web3.coinbase,function(e,n){e?console.log(e):parseInt(n,10)!==E.state.web3.balance&&E.dispatch("pollWeb3",{coinbase:E.state.web3.coinbase,balance:n})})},500)},C=[{constant:!1,inputs:[],name:"kill",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"checkContractBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_number",type:"uint256"}],name:"bet",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{inputs:[{name:"_minBet",type:"uint256"},{name:"_houseEdge",type:"uint256"}],payable:!0,stateMutability:"payable",type:"constructor"},{payable:!1,stateMutability:"nonpayable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!1,name:"_status",type:"bool"},{indexed:!1,name:"_amount",type:"uint256"}],name:"Won",type:"event"}],N=new h.a(function(e,n){e(new I.a(window.web3.currentProvider).eth.contract(C).at("0x76c3128aa6a9ae77dfdc72f4a527878c27b8fc3b"))});a.a.use(r.a);var E=new r.a.Store({strict:!0,state:v,mutations:{registerWeb3Instance:function(e,n){console.log("registerWeb3instance Mutation being executed",n);var t=n,a=e.web3;a.coinbase=t.coinbase,a.networkId=t.networkId,a.balance=parseInt(t.balance,10),a.isInjected=t.injectedWeb3,a.web3Instance=t.web3,e.web3=a,W()},pollWeb3Instance:function(e,n){console.log("pollWeb3Instance mutation being executed",n),e.web3.coinbase=n.coinbase,e.web3.balance=parseInt(n.balance,10)},registerContractInstance:function(e,n){console.log("Casino contract instance: ",n),e.contractInstance=function(){return n}}},actions:{registerWeb3:function(e){var n=e.commit;console.log("registerWeb3 Action being executed"),x.then(function(e){console.log("committing result to registerWeb3Instance mutation"),n("registerWeb3Instance",e)}).catch(function(e){console.log("error in action registerWeb3",e)})},pollWeb3:function(e,n){var t=e.commit;console.log("pollWeb3 action being executed"),t("pollWeb3Instance",n)},getContractInstance:function(e){var n=e.commit;N.then(function(e){n("registerContractInstance",e)}).catch(function(e){return console.log(e)})}}});t("5W1q");a.a.config.productionTip=!1,new a.a({el:"#app",router:f,store:E,components:{App:o},template:"<App/>"})},"R/pS":function(e,n){e.exports=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"name",outputs:[{name:"o_name",type:"bytes32"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"content",outputs:[{name:"",type:"bytes32"}],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"addr",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"reserve",outputs:[],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"subRegistrar",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_newOwner",type:"address"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_registrar",type:"address"}],name:"setSubRegistrar",outputs:[],type:"function"},{constant:!1,inputs:[],name:"Registrar",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_a",type:"address"},{name:"_primary",type:"bool"}],name:"setAddress",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_content",type:"bytes32"}],name:"setContent",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"disown",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"_name",type:"bytes32"},{indexed:!1,name:"_winner",type:"address"}],name:"AuctionEnded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_name",type:"bytes32"},{indexed:!1,name:"_bidder",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"NewBid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"}],name:"Changed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"},{indexed:!0,name:"addr",type:"address"}],name:"PrimaryChanged",type:"event"}]},UIsv:function(e,n){e.exports=[{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_refund",type:"address"}],name:"disown",outputs:[],type:"function"},{constant:!0,inputs:[{name:"_name",type:"bytes32"}],name:"addr",outputs:[{name:"",type:"address"}],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"}],name:"reserve",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_newOwner",type:"address"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"_name",type:"bytes32"},{name:"_a",type:"address"}],name:"setAddr",outputs:[],type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"name",type:"bytes32"}],name:"Changed",type:"event"}]},n1d8:function(e,n){},oO1N:function(e,n){},oPsS:function(e,n){e.exports=[{constant:!1,inputs:[{name:"from",type:"bytes32"},{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"from",type:"bytes32"},{name:"to",type:"address"},{name:"indirectId",type:"bytes32"},{name:"value",type:"uint256"}],name:"icapTransfer",outputs:[],type:"function"},{constant:!1,inputs:[{name:"to",type:"bytes32"}],name:"deposit",outputs:[],payable:!0,type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"AnonymousDeposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"bytes32"},{indexed:!1,name:"value",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"bytes32"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"bytes32"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"indirectId",type:"bytes32"},{indexed:!1,name:"value",type:"uint256"}],name:"IcapTransfer",type:"event"}]},"u0M+":function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.aa0f13b3b5dd8a48da30.js.map