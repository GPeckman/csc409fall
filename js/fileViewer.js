fileTree = {
    type: "folder",
    contents: {}
}

function addFile(path, name, type = "file") {
    splitPath = path.split('\\')
    current = fileTree
    i = 0
    while (i < splitPath.length) {
        if (splitPath[i] != '') {
            if (!current.contents.hasOwnProperty(splitPath[i])) {
                current.contents[splitPath[i]] = {
                    type: "folder",
                    contents: {}
                }
            }
            current = current.contents[splitPath[i]]
        }
        i++
    }

    current.contents[name] = {
        type: type,
    }
    if (type == "folder") {
        current.contents[name]["contents"] = {}
    }
}

addFile("foo\\bar", "baz", "file")
addFile("foo\\bar", "baz2", "file")
addFile("foo\\bar2", "baz3", "file")
addFile("foo", "baz4", "file")
addFile("foo", "baz5", "file")
addFile("foo", "baz6", "file")
addFile("", "baz7", "file")
console.log(fileTree)


function createFragment(node) {
    if (Object.keys(node.contents).length === 0) {
        return null
    }
    let newList = document.createElement("ul")
    for (let child in node.contents) {
        console.log(child)
        console.log(node.contents[child])
        let newItem = document.createElement("li")
        newItem.textContent = child
        if (node.contents[child].type == "folder") {
            let newChildList = createFragment(node.contents[child])
            if (newChildList !== null) {
                newItem.appendChild(newChildList)
            }
        }
        newList.appendChild(newItem)
    }
    return newList
}

rootList = createFragment(fileTree)
document.body.appendChild(rootList)