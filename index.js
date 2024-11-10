function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

project = Entry.exportProject()
names = []

for (let i of project.variables) {
    names.push(i.name)
}

for (let i of project.variables) {
    var j = getRandomInt(0, names.length - 1)
    i.name = names[j]
    names.splice(j, 1)
}

Entry.clearProject()
Entry.loadProject(project)

document.querySelector(".css-9qnihu").click()
setTimeout(() => {
    document.querySelector(".item__p5HkM").click()
}, 100)

setTimeout(() => {
    alert("넌 조졌다 ㅋㅋㅋ")
}, 1500)
