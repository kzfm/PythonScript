class TaskModel(Model):
    def __init__(self, name):
        Model.__init__(self)
        self.name = name
        self.done = false


class Task(Controller):
    def __init__(self, model):
        Controller.__init__(self, "div", None)
        self.model = model
        self.el.addClass("item")
        self.el.delegate(".view", "dblclick", self.edit)
        self.el.delegate(".close", "click", self.close)
        self.el.delegate(".destroy", "click", self.remove)

    def html(self):
        source = "<div class='row collapse view'><div class='large-10 columns'><input type='checkbox'>{{name}}<a href='#' class='destroy'></a></div></div>" + "<div class='row collapse edit'><div class='large-10 columns'><input type='text' value={{name}}></div>"\
            + "<div class='large-2 columns'><a class='button prefix close'>ok</a></div></div>"
        template =  JS("Handlebars.compile(source)")
        name = self.model.name
        data = JS("template({name:name})")
        return self.el.html(data)

    def edit(self):
        self.el.addClass("editing")
        print "double clicked: " + self.model.to_string()

    def close(self):
        self.el.removeClass("editing")
        j = self.el.find("input[type=text]").j
        name =  JS("j.val()")
        self.model.updateAttribute("name", name)

    def remove(self):
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
        e.bind("update", self.render)

    def create(self):
        j = J("#taskinput").j
        name =  JS("j.val()")
        if name != "":
            self.collection.add(TaskModel(name))
            j = J("#taskinput").j
            empty_text = ""
            JS('j.val(empty_text)')

    def render(self):
        print "render tasklist"
        j = self.el.j
        JS('j.empty()')
        for m in self.collection.models:
            task = Task(m)
            self.el.append(task.html())

print "application start"
TaskApp("#items", TaskList())
