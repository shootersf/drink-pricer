(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(7),s=a.n(l),r=(a(15),a(8)),c=a(1),o=a(2),u=a(4),m=a(3),v=a(5);var d=function(e){var t=e.option,a=e.optionSelected;return i.a.createElement("div",{className:"col s12"},i.a.createElement("button",{className:"btn",onClick:function(){a(t)}},t))};var p=function(e){var t=e.options,a=e.optionSelected,n=t.map(function(e){return i.a.createElement(d,{key:e,option:e,optionSelected:a})});return i.a.createElement("div",{className:"container"},n)};var f=function(e){var t=e.getItems().map(function(e){return e.category});return i.a.createElement("div",{className:"green-text text-darken-2"},i.a.createElement("h3",null,"Please Select the Type of Product:"),i.a.createElement(p,{options:t,optionSelected:function(t){var a={category:t},n=e.getItem(t);n.multiPack&&!n.singlePack?a.isSingle=!1:!n.multiPack&&n.singlePack&&(a.isSingle=!0,a.qty=1),e.updateFinal(a)}}))};var g=function(e){var t=["Individually","By Case"],a=e.currentFinal.category.charAt(0).toUpperCase()+e.currentFinal.category.slice(1).toLowerCase();return i.a.createElement("div",{className:"green-text text-darken-2"},i.a.createElement("h3",null,"Is the ",a," priced individually or by case? "),i.a.createElement(p,{options:t,optionSelected:function(a){var n={};a===t[0]?(n.isSingle=!0,n.qty=1):n.isSingle=!1,e.updateFinal(n)}}))},h=a(9);var b=function(e){var t=e.int,a=void 0===t||t,n=e.min,l=void 0===n?"1":n,s=e.currency,r=void 0!==s&&s,c=e.placeholder,o=void 0===c?"1":c,u=e.label,m=a?"1":"0.01",v=r?"fas fa-euro-sign prefix":"hide";return i.a.createElement("div",{className:"input-field"},i.a.createElement("i",{className:v}),i.a.createElement("label",{className:"active"},u),i.a.createElement("input",{type:"number",min:l,step:m,value:e.value,placeholder:o,onChange:function(t){var n=t.target.value,i=function(e){var t=a?/^\d+$/:/^\d*\.?\d{1,2}$/;return!(isNaN(e)||e<l||!t.test(e))}(n);e.updateValue({value:n,valid:i})}}))},E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).quantitySubmitted=function(e){e.preventDefault(),a.props.submit(a.state.value)},a.updateValue=function(e){var t=e.value,n=e.valid;a.setState({value:t,valid:n})},a.state={},a.state.value=a.props.value,a.state.valid=!!a.props.value,a}return Object(v.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.submitValue,e.buttonText),a=void 0===t?"SUBMIT":t,n=(e.value,Object(h.a)(e,["submitValue","buttonText","value"]));return i.a.createElement("form",{onSubmit:this.quantitySubmitted},i.a.createElement(b,Object.assign({},n,{value:this.state.value,updateValue:this.updateValue})),i.a.createElement("button",{className:"btn",disabled:!this.state.valid},a))}}]),t}(n.Component);var y=function(e){return i.a.createElement("div",{className:"green-text text-darken-2"},i.a.createElement("h3",null,"Please enter the No. of bottles per case:"),i.a.createElement(E,{value:"",submit:function(t){var a={qty:t};e.updateFinal(a)},label:"No. of bottles:"}))};var N=function(e){var t=e.getItem(e.currentFinal.category),a=t.sizesText;return i.a.createElement("div",{className:"green-text text-darken-2"},i.a.createElement("h3",null,"Please Select size of Product:"),i.a.createElement(p,{options:a,optionSelected:function(a){var n=t.sizesText.indexOf(a),i={size:t.sizes[n],sizeText:a};e.updateFinal(i)}}))};var S=function(e){var t=e.getItem(e.currentFinal.category),a=t.servingsText;return i.a.createElement("div",{className:"green-text text-darken-2"},i.a.createElement("h3",null,"Please Select serving size of Product:"),i.a.createElement(p,{options:a,optionSelected:function(a){var n=t.servingsText.indexOf(a),i={servingSize:t.servings[n],servingSizeText:a};e.updateFinal(i)}}))};var x=function(e){var t=e.currentFinal.isSingle?"Please enter the cost price:":"Please enter the cost price per case:";return i.a.createElement("div",{className:"green-text text-darken-2"},i.a.createElement("h3",null,t),i.a.createElement(E,{value:"",int:!1,currency:!0,min:"0.01",submit:function(t){var a={cost:t};e.updateFinal(a)},label:"Price \u20ac"}))},k=function(e){function t(e){var a;Object(c.a)(this,t),a=Object(u.a)(this,Object(m.a)(t).call(this,e));var n=e.final,i=(n.cost/n.qty/(n.size/n.servingSize)).toFixed(2);return a.state={cost:i,salePrice:i,markup:0,pouringCost:null,profit:0,focusedInput:null},a}return Object(v.a)(t,e),Object(o.a)(t,[{key:"inputFocusHandler",value:function(e){var t=e.target;t.select(),this.setState({focusedInput:t})}},{key:"updateSalePrice",value:function(e){var t=Number(e.target.value);if(this.setState({salePrice:t}),!isNaN(t)&&t>0&&/^\d*\.?\d{1,2}$/.test(t)){var a=(t-this.state.cost).toFixed(2),n=(100*a/this.state.cost).toFixed(2);this.setState({profit:a,markup:n})}}},{key:"render",value:function(){console.log(this.state);var e="fas fa-euro-sign prefix",t="Final Costing per "+this.props.final.servingSizeText+":";return i.a.createElement("div",{className:"final green-text text-darken-2"},i.a.createElement("h3",null,t),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s4"},i.a.createElement("i",{className:e}),i.a.createElement("label",{className:"active"},"Cost Price:"),i.a.createElement("input",{type:"number",value:this.state.cost,disabled:!0})),i.a.createElement("div",{className:"input-field col s4"},i.a.createElement("i",{className:e}),i.a.createElement("label",{className:"active"},"Sale Price:"),i.a.createElement("input",{type:"number",id:"salePrice",onFocus:this.inputFocusHandler.bind(this),min:"0",step:"0.01",value:this.state.salePrice,onChange:this.updateSalePrice.bind(this)})),i.a.createElement("div",{className:"input-field col s4"},i.a.createElement("i",{className:"fas fa-percentage prefix"}),i.a.createElement("label",{className:"active"},"Markup: "),i.a.createElement("input",{type:"number",value:this.state.markup,disabled:!0}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"input-field col s4"},i.a.createElement("i",{className:e}),i.a.createElement("label",{className:"active"},"Profit: "),i.a.createElement("input",{type:"number",value:this.state.profit,disabled:!0}))))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={stages:[{component:f,isNull:"category"},{component:g,isNull:"isSingle"},{component:y,isNull:"qty"},{component:N,isNull:"size"},{component:S,isNull:"servingSize"},{component:x,isNull:"cost"}],final:{category:null,isSingle:null,qty:null,size:null,servingSize:null,cost:null}},a}return Object(v.a)(t,e),Object(o.a)(t,[{key:"getItems",value:function(){return this.props.items}},{key:"getItem",value:function(e){return this.props.items.find(function(t){return t.category===e})}},{key:"updateFinal",value:function(e){var t=this;this.setState({final:Object(r.a)({},this.state.final,e)},function(){console.log(t.state.final)})}},{key:"getCompenentForStage",value:function(){for(var e=null,t=0;t<this.state.stages.length;t++){var a=this.state.stages[t].isNull;if(null===this.state.final[a]){e=this.state.stages[t].component;break}}return e?i.a.createElement(e,{currentFinal:this.state.final,updateFinal:this.updateFinal.bind(this),getItems:this.getItems.bind(this),getItem:this.getItem.bind(this)}):i.a.createElement(k,{final:this.state.final})}},{key:"render",value:function(){var e=this.getCompenentForStage();return i.a.createElement("div",{className:"App center-align container"},e)}}]),t}(n.Component);P.defaultProps={items:[{category:"KEG",multiPack:!1,singlePack:!0,sizesText:["50L","30L"],sizes:[5e4,3e4],servingsText:["Pint","Half-Pint"],servings:[568,284]},{category:"SPIRIT",multiPack:!0,singlePack:!0,sizesText:["700ml","1L","1.5L"],sizes:[700,1e3,1500],servingsText:["35.5ml","50ml","71ml"],servings:[35.5,50,71]}]};var F=P;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.5d4b5cea.chunk.js.map