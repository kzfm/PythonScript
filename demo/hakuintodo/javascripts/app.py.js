var Events, __Events_attrs, __Events_parents;
__Events_attrs = {};
__Events_parents = create_array();
var __Events___init__ = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var __args_0, __kwargs_0;
__args_0 = create_array();
__kwargs_0 = {};
set_attribute(self, "events", get_attribute(dict, "__call__")(__args_0, __kwargs_0));
}

__Events_attrs.__init__ = __Events___init__;
var __Events_bind = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "event", "callback")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var event = arguments['event'];
var callback = arguments['callback'];
var evs, ev, lst;
var __args_1, __kwargs_1;
__args_1 = create_array();
__kwargs_1 = {};
evs = get_attribute(list, "__call__")(__args_1, __kwargs_1);
set_attribute(evs, "js_object", event.split());
var __iterator__, ev;
__iterator__ = get_attribute(get_attribute(evs, "__iter__"), "__call__")(create_array(), {});
try {
ev = get_attribute(__iterator__, "next")(create_array(), {});
while(true) {
var __args_2, __kwargs_2;
__args_2 = create_array();
__kwargs_2 = {};
var __args_3, __kwargs_3;
__args_3 = create_array(ev, get_attribute(list, "__call__")(__args_2, __kwargs_2));
__kwargs_3 = {};
lst = get_attribute(get_attribute(get_attribute(self, "events"), "get"), "__call__")(__args_3, __kwargs_3);
var __args_4, __kwargs_4;
__args_4 = create_array(callback);
__kwargs_4 = {};
get_attribute(get_attribute(lst, "append"), "__call__")(__args_4, __kwargs_4);
var __args_5, __kwargs_5;
__args_5 = create_array(ev, lst);
__kwargs_5 = {};
get_attribute(get_attribute(get_attribute(self, "events"), "set"), "__call__")(__args_5, __kwargs_5);
undefined;
undefined;
undefined;
ev = get_attribute(__iterator__, "next")(create_array(), {});
}
}
catch(__exception__) {
if (__exception__ == StopIteration || isinstance([__exception__, StopIteration])) {

}

}

}

__Events_attrs.bind = __Events_bind;
var __Events_trigger = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "ev", "args")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var ev = arguments['ev'];
var args = arguments['args'];
var lst, cb, args;
console.log(ev);
var __args_6, __kwargs_6;
__args_6 = create_array(ev);
__kwargs_6 = {};
lst = get_attribute(get_attribute(get_attribute(self, "events"), "get"), "__call__")(__args_6, __kwargs_6);
if(lst) {
var __iterator__, cb;
__iterator__ = get_attribute(get_attribute(lst, "__iter__"), "__call__")(create_array(), {});
try {
cb = get_attribute(__iterator__, "next")(create_array(), {});
while(true) {
if(args) {
var __args_7, __kwargs_7;
__args_7 = create_array(args);
__kwargs_7 = {};
get_attribute(cb, "__call__")(__args_7, __kwargs_7);
}
else {
var __args_8, __kwargs_8;
__args_8 = create_array();
__kwargs_8 = {};
get_attribute(cb, "__call__")(__args_8, __kwargs_8);
}

undefined;
cb = get_attribute(__iterator__, "next")(create_array(), {});
}
}
catch(__exception__) {
if (__exception__ == StopIteration || isinstance([__exception__, StopIteration])) {

}

}

}

}

__Events_attrs.trigger = __Events_trigger;
Events = create_class("Events", __Events_parents, __Events_attrs);
var __args_9, __kwargs_9;
__args_9 = create_array();
__kwargs_9 = {};
e = get_attribute(Events, "__call__")(__args_9, __kwargs_9);
_counter = 0;
var Model, __Model_attrs, __Model_parents;
__Model_attrs = {};
__Model_parents = create_array();
var __Model___init__ = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
set_attribute(self, "id", "c-" + _counter);
_counter = _counter + 1;
}

__Model_attrs.__init__ = __Model___init__;
var __Model_to_string = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
return "<" + get_attribute(get_attribute(self, "__class__"), "__name__") + "(" + get_attribute(self, "id") + ")>";
}

__Model_attrs.to_string = __Model_to_string;
var __Model_toJSON = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];

}

__Model_attrs.toJSON = __Model_toJSON;
var __Model_change = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "callback")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var callback = arguments['callback'];
if(callback) {
var __args_10, __kwargs_10;
__args_10 = create_array("change", callback);
__kwargs_10 = {};
get_attribute(get_attribute(e, "bind"), "__call__")(__args_10, __kwargs_10);
}
else {
var __args_11, __kwargs_11;
__args_11 = create_array("change");
__kwargs_11 = {};
get_attribute(get_attribute(e, "trigger"), "__call__")(__args_11, __kwargs_11);
}

}

__Model_attrs.change = __Model_change;
var __Model_fetch = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "callback")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var callback = arguments['callback'];
if(callback) {
var __args_12, __kwargs_12;
__args_12 = create_array("fetch", callback);
__kwargs_12 = {};
get_attribute(get_attribute(e, "bind"), "__call__")(__args_12, __kwargs_12);
}
else {
var __args_13, __kwargs_13;
__args_13 = create_array("fetch");
__kwargs_13 = {};
get_attribute(get_attribute(e, "trigger"), "__call__")(__args_13, __kwargs_13);
}

}

__Model_attrs.fetch = __Model_fetch;
var __Model_destroy = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var __args_14, __kwargs_14;
__args_14 = create_array("destroy", self);
__kwargs_14 = {};
get_attribute(get_attribute(e, "trigger"), "__call__")(__args_14, __kwargs_14);
}

__Model_attrs.destroy = __Model_destroy;
Model = create_class("Model", __Model_parents, __Model_attrs);
var Collection, __Collection_attrs, __Collection_parents;
__Collection_attrs = {};
__Collection_parents = create_array();
var __Collection___init__ = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var __args_15, __kwargs_15;
__args_15 = create_array();
__kwargs_15 = {};
set_attribute(self, "ids", get_attribute(dict, "__call__")(__args_15, __kwargs_15));
var __args_16, __kwargs_16;
__args_16 = create_array();
__kwargs_16 = {};
set_attribute(self, "models", get_attribute(list, "__call__")(__args_16, __kwargs_16));
var __args_17, __kwargs_17;
__args_17 = create_array("destroy", get_attribute(self, "remove_one"));
__kwargs_17 = {};
get_attribute(get_attribute(e, "bind"), "__call__")(__args_17, __kwargs_17);
}

__Collection_attrs.__init__ = __Collection___init__;
var __Collection_add_one = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "model")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var model = arguments['model'];
var __args_18, __kwargs_18;
__args_18 = create_array(get_attribute(model, "id"), model);
__kwargs_18 = {};
get_attribute(get_attribute(get_attribute(self, "ids"), "set"), "__call__")(__args_18, __kwargs_18);
var __args_19, __kwargs_19;
__args_19 = create_array(model);
__kwargs_19 = {};
get_attribute(get_attribute(get_attribute(self, "models"), "append"), "__call__")(__args_19, __kwargs_19);
var __args_20, __kwargs_20;
__args_20 = create_array("add", model);
__kwargs_20 = {};
get_attribute(get_attribute(e, "trigger"), "__call__")(__args_20, __kwargs_20);
}

__Collection_attrs.add_one = __Collection_add_one;
var __Collection_add = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "models")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var models = arguments['models'];
var __args_21, __kwargs_21;
__args_21 = create_array(models);
__kwargs_21 = {};
get_attribute(get_attribute(self, "add_one"), "__call__")(__args_21, __kwargs_21);
}

__Collection_attrs.add = __Collection_add;
var __Collection_remove = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "models")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var models = arguments['models'];
var __args_22, __kwargs_22;
__args_22 = create_array(models);
__kwargs_22 = {};
get_attribute(get_attribute(self, "remove_one"), "__call__")(__args_22, __kwargs_22);
}

__Collection_attrs.remove = __Collection_remove;
var __Collection_remove_one = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "model")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var model = arguments['model'];
if(get_attribute(get_attribute(model, "__class__"), "__name__") == "list") {
var __args_23, __kwargs_23;
__args_23 = create_array();
__kwargs_23 = {};
model = get_attribute(get_attribute(model, "pop"), "__call__")(__args_23, __kwargs_23);
}

var __args_24, __kwargs_24;
__args_24 = create_array();
__kwargs_24 = {};
new_ids = get_attribute(dict, "__call__")(__args_24, __kwargs_24);
var __args_25, __kwargs_25;
__args_25 = create_array();
__kwargs_25 = {};
new_models = get_attribute(list, "__call__")(__args_25, __kwargs_25);
var __args_26, __kwargs_26;
__args_26 = create_array();
__kwargs_26 = {};
ks = get_attribute(get_attribute(get_attribute(self, "ids"), "keys"), "__call__")(__args_26, __kwargs_26);
var __iterator__, k;
__iterator__ = get_attribute(get_attribute(ks, "__iter__"), "__call__")(create_array(), {});
try {
k = get_attribute(__iterator__, "next")(create_array(), {});
while(true) {
if(k != get_attribute(model, "id")) {
var __args_27, __kwargs_27;
__args_27 = create_array(k);
__kwargs_27 = {};
m = get_attribute(get_attribute(get_attribute(self, "ids"), "get"), "__call__")(__args_27, __kwargs_27);
var __args_28, __kwargs_28;
__args_28 = create_array(k, m);
__kwargs_28 = {};
get_attribute(get_attribute(new_ids, "set"), "__call__")(__args_28, __kwargs_28);
}

undefined;
k = get_attribute(__iterator__, "next")(create_array(), {});
}
}
catch(__exception__) {
if (__exception__ == StopIteration || isinstance([__exception__, StopIteration])) {

}

}

set_attribute(self, "ids", new_ids);
var __iterator__, m;
__iterator__ = get_attribute(get_attribute(get_attribute(self, "models"), "__iter__"), "__call__")(create_array(), {});
try {
m = get_attribute(__iterator__, "next")(create_array(), {});
while(true) {
if(get_attribute(m, "id") != get_attribute(model, "id")) {
var __args_29, __kwargs_29;
__args_29 = create_array(m);
__kwargs_29 = {};
get_attribute(get_attribute(new_models, "append"), "__call__")(__args_29, __kwargs_29);
}

undefined;
m = get_attribute(__iterator__, "next")(create_array(), {});
}
}
catch(__exception__) {
if (__exception__ == StopIteration || isinstance([__exception__, StopIteration])) {

}

}

set_attribute(self, "models", new_models);
var __args_30, __kwargs_30;
__args_30 = create_array("remove", model);
__kwargs_30 = {};
get_attribute(get_attribute(e, "trigger"), "__call__")(__args_30, __kwargs_30);
}

__Collection_attrs.remove_one = __Collection_remove_one;
Collection = create_class("Collection", __Collection_parents, __Collection_attrs);
var Controller, __Controller_attrs, __Controller_parents;
__Controller_attrs = {};
__Controller_parents = create_array();
var __Controller___init__ = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "tag", "el")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var tag = arguments['tag'];
var el = arguments['el'];
if(el == undefined) {
el = "<div></div>";
}

var __args_31, __kwargs_31;
__args_31 = create_array(el);
__kwargs_31 = {};
set_attribute(self, "el", get_attribute(J, "__call__")(__args_31, __kwargs_31));
}

__Controller_attrs.__init__ = __Controller___init__;
var __Controller_release = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
j = get_attribute(get_attribute(self, "el"), "j");
j.remove();
}

__Controller_attrs.release = __Controller_release;
Controller = create_class("Controller", __Controller_parents, __Controller_attrs);
var TaskModel, __TaskModel_attrs, __TaskModel_parents;
__TaskModel_attrs = {};
__TaskModel_parents = create_array();
__TaskModel_parents.push(Model);
var __TaskModel___init__ = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "name")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var name = arguments['name'];
var __args_32, __kwargs_32;
__args_32 = create_array(self);
__kwargs_32 = {};
get_attribute(get_attribute(Model, "__init__"), "__call__")(__args_32, __kwargs_32);
set_attribute(self, "name", name);
set_attribute(self, "done", false);
}

__TaskModel_attrs.__init__ = __TaskModel___init__;
TaskModel = create_class("TaskModel", __TaskModel_parents, __TaskModel_attrs);
var Task, __Task_attrs, __Task_parents;
__Task_attrs = {};
__Task_parents = create_array();
__Task_parents.push(Controller);
var __Task___init__ = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "model")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var model = arguments['model'];
var __args_33, __kwargs_33;
__args_33 = create_array(self, "div", undefined);
__kwargs_33 = {};
get_attribute(get_attribute(Controller, "__init__"), "__call__")(__args_33, __kwargs_33);
set_attribute(self, "model", model);
var __args_34, __kwargs_34;
__args_34 = create_array("item");
__kwargs_34 = {};
get_attribute(get_attribute(get_attribute(self, "el"), "addClass"), "__call__")(__args_34, __kwargs_34);
var __args_35, __kwargs_35;
__args_35 = create_array(".view", "dblclick", get_attribute(self, "edit"));
__kwargs_35 = {};
get_attribute(get_attribute(get_attribute(self, "el"), "delegate"), "__call__")(__args_35, __kwargs_35);
var __args_36, __kwargs_36;
__args_36 = create_array(".close", "click", get_attribute(self, "close"));
__kwargs_36 = {};
get_attribute(get_attribute(get_attribute(self, "el"), "delegate"), "__call__")(__args_36, __kwargs_36);
var __args_37, __kwargs_37;
__args_37 = create_array(".destroy", "click", get_attribute(self, "remove"));
__kwargs_37 = {};
get_attribute(get_attribute(get_attribute(self, "el"), "delegate"), "__call__")(__args_37, __kwargs_37);
}

__Task_attrs.__init__ = __Task___init__;
var __Task_html = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
source = "<div class='view'>{{name}}<a href='#' class='button destroy taskbutton'>x</a></div>" + "<div class='row collapse edit'><div class='large-10 columns'><input type='text' value={{name}}></div>" + "<div class='large-2 columns'><a class='button prefix close'>ok</a></div></div>";
template = Handlebars.compile(source);
name = get_attribute(get_attribute(self, "model"), "name");
data = template({name:name});
var __args_38, __kwargs_38;
__args_38 = create_array(data);
__kwargs_38 = {};
return get_attribute(get_attribute(get_attribute(self, "el"), "html"), "__call__")(__args_38, __kwargs_38);
}

__Task_attrs.html = __Task_html;
var __Task_edit = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var __args_39, __kwargs_39;
__args_39 = create_array("editing");
__kwargs_39 = {};
get_attribute(get_attribute(get_attribute(self, "el"), "addClass"), "__call__")(__args_39, __kwargs_39);
var __args_40, __kwargs_40;
__args_40 = create_array();
__kwargs_40 = {};
console.log("double clicked: " + get_attribute(get_attribute(get_attribute(self, "model"), "to_string"), "__call__")(__args_40, __kwargs_40));
}

__Task_attrs.edit = __Task_edit;
var __Task_close = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var __args_41, __kwargs_41;
__args_41 = create_array("editing");
__kwargs_41 = {};
get_attribute(get_attribute(get_attribute(self, "el"), "removeClass"), "__call__")(__args_41, __kwargs_41);
console.log("remove editing");
}

__Task_attrs.close = __Task_close;
var __Task_remove = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var __args_42, __kwargs_42;
__args_42 = create_array();
__kwargs_42 = {};
console.log("clicked: " + get_attribute(get_attribute(get_attribute(self, "model"), "to_string"), "__call__")(__args_42, __kwargs_42));
var __args_43, __kwargs_43;
__args_43 = create_array();
__kwargs_43 = {};
get_attribute(get_attribute(get_attribute(self, "model"), "destroy"), "__call__")(__args_43, __kwargs_43);
var __args_44, __kwargs_44;
__args_44 = create_array();
__kwargs_44 = {};
get_attribute(get_attribute(self, "release"), "__call__")(__args_44, __kwargs_44);
}

__Task_attrs.remove = __Task_remove;
Task = create_class("Task", __Task_parents, __Task_attrs);
var TaskList, __TaskList_attrs, __TaskList_parents;
__TaskList_attrs = {};
__TaskList_parents = create_array();
__TaskList_parents.push(Collection);
var __TaskList___init__ = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var __args_45, __kwargs_45;
__args_45 = create_array(self);
__kwargs_45 = {};
get_attribute(get_attribute(Collection, "__init__"), "__call__")(__args_45, __kwargs_45);
var __args_46, __kwargs_46;
__args_46 = create_array("remove", get_attribute(self, "rsay"));
__kwargs_46 = {};
get_attribute(get_attribute(e, "bind"), "__call__")(__args_46, __kwargs_46);
}

__TaskList_attrs.__init__ = __TaskList___init__;
var __TaskList_rsay = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "model")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var model = arguments['model'];
var __args_47, __kwargs_47;
__args_47 = create_array();
__kwargs_47 = {};
var __args_48, __kwargs_48;
__args_48 = create_array();
__kwargs_48 = {};
console.log("removed: " + get_attribute(get_attribute(get_attribute(get_attribute(model, "pop"), "__call__")(__args_48, __kwargs_48), "to_string"), "__call__")(__args_47, __kwargs_47));
var __iterator__, m;
__iterator__ = get_attribute(get_attribute(get_attribute(self, "models"), "__iter__"), "__call__")(create_array(), {});
try {
m = get_attribute(__iterator__, "next")(create_array(), {});
while(true) {
var __args_49, __kwargs_49;
__args_49 = create_array();
__kwargs_49 = {};
console.log(get_attribute(get_attribute(m, "to_string"), "__call__")(__args_49, __kwargs_49));
undefined;
m = get_attribute(__iterator__, "next")(create_array(), {});
}
}
catch(__exception__) {
if (__exception__ == StopIteration || isinstance([__exception__, StopIteration])) {

}

}

}

__TaskList_attrs.rsay = __TaskList_rsay;
TaskList = create_class("TaskList", __TaskList_parents, __TaskList_attrs);
var TaskApp, __TaskApp_attrs, __TaskApp_parents;
__TaskApp_attrs = {};
__TaskApp_parents = create_array();
__TaskApp_parents.push(Controller);
var __TaskApp___init__ = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "el", "collection")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var el = arguments['el'];
var collection = arguments['collection'];
var __args_50, __kwargs_50;
__args_50 = create_array(self, "div", el);
__kwargs_50 = {};
get_attribute(get_attribute(Controller, "__init__"), "__call__")(__args_50, __kwargs_50);
set_attribute(self, "collection", collection);
var __args_51, __kwargs_51;
__args_51 = create_array("#newtask");
__kwargs_51 = {};
button = get_attribute(J, "__call__")(__args_51, __kwargs_51);
var __args_52, __kwargs_52;
__args_52 = create_array("click", false, get_attribute(self, "create"));
__kwargs_52 = {};
get_attribute(get_attribute(button, "bind"), "__call__")(__args_52, __kwargs_52);
var __args_53, __kwargs_53;
__args_53 = create_array("add", get_attribute(self, "render"));
__kwargs_53 = {};
get_attribute(get_attribute(e, "bind"), "__call__")(__args_53, __kwargs_53);
}

__TaskApp_attrs.__init__ = __TaskApp___init__;
var __TaskApp_create = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var __args_54, __kwargs_54;
__args_54 = create_array("#taskinput");
__kwargs_54 = {};
j = get_attribute(get_attribute(J, "__call__")(__args_54, __kwargs_54), "j");
name = j.val();
if(name != "") {
var __args_55, __kwargs_55;
__args_55 = create_array(name);
__kwargs_55 = {};
var __args_56, __kwargs_56;
__args_56 = create_array(get_attribute(TaskModel, "__call__")(__args_55, __kwargs_55));
__kwargs_56 = {};
get_attribute(get_attribute(get_attribute(self, "collection"), "add"), "__call__")(__args_56, __kwargs_56);
var __args_57, __kwargs_57;
__args_57 = create_array("#taskinput");
__kwargs_57 = {};
j = get_attribute(get_attribute(J, "__call__")(__args_57, __kwargs_57), "j");
empty_text = "";
j.val(empty_text);
}

}

__TaskApp_attrs.create = __TaskApp_create;
var __TaskApp_render = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
console.log("render tasklist");
j = get_attribute(get_attribute(self, "el"), "j");
j.empty();
var __iterator__, m;
__iterator__ = get_attribute(get_attribute(get_attribute(get_attribute(self, "collection"), "models"), "__iter__"), "__call__")(create_array(), {});
try {
m = get_attribute(__iterator__, "next")(create_array(), {});
while(true) {
var __args_58, __kwargs_58;
__args_58 = create_array(m);
__kwargs_58 = {};
task = get_attribute(Task, "__call__")(__args_58, __kwargs_58);
var __args_59, __kwargs_59;
__args_59 = create_array();
__kwargs_59 = {};
var __args_60, __kwargs_60;
__args_60 = create_array(get_attribute(get_attribute(task, "html"), "__call__")(__args_59, __kwargs_59));
__kwargs_60 = {};
get_attribute(get_attribute(get_attribute(self, "el"), "append"), "__call__")(__args_60, __kwargs_60);
undefined;
undefined;
m = get_attribute(__iterator__, "next")(create_array(), {});
}
}
catch(__exception__) {
if (__exception__ == StopIteration || isinstance([__exception__, StopIteration])) {

}

}

}

__TaskApp_attrs.render = __TaskApp_render;
TaskApp = create_class("TaskApp", __TaskApp_parents, __TaskApp_attrs);
console.log("application start");
var __args_61, __kwargs_61;
__args_61 = create_array();
__kwargs_61 = {};
var __args_62, __kwargs_62;
__args_62 = create_array("#items", get_attribute(TaskList, "__call__")(__args_61, __kwargs_61));
__kwargs_62 = {};
get_attribute(TaskApp, "__call__")(__args_62, __kwargs_62);
