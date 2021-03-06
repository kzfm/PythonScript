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
var __Model_updateAttribute = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "name", "value")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var name = arguments['name'];
var value = arguments['value'];
var __args_15, __kwargs_15;
__args_15 = create_array(self, name, value);
__kwargs_15 = {};
get_attribute(setattr, "__call__")(__args_15, __kwargs_15);
var __args_16, __kwargs_16;
__args_16 = create_array("update");
__kwargs_16 = {};
get_attribute(get_attribute(e, "trigger"), "__call__")(__args_16, __kwargs_16);
}

__Model_attrs.updateAttribute = __Model_updateAttribute;
Model = create_class("Model", __Model_parents, __Model_attrs);
var Collection, __Collection_attrs, __Collection_parents;
__Collection_attrs = {};
__Collection_parents = create_array();
var __Collection___init__ = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var __args_17, __kwargs_17;
__args_17 = create_array();
__kwargs_17 = {};
set_attribute(self, "ids", get_attribute(dict, "__call__")(__args_17, __kwargs_17));
var __args_18, __kwargs_18;
__args_18 = create_array();
__kwargs_18 = {};
set_attribute(self, "models", get_attribute(list, "__call__")(__args_18, __kwargs_18));
var __args_19, __kwargs_19;
__args_19 = create_array("destroy", get_attribute(self, "remove_one"));
__kwargs_19 = {};
get_attribute(get_attribute(e, "bind"), "__call__")(__args_19, __kwargs_19);
}

__Collection_attrs.__init__ = __Collection___init__;
var __Collection_add_one = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "model")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var model = arguments['model'];
var __args_20, __kwargs_20;
__args_20 = create_array(get_attribute(model, "id"), model);
__kwargs_20 = {};
get_attribute(get_attribute(get_attribute(self, "ids"), "set"), "__call__")(__args_20, __kwargs_20);
var __args_21, __kwargs_21;
__args_21 = create_array(model);
__kwargs_21 = {};
get_attribute(get_attribute(get_attribute(self, "models"), "append"), "__call__")(__args_21, __kwargs_21);
var __args_22, __kwargs_22;
__args_22 = create_array("add", model);
__kwargs_22 = {};
get_attribute(get_attribute(e, "trigger"), "__call__")(__args_22, __kwargs_22);
}

__Collection_attrs.add_one = __Collection_add_one;
var __Collection_add = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "models")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var models = arguments['models'];
var __args_23, __kwargs_23;
__args_23 = create_array(models);
__kwargs_23 = {};
get_attribute(get_attribute(self, "add_one"), "__call__")(__args_23, __kwargs_23);
}

__Collection_attrs.add = __Collection_add;
var __Collection_remove = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "models")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var models = arguments['models'];
var __args_24, __kwargs_24;
__args_24 = create_array(models);
__kwargs_24 = {};
get_attribute(get_attribute(self, "remove_one"), "__call__")(__args_24, __kwargs_24);
}

__Collection_attrs.remove = __Collection_remove;
var __Collection_remove_one = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "model")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var model = arguments['model'];
if(get_attribute(get_attribute(model, "__class__"), "__name__") == "list") {
var __args_25, __kwargs_25;
__args_25 = create_array();
__kwargs_25 = {};
model = get_attribute(get_attribute(model, "pop"), "__call__")(__args_25, __kwargs_25);
}

var __args_26, __kwargs_26;
__args_26 = create_array();
__kwargs_26 = {};
new_ids = get_attribute(dict, "__call__")(__args_26, __kwargs_26);
var __args_27, __kwargs_27;
__args_27 = create_array();
__kwargs_27 = {};
new_models = get_attribute(list, "__call__")(__args_27, __kwargs_27);
var __args_28, __kwargs_28;
__args_28 = create_array();
__kwargs_28 = {};
ks = get_attribute(get_attribute(get_attribute(self, "ids"), "keys"), "__call__")(__args_28, __kwargs_28);
var __iterator__, k;
__iterator__ = get_attribute(get_attribute(ks, "__iter__"), "__call__")(create_array(), {});
try {
k = get_attribute(__iterator__, "next")(create_array(), {});
while(true) {
if(k != get_attribute(model, "id")) {
var __args_29, __kwargs_29;
__args_29 = create_array(k);
__kwargs_29 = {};
m = get_attribute(get_attribute(get_attribute(self, "ids"), "get"), "__call__")(__args_29, __kwargs_29);
var __args_30, __kwargs_30;
__args_30 = create_array(k, m);
__kwargs_30 = {};
get_attribute(get_attribute(new_ids, "set"), "__call__")(__args_30, __kwargs_30);
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
var __args_31, __kwargs_31;
__args_31 = create_array(m);
__kwargs_31 = {};
get_attribute(get_attribute(new_models, "append"), "__call__")(__args_31, __kwargs_31);
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
var __args_32, __kwargs_32;
__args_32 = create_array("remove", model);
__kwargs_32 = {};
get_attribute(get_attribute(e, "trigger"), "__call__")(__args_32, __kwargs_32);
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

var __args_33, __kwargs_33;
__args_33 = create_array(el);
__kwargs_33 = {};
set_attribute(self, "el", get_attribute(J, "__call__")(__args_33, __kwargs_33));
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
