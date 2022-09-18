!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.TwoColumns=t())}(self,()=>(()=>{var e={"ckeditor5/src/core.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/core.js")},"ckeditor5/src/ui.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/ui.js")},"ckeditor5/src/widget.js":(e,t,o)=>{e.exports=o("dll-reference CKEditor5.dll")("./src/widget.js")},"dll-reference CKEditor5.dll":e=>{"use strict";e.exports=CKEditor5.dll}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,o),s.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n={};return(()=>{"use strict";o.d(n,{default:()=>c});var e=o("ckeditor5/src/core.js"),t=o("ckeditor5/src/widget.js");class r extends e.Command{execute(){const{model:e}=this.editor;e.change(t=>{const o=t.createElement("twoColumns"),n=t.createElement("column"),r=t.createElement("column");t.append(n,o),t.append(r,o);const s=t.createElement("paragraph");t.append(s,n),t.appendElement("paragraph",r),e.insertContent(o),t.setSelection(s,"in")})}refresh(){const{model:e}=this.editor,{selection:t}=e.document,o=e.schema.findAllowedParent(t.getFirstPosition(),"twoColumns");this.isEnabled=null!==o}}class s extends e.Plugin{static get requires(){return[t.Widget]}init(){this._defineSchema(),this._defineConverters(),this.editor.commands.add("insertTwoColumns",new r(this.editor))}_defineSchema(){const e=this.editor.model.schema;e.register("twoColumns",{isObject:!0,allowWhere:"$block"}),e.register("column",{isLimit:!0,allowIn:"twoColumns",allowContentOf:"$root"})}_defineConverters(){this._defineColumnsContainerConverters(),this._defineColumnConverters()}_defineColumnsContainerConverters(){const{conversion:e}=this.editor,o={model:"twoColumns",view:{name:"section",classes:"layout--two-col"}};e.for("upcast").elementToElement(o),e.for("dataDowncast").elementToElement(o),e.for("editingDowncast").elementToElement({model:"twoColumns",view:(e,{writer:o})=>{const n=o.createContainerElement("section",{class:"layout--two-col"});return(0,t.toWidget)(n,o,{label:"Two col layout widget"})}})}_defineColumnConverters(){const{conversion:e}=this.editor,o={model:"column",view:{name:"div",classes:"layout__col"}};e.for("upcast").elementToElement(o),e.for("dataDowncast").elementToElement(o),e.for("editingDowncast").elementToElement({model:"column",view:(e,{writer:o})=>{const n=o.createEditableElement("div",{class:"layout__col"});return(0,t.toWidgetEditable)(n,o)}})}}var i=o("ckeditor5/src/ui.js");class l extends e.Plugin{init(){const e=this.editor;e.ui.componentFactory.add("twoColumns",t=>{const o=e.commands.get("insertTwoColumns"),n=new i.ButtonView(t);return n.set({label:e.t("Two Col"),icon:'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.95154 2.6825C1.95154 2.13021 2.39925 1.6825 2.95154 1.6825H17.0484C17.6007 1.6825 18.0484 2.13021 18.0484 2.6825V17C18.0484 17.5523 17.6007 18 17.0484 18H2.95154C2.39925 18 1.95154 17.5523 1.95154 17V2.6825ZM3.49994 4.34131C3.49994 3.78902 3.94765 3.34131 4.49994 3.34131H9.49994V16.3413H4.49994C3.94765 16.3413 3.49994 15.8936 3.49994 15.3413V4.34131ZM15.5 3.34131H10.5V16.3413H15.5C16.0523 16.3413 16.5 15.8936 16.5 15.3413V4.34131C16.5 3.78902 16.0523 3.34131 15.5 3.34131Z" fill="black"/></svg>\n',tooltip:!0}),n.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(n,"execute",()=>{e.execute("insertTwoColumns")}),n})}}class d extends e.Plugin{static get requires(){return[s,l]}}const c={TwoColumns:d}})(),n=n.default})());