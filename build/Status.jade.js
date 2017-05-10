this["JST"] = this["JST"] || {};

this["JST"]["Status"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (LOOSE_TEXT, WIN_TEXT, isLoose, isWin) {
var jade_indent = [];
buf.push("\n<div" + (jade.cls(['status',isLoose ? 'loose': '',isWin ? 'win': ''], [null,true,true])) + ">\n  <div class=\"result\">\n    <div class=\"title\">" + (jade.escape(null == (jade_interp = isLoose ? LOOSE_TEXT : WIN_TEXT) ? "" : jade_interp)) + "</div>\n    <button class=\"btn btn__yes\">Да</button>\n    <button class=\"btn btn__no\">Нет</button>\n  </div>\n</div>");}.call(this,"LOOSE_TEXT" in locals_for_with?locals_for_with.LOOSE_TEXT:typeof LOOSE_TEXT!=="undefined"?LOOSE_TEXT:undefined,"WIN_TEXT" in locals_for_with?locals_for_with.WIN_TEXT:typeof WIN_TEXT!=="undefined"?WIN_TEXT:undefined,"isLoose" in locals_for_with?locals_for_with.isLoose:typeof isLoose!=="undefined"?isLoose:undefined,"isWin" in locals_for_with?locals_for_with.isWin:typeof isWin!=="undefined"?isWin:undefined));;return buf.join("");
};