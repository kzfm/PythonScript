source = "<h3>{{title}}</h3><div>{{body}}</div>"

template =  JS("Handlebars.compile(source)")
title = "ひげひげひげ"
body = "セクシーコマンドー外伝"
data = JS("template({title:title,body:body})")
J("body .row ").append(data)
