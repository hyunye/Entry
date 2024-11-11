project = Entry.exportProject()

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

for (let i in Entry.variableContainer.functions_) {
    for (let j in Entry.variableContainer.functions_[i].content._blockMap) {
      var k = Entry.variableContainer.functions_[i].content._blockMap[j]
      if (k.data.type == 'function_field_label') k.data.params[0] = ""
    }
}

document.querySelector(".css-9qnihu").click()
setTimeout(() => {
    document.querySelector(".item__p5HkM").click()
}, 100)

function texts(string) {
    return decodeURIComponent(escape(atob(string)))
}

alerting = setInterval(() => {
    if (document.querySelector(".entry-modal-confirm")) {
        document.querySelector(".entry-modal-entryLmsText").textContent = texts("7J2RIOyggOyepe2VqCDjhYXjhLE=")
        document.querySelector(".entry-modal-content").textContent = texts("7Jes67Cx7J2YIOuvuCDsoovslYTtlZjsi5zrgpjsmpQgOikKKOy9mOyGlOufrOuPhCDrp4nqs6Ag7J206rGwIOyZhOyghCDrn6ztgqTruYTtgqTsnpDrgpghISk=")
        document.querySelector(".entry-modal-button.entry-modal-button.entry-modal-cancelButton").remove()
        document.querySelectorAll(".entry-modal-button")[1].textContent = "받아들이셈"
        clearInterval(alerting)
    }
}, 100)
