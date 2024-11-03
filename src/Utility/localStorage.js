const getStoredReadList = () => {
    const storedListStr = localStorage.getItem("read-list")
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr)
        return storedList
    } else {
        return []
    }
}

const addStoredReadList = (id) => {
    const storedList = getStoredReadList()
    if (storedList.includes(id)) {
        alert("Already exists!")
    } else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem("read-list", storedListStr)
        alert("Added successfully!!")
    }
}

// --------------

const getStoredWishList = () => {
    const storedListStr = localStorage.getItem("wish-list")
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr)
        return storedList
    } else {
        return []
    }
}

const addStoredWishList = (id) => {
    const storedList = getStoredWishList()
    if (storedList.includes(id)) {
        alert("Already exists!")
    } else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem("wish-list", storedListStr)
        alert("Added successfully!!")
    }
}

export {addStoredReadList, addStoredWishList}