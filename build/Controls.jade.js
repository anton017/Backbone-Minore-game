this["JST"] = this["JST"] || {};

this["JST"]["Controls"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (openedNumber) {
var jade_indent = [];
buf.push("\n<div class=\"opened\">Открыто: <span class=\"opened-value\">" + (jade.escape(null == (jade_interp = openedNumber) ? "" : jade_interp)) + "</span></div>\n<button class=\"btn\">Сбросить</button>");}.call(this,"openedNumber" in locals_for_with?locals_for_with.openedNumber:typeof openedNumber!=="undefined"?openedNumber:undefined));;return buf.join("");
};