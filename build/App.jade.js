this["JST"] = this["JST"] || {};

this["JST"]["App"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (height, width) {
var jade_indent = [];
buf.push("\n<div id=\"controls\" class=\"controls\"></div>\n<div id=\"status\"></div>\n<div id=\"field\"" + (jade.attr("style", 'width:' + width + 'px; height:' + height + 'px', true, false)) + " class=\"field field-blocked\"></div>");}.call(this,"height" in locals_for_with?locals_for_with.height:typeof height!=="undefined"?height:undefined,"width" in locals_for_with?locals_for_with.width:typeof width!=="undefined"?width:undefined));;return buf.join("");
};