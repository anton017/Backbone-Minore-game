this["JST"] = this["JST"] || {};

this["JST"]["Cell"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (isBoom, isOpened, numberAround) {
var jade_indent = [];
buf.push("\n<div" + (jade.cls(['cell',isOpened ? 'is-active': '',isBoom ? 'is-mine': ''], [null,true,true])) + ">" + (jade.escape(null == (jade_interp = numberAround) ? "" : jade_interp)) + "</div>");}.call(this,"isBoom" in locals_for_with?locals_for_with.isBoom:typeof isBoom!=="undefined"?isBoom:undefined,"isOpened" in locals_for_with?locals_for_with.isOpened:typeof isOpened!=="undefined"?isOpened:undefined,"numberAround" in locals_for_with?locals_for_with.numberAround:typeof numberAround!=="undefined"?numberAround:undefined));;return buf.join("");
};