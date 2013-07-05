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

    def trigger(self, ev, args):
        var(lst, cb, args)
        print ev
        lst = self.events.get(ev)
        if lst:
            for cb in lst:
                if args:
                    cb(args)
                else:
                    cb()

e = Events()
_counter = 0


class Model():
    def __init__(self):
        self.id = "c-" + _counter
        _counter = _counter + 1

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
        e.trigger("destroy", self)

    def updateAttribute(self, name, value):
        setattr(self, name, value)
        e.trigger("update")


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
            el = '<div></div>'
        self.el = J(el)

    def release(self):
        j = self.el.j
        JS('j.remove()')
