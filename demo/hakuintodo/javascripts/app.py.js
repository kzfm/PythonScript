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
var __args_0, __kwargs_0;
__args_0 = create_array(self);
__kwargs_0 = {};
get_attribute(get_attribute(Model, "__init__"), "__call__")(__args_0, __kwargs_0);
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
var __args_1, __kwargs_1;
__args_1 = create_array(self, "div", undefined);
__kwargs_1 = {};
get_attribute(get_attribute(Controller, "__init__"), "__call__")(__args_1, __kwargs_1);
set_attribute(self, "model", model);
var __args_2, __kwargs_2;
__args_2 = create_array("item");
__kwargs_2 = {};
get_attribute(get_attribute(get_attribute(self, "el"), "addClass"), "__call__")(__args_2, __kwargs_2);
var __args_3, __kwargs_3;
__args_3 = create_array(".view", "dblclick", get_attribute(self, "edit"));
__kwargs_3 = {};
get_attribute(get_attribute(get_attribute(self, "el"), "delegate"), "__call__")(__args_3, __kwargs_3);
var __args_4, __kwargs_4;
__args_4 = create_array(".close", "click", get_attribute(self, "close"));
__kwargs_4 = {};
get_attribute(get_attribute(get_attribute(self, "el"), "delegate"), "__call__")(__args_4, __kwargs_4);
var __args_5, __kwargs_5;
__args_5 = create_array(".destroy", "click", get_attribute(self, "remove"));
__kwargs_5 = {};
get_attribute(get_attribute(get_attribute(self, "el"), "delegate"), "__call__")(__args_5, __kwargs_5);
}

__Task_attrs.__init__ = __Task___init__;
var __Task_html = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
source = "<div class='row collapse view'><div class='large-10 columns'><input type='checkbox'>{{name}}<a href='#' class='destroy'></a></div></div>" + "<div class='row collapse edit'><div class='large-10 columns'><input type='text' value={{name}}></div>" + "<div class='large-2 columns'><a class='button prefix close'>ok</a></div></div>";
template = Handlebars.compile(source);
name = get_attribute(get_attribute(self, "model"), "name");
data = template({name:name});
var __args_6, __kwargs_6;
__args_6 = create_array(data);
__kwargs_6 = {};
return get_attribute(get_attribute(get_attribute(self, "el"), "html"), "__call__")(__args_6, __kwargs_6);
}

__Task_attrs.html = __Task_html;
var __Task_edit = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var __args_7, __kwargs_7;
__args_7 = create_array("editing");
__kwargs_7 = {};
get_attribute(get_attribute(get_attribute(self, "el"), "addClass"), "__call__")(__args_7, __kwargs_7);
var __args_8, __kwargs_8;
__args_8 = create_array();
__kwargs_8 = {};
console.log("double clicked: " + get_attribute(get_attribute(get_attribute(self, "model"), "to_string"), "__call__")(__args_8, __kwargs_8));
}

__Task_attrs.edit = __Task_edit;
var __Task_close = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var __args_9, __kwargs_9;
__args_9 = create_array("editing");
__kwargs_9 = {};
get_attribute(get_attribute(get_attribute(self, "el"), "removeClass"), "__call__")(__args_9, __kwargs_9);
var __args_10, __kwargs_10;
__args_10 = create_array("input[type=text]");
__kwargs_10 = {};
j = get_attribute(get_attribute(get_attribute(get_attribute(self, "el"), "find"), "__call__")(__args_10, __kwargs_10), "j");
name = j.val();
var __args_11, __kwargs_11;
__args_11 = create_array("name", name);
__kwargs_11 = {};
get_attribute(get_attribute(get_attribute(self, "model"), "updateAttribute"), "__call__")(__args_11, __kwargs_11);
}

__Task_attrs.close = __Task_close;
var __Task_remove = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var __args_12, __kwargs_12;
__args_12 = create_array();
__kwargs_12 = {};
console.log("clicked: " + get_attribute(get_attribute(get_attribute(self, "model"), "to_string"), "__call__")(__args_12, __kwargs_12));
var __args_13, __kwargs_13;
__args_13 = create_array();
__kwargs_13 = {};
get_attribute(get_attribute(get_attribute(self, "model"), "destroy"), "__call__")(__args_13, __kwargs_13);
var __args_14, __kwargs_14;
__args_14 = create_array();
__kwargs_14 = {};
get_attribute(get_attribute(self, "release"), "__call__")(__args_14, __kwargs_14);
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
var __args_15, __kwargs_15;
__args_15 = create_array(self);
__kwargs_15 = {};
get_attribute(get_attribute(Collection, "__init__"), "__call__")(__args_15, __kwargs_15);
var __args_16, __kwargs_16;
__args_16 = create_array("remove", get_attribute(self, "rsay"));
__kwargs_16 = {};
get_attribute(get_attribute(e, "bind"), "__call__")(__args_16, __kwargs_16);
}

__TaskList_attrs.__init__ = __TaskList___init__;
var __TaskList_rsay = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "model")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var model = arguments['model'];
var __args_17, __kwargs_17;
__args_17 = create_array();
__kwargs_17 = {};
var __args_18, __kwargs_18;
__args_18 = create_array();
__kwargs_18 = {};
console.log("removed: " + get_attribute(get_attribute(get_attribute(get_attribute(model, "pop"), "__call__")(__args_18, __kwargs_18), "to_string"), "__call__")(__args_17, __kwargs_17));
var __iterator__, m;
__iterator__ = get_attribute(get_attribute(get_attribute(self, "models"), "__iter__"), "__call__")(create_array(), {});
try {
m = get_attribute(__iterator__, "next")(create_array(), {});
while(true) {
var __args_19, __kwargs_19;
__args_19 = create_array();
__kwargs_19 = {};
console.log(get_attribute(get_attribute(m, "to_string"), "__call__")(__args_19, __kwargs_19));
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
var __args_20, __kwargs_20;
__args_20 = create_array(self, "div", el);
__kwargs_20 = {};
get_attribute(get_attribute(Controller, "__init__"), "__call__")(__args_20, __kwargs_20);
set_attribute(self, "collection", collection);
var __args_21, __kwargs_21;
__args_21 = create_array("#newtask");
__kwargs_21 = {};
button = get_attribute(J, "__call__")(__args_21, __kwargs_21);
var __args_22, __kwargs_22;
__args_22 = create_array("click", false, get_attribute(self, "create"));
__kwargs_22 = {};
get_attribute(get_attribute(button, "bind"), "__call__")(__args_22, __kwargs_22);
var __args_23, __kwargs_23;
__args_23 = create_array("add", get_attribute(self, "render"));
__kwargs_23 = {};
get_attribute(get_attribute(e, "bind"), "__call__")(__args_23, __kwargs_23);
var __args_24, __kwargs_24;
__args_24 = create_array("update", get_attribute(self, "render"));
__kwargs_24 = {};
get_attribute(get_attribute(e, "bind"), "__call__")(__args_24, __kwargs_24);
}

__TaskApp_attrs.__init__ = __TaskApp___init__;
var __TaskApp_create = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var __args_25, __kwargs_25;
__args_25 = create_array("#taskinput");
__kwargs_25 = {};
j = get_attribute(get_attribute(J, "__call__")(__args_25, __kwargs_25), "j");
name = j.val();
if(name != "") {
var __args_26, __kwargs_26;
__args_26 = create_array(name);
__kwargs_26 = {};
var __args_27, __kwargs_27;
__args_27 = create_array(get_attribute(TaskModel, "__call__")(__args_26, __kwargs_26));
__kwargs_27 = {};
get_attribute(get_attribute(get_attribute(self, "collection"), "add"), "__call__")(__args_27, __kwargs_27);
var __args_28, __kwargs_28;
__args_28 = create_array("#taskinput");
__kwargs_28 = {};
j = get_attribute(get_attribute(J, "__call__")(__args_28, __kwargs_28), "j");
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
var __args_29, __kwargs_29;
__args_29 = create_array(m);
__kwargs_29 = {};
task = get_attribute(Task, "__call__")(__args_29, __kwargs_29);
var __args_30, __kwargs_30;
__args_30 = create_array();
__kwargs_30 = {};
var __args_31, __kwargs_31;
__args_31 = create_array(get_attribute(get_attribute(task, "html"), "__call__")(__args_30, __kwargs_30));
__kwargs_31 = {};
get_attribute(get_attribute(get_attribute(self, "el"), "append"), "__call__")(__args_31, __kwargs_31);
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
var __args_32, __kwargs_32;
__args_32 = create_array();
__kwargs_32 = {};
var __args_33, __kwargs_33;
__args_33 = create_array("#items", get_attribute(TaskList, "__call__")(__args_32, __kwargs_32));
__kwargs_33 = {};
get_attribute(TaskApp, "__call__")(__args_33, __kwargs_33);
