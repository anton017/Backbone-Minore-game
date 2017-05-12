this["JST"] = this["JST"] || {};

this["JST"]["Status"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (isLoose, isWinner, title) {
var jade_indent = [];
buf.push("\n<div" + (jade.cls(['status',isLoose ? 'loose': '',isWinner ? 'win': ''], [null,true,true])) + ">\n  <div class=\"result\">\n    <div class=\"title\">" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</div>\n    <button class=\"btn _statusButtonYes\">Да</button>\n    <button class=\"btn _statusButtonNo\">Нет</button>\n  </div>\n</div>");}.call(this,"isLoose" in locals_for_with?locals_for_with.isLoose:typeof isLoose!=="undefined"?isLoose:undefined,"isWinner" in locals_for_with?locals_for_with.isWinner:typeof isWinner!=="undefined"?isWinner:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return buf.join("");
};