source = "<h3>{{title}}</h3><div>{{body}}</div>";
template = Handlebars.compile(source);
title = "ひげひげひげ";
body = "セクシーコマンドー外伝";
data = template({title:title,body:body});
var __args_0, __kwargs_0;
__args_0 = create_array(data);
__kwargs_0 = {};
var __args_1, __kwargs_1;
__args_1 = create_array("body .row ");
__kwargs_1 = {};
get_attribute(get_attribute(get_attribute(J, "__call__")(__args_1, __kwargs_1), "append"), "__call__")(__args_0, __kwargs_0);
console.log("logggg");