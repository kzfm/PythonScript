# ============================ #
#        Framework             #
# ============================ #


class Events():
    def __init__(self):
        self.events = dict()

    def bind(self, event, callback):
        var(evs, ev, lst)
        evs = list()
        evs.js_object = JS('event.split(" ")')
        for ev in evs:
            lst = self.events.get(ev, list())
            lst.append(callback)
            self.events.set(ev, lst)

    def trigger(self, ev, *args):
        var(lst, cb, args)
        lst = self.events.get(ev)
        if lst:
            for cb in lst:
                if args.__len__() > 0:
                    cb(args)
                else:
                    cb()

e = Events()
_counter = 0


class Model():
    def __init__(self):
        self.id = "c-" + _counter
        _counter = _counter + 1
        # fixme: doesn't work 
        #e.trigger("create")

    def to_string(self):
        return "<" + self.__class__.__name__ + "(" + self.id + ")>"

    def toJSON(self):
        pass

    def change(self, callback):
        if callback:
            e.bind("change", callback)
        else:
            e.trigger("change")

    def fetch(self, callback):
        if callback:
            e.bind("fetch", callback)
        else:
            e.trigger("fetch")

    def destroy(self):
        print "revoke destroy"
        e.trigger("destroy", self)


class Collection():
    def __init__(self):
        self.ids = dict()
        self.models = list()
        e.bind("destroy", self.remove_one)

    def add_one(self, model):
        self.ids.set(model.id, model)
        self.models.append(model)
        e.trigger("add", model)

    def add(self, models):
        self.add_one(models)

    def remove(self, models):
        self.remove_one(models)

    def remove_one(self, model):
        if model.__class__.__name__ == 'list':
            model = model.pop()
        new_ids = dict()
        new_models = list()
        ks = self.ids.keys()
        for k in ks:
            if k != model.id:
                m = self.ids.get(k)
                new_ids.set(k, m)
        self.ids = new_ids

        for m in self.models:
            if m.id != model.id:
                new_models.append(m)
        self.models = new_models
        e.trigger("remove", model)


class Controller():
    def __init__(self, tag, el):
        if el == None:
            el = JS('document.createElement("div")')
        self.el = J(el)

    def release(self):
        j = self.el.j
        JS('j.remove()')

# ============================ #
#        Application           #
# ============================ #

class TaskModel(Model):
    def __init__(self, name):
        Model.__init__(self)
        self.name = name
        self.done = false


class Task(Controller):
    def __init__(self, model):
        Controller.__init__(self, "div", None)
        self.model = model
        self.el.addClass("row")
        self.el.addClass("collapse")
        self.el.bind("click", false, self.say)

    def html(self):
        test_str = "<div class='large-10 columns'>" + self.model.name + "</div>" + \
        "<div class='large-2 columns'><a href='#' class='button success small expand taskbutton'>Done</a></div>"
        return self.el.html(test_str)

    def say(self):
        print "clicked: " + self.model.to_string()
        self.model.destroy()
        self.release()

class TaskList(Collection):
    def __init__(self):
        Collection.__init__(self)
        e.bind("remove", self.rsay)

    def rsay(self, model):
        print  "removed: " + model.pop().to_string()
        for m in self.models:
            print m.to_string()


class TaskApp(Controller):
    def __init__(self, el, collection):
        Controller.__init__(self, "div", el)
        self.collection = collection
        button = J("#newtask")
        button.bind("click", false, self.create)
        e.bind("add", self.render)
        #print self.el.html()

    def create(self):
        name = JS('jQuery("#taskinput").val()')
        if name != "":
            self.collection.add(TaskModel(name))
        JS('jQuery("#taskinput").val("")')

    def render(self):
        print "render tasklist"
        j = self.el.j
        JS('j.empty()')
        for m in self.collection.models:
            task = Task(m)
            h = task.html()
            self.el.append(h)

#collection = TaskList()
#m1 = TaskModel("mymodel1")
#collection.add(m1)

print "application start"
c = TaskApp(".items", TaskList())
