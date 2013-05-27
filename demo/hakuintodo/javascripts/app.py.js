Events = {};
parents = create_array();
var Events____init__ = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
set_attribute(self, "events", get_attribute(dict, "__call__")(create_array(), {}));
}

Events.__init__ = Events____init__;
var Events__bind = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self", "event", "callback")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
var event = arguments["event"];
var callback = arguments["callback"];
var evs, ev, lst;
evs = get_attribute(list, "__call__")(create_array(), {});
set_attribute(evs, "js_object", event.split(" "));
var __iterator__ = get_attribute(evs, "__iter__")(create_array(), {});
try {
var ev = get_attribute(__iterator__, "next")(create_array(), {});
while(true) {
lst = get_attribute(get_attribute(get_attribute(self, "events"), "get"), "__call__")(create_array(ev, get_attribute(list, "__call__")(create_array(), {})), {});
get_attribute(get_attribute(lst, "append"), "__call__")(create_array(callback), {});
get_attribute(get_attribute(get_attribute(self, "events"), "set"), "__call__")(create_array(ev, lst), {});
var ev = get_attribute(__iterator__, "next")(create_array(), {});
}
}
catch(__exception__) {

}

}

Events.bind = Events__bind;
var Events__trigger = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self", "ev"), "vararg": "args"};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
var ev = arguments["ev"];
var args = arguments["args"];
args = get_attribute(list, "__call__")(create_array(args), {});
var lst, cb, args;
lst = get_attribute(get_attribute(get_attribute(self, "events"), "get"), "__call__")(create_array(ev), {});
if(lst) {
var __iterator__ = get_attribute(lst, "__iter__")(create_array(), {});
try {
var cb = get_attribute(__iterator__, "next")(create_array(), {});
while(true) {
if(get_attribute(get_attribute(args, "__len__"), "__call__")(create_array(), {}) > 0) {
get_attribute(cb, "__call__")(create_array(args), {});
}
else {
get_attribute(cb, "__call__")(create_array(), {});
}

var cb = get_attribute(__iterator__, "next")(create_array(), {});
}
}
catch(__exception__) {

}

}
else {

}

}

Events.trigger = Events__trigger;
Events = create_class("Events", parents, Events);
e = get_attribute(Events, "__call__")(create_array(), {});
_counter = 0;
Model = {};
parents = create_array();
var Model____init__ = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
set_attribute(self, "id", "c-" + _counter);
_counter = _counter + 1;
}

Model.__init__ = Model____init__;
var Model__to_string = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
return "<" + get_attribute(get_attribute(self, "__class__"), "__name__") + "(" + get_attribute(self, "id") + ")>";
}

Model.to_string = Model__to_string;
var Model__toJSON = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];

}

Model.toJSON = Model__toJSON;
var Model__change = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self", "callback")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
var callback = arguments["callback"];
if(callback) {
get_attribute(get_attribute(e, "bind"), "__call__")(create_array("change", callback), {});
}
else {
get_attribute(get_attribute(e, "trigger"), "__call__")(create_array("change"), {});
}

}

Model.change = Model__change;
var Model__fetch = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self", "callback")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
var callback = arguments["callback"];
if(callback) {
get_attribute(get_attribute(e, "bind"), "__call__")(create_array("fetch", callback), {});
}
else {
get_attribute(get_attribute(e, "trigger"), "__call__")(create_array("fetch"), {});
}

}

Model.fetch = Model__fetch;
var Model__destroy = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
console.log("revoke destroy");
get_attribute(get_attribute(e, "trigger"), "__call__")(create_array("destroy", self), {});
}

Model.destroy = Model__destroy;
Model = create_class("Model", parents, Model);
Collection = {};
parents = create_array();
var Collection____init__ = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
set_attribute(self, "ids", get_attribute(dict, "__call__")(create_array(), {}));
set_attribute(self, "models", get_attribute(list, "__call__")(create_array(), {}));
get_attribute(get_attribute(e, "bind"), "__call__")(create_array("destroy", get_attribute(self, "remove_one")), {});
}

Collection.__init__ = Collection____init__;
var Collection__add_one = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self", "model")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
var model = arguments["model"];
get_attribute(get_attribute(get_attribute(self, "ids"), "set"), "__call__")(create_array(get_attribute(model, "id"), model), {});
get_attribute(get_attribute(get_attribute(self, "models"), "append"), "__call__")(create_array(model), {});
get_attribute(get_attribute(e, "trigger"), "__call__")(create_array("add", model), {});
}

Collection.add_one = Collection__add_one;
var Collection__add = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self", "models")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
var models = arguments["models"];
get_attribute(get_attribute(self, "add_one"), "__call__")(create_array(models), {});
}

Collection.add = Collection__add;
var Collection__remove = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self", "models")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
var models = arguments["models"];
get_attribute(get_attribute(self, "remove_one"), "__call__")(create_array(models), {});
}

Collection.remove = Collection__remove;
var Collection__remove_one = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self", "model")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
var model = arguments["model"];
if(get_attribute(get_attribute(model, "__class__"), "__name__") == "list") {
model = get_attribute(get_attribute(model, "pop"), "__call__")(create_array(), {});
}
else {

}

new_ids = get_attribute(dict, "__call__")(create_array(), {});
new_models = get_attribute(list, "__call__")(create_array(), {});
ks = get_attribute(get_attribute(get_attribute(self, "ids"), "keys"), "__call__")(create_array(), {});
var __iterator__ = get_attribute(ks, "__iter__")(create_array(), {});
try {
var k = get_attribute(__iterator__, "next")(create_array(), {});
while(true) {
if(k != get_attribute(model, "id")) {
m = get_attribute(get_attribute(get_attribute(self, "ids"), "get"), "__call__")(create_array(k), {});
get_attribute(get_attribute(new_ids, "set"), "__call__")(create_array(k, m), {});
}
else {

}

var k = get_attribute(__iterator__, "next")(create_array(), {});
}
}
catch(__exception__) {

}

set_attribute(self, "ids", new_ids);
var __iterator__ = get_attribute(get_attribute(self, "models"), "__iter__")(create_array(), {});
try {
var m = get_attribute(__iterator__, "next")(create_array(), {});
while(true) {
if(get_attribute(m, "id") != get_attribute(model, "id")) {
get_attribute(get_attribute(new_models, "append"), "__call__")(create_array(m), {});
}
else {

}

var m = get_attribute(__iterator__, "next")(create_array(), {});
}
}
catch(__exception__) {

}

set_attribute(self, "models", new_models);
get_attribute(get_attribute(e, "trigger"), "__call__")(create_array("remove", model), {});
}

Collection.remove_one = Collection__remove_one;
Collection = create_class("Collection", parents, Collection);
Controller = {};
parents = create_array();
var Controller____init__ = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self", "tag", "el")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
var tag = arguments["tag"];
var el = arguments["el"];
if(el == undefined) {
el = document.createElement("div");
}
else {

}

set_attribute(self, "el", get_attribute(J, "__call__")(create_array(el), {}));
}

Controller.__init__ = Controller____init__;
var Controller__release = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
j = get_attribute(get_attribute(self, "el"), "j");
j.remove();
}

Controller.release = Controller__release;
Controller = create_class("Controller", parents, Controller);
TaskModel = {};
parents = create_array();
parents.push(Model);
var TaskModel____init__ = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self", "name")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
var name = arguments["name"];
get_attribute(get_attribute(Model, "__init__"), "__call__")(create_array(self), {});
set_attribute(self, "name", name);
set_attribute(self, "done", false);
}

TaskModel.__init__ = TaskModel____init__;
TaskModel = create_class("TaskModel", parents, TaskModel);
Task = {};
parents = create_array();
parents.push(Controller);
var Task____init__ = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self", "model")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
var model = arguments["model"];
get_attribute(get_attribute(Controller, "__init__"), "__call__")(create_array(self, "div", undefined), {});
set_attribute(self, "model", model);
get_attribute(get_attribute(get_attribute(self, "el"), "addClass"), "__call__")(create_array("row"), {});
get_attribute(get_attribute(get_attribute(self, "el"), "addClass"), "__call__")(create_array("collapse"), {});
get_attribute(get_attribute(get_attribute(self, "el"), "bind"), "__call__")(create_array("click", false, get_attribute(self, "say")), {});
}

Task.__init__ = Task____init__;
var Task__html = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
test_str = "<div class='large-10 columns'>" + get_attribute(get_attribute(self, "model"), "name") + "</div>" + "<div class='large-2 columns'><a href='#' class='button success small expand taskbutton'>Done</a></div>";
return get_attribute(get_attribute(get_attribute(self, "el"), "html"), "__call__")(create_array(test_str), {});
}

Task.html = Task__html;
var Task__say = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
console.log("clicked: " + get_attribute(get_attribute(get_attribute(self, "model"), "to_string"), "__call__")(create_array(), {}));
get_attribute(get_attribute(get_attribute(self, "model"), "destroy"), "__call__")(create_array(), {});
get_attribute(get_attribute(self, "release"), "__call__")(create_array(), {});
}

Task.say = Task__say;
Task = create_class("Task", parents, Task);
TaskList = {};
parents = create_array();
parents.push(Collection);
var TaskList____init__ = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
get_attribute(get_attribute(Collection, "__init__"), "__call__")(create_array(self), {});
get_attribute(get_attribute(e, "bind"), "__call__")(create_array("remove", get_attribute(self, "rsay")), {});
}

TaskList.__init__ = TaskList____init__;
var TaskList__rsay = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self", "model")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
var model = arguments["model"];
console.log("removed: " + get_attribute(get_attribute(get_attribute(get_attribute(model, "pop"), "__call__")(create_array(), {}), "to_string"), "__call__")(create_array(), {}));
var __iterator__ = get_attribute(get_attribute(self, "models"), "__iter__")(create_array(), {});
try {
var m = get_attribute(__iterator__, "next")(create_array(), {});
while(true) {
console.log(get_attribute(get_attribute(m, "to_string"), "__call__")(create_array(), {}));
var m = get_attribute(__iterator__, "next")(create_array(), {});
}
}
catch(__exception__) {

}

}

TaskList.rsay = TaskList__rsay;
TaskList = create_class("TaskList", parents, TaskList);
TaskApp = {};
parents = create_array();
parents.push(Controller);
var TaskApp____init__ = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self", "el", "collection")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
var el = arguments["el"];
var collection = arguments["collection"];
get_attribute(get_attribute(Controller, "__init__"), "__call__")(create_array(self, "div", el), {});
set_attribute(self, "collection", collection);
button = get_attribute(J, "__call__")(create_array("#newtask"), {});
get_attribute(get_attribute(button, "bind"), "__call__")(create_array("click", false, get_attribute(self, "create")), {});
get_attribute(get_attribute(e, "bind"), "__call__")(create_array("add", get_attribute(self, "render")), {});
}

TaskApp.__init__ = TaskApp____init__;
var TaskApp__create = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
name = jQuery("#taskinput").val();
if(name != "") {
get_attribute(get_attribute(get_attribute(self, "collection"), "add"), "__call__")(create_array(get_attribute(TaskModel, "__call__")(create_array(name), {})), {});
}
else {

}

jQuery("#taskinput").val("");
}

TaskApp.create = TaskApp__create;
var TaskApp__render = function(args, kwargs) {
var signature = {"kwargs": {}, "args": create_array("self")};
var arguments = get_arguments(signature, args, kwargs);
var self = arguments["self"];
console.log("render tasklist");
j = get_attribute(get_attribute(self, "el"), "j");
j.empty();
var __iterator__ = get_attribute(get_attribute(get_attribute(self, "collection"), "models"), "__iter__")(create_array(), {});
try {
var m = get_attribute(__iterator__, "next")(create_array(), {});
while(true) {
task = get_attribute(Task, "__call__")(create_array(m), {});
h = get_attribute(get_attribute(task, "html"), "__call__")(create_array(), {});
get_attribute(get_attribute(get_attribute(self, "el"), "append"), "__call__")(create_array(h), {});
var m = get_attribute(__iterator__, "next")(create_array(), {});
}
}
catch(__exception__) {

}

}

TaskApp.render = TaskApp__render;
TaskApp = create_class("TaskApp", parents, TaskApp);
console.log("application start");
c = get_attribute(TaskApp, "__call__")(create_array(".items", get_attribute(TaskList, "__call__")(create_array(), {})), {});
