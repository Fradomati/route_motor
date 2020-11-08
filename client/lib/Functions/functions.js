// Get current age

export const userAge = (birthday) => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    const arrBirthday = birthday.split("-")
    const userYear = arrBirthday[0]
    const userMonth = arrBirthday[1]
    const userDay = arrBirthday[2]


    const age = yyyy - userYear

    return dd + (mm * 30) < userDay + (userMonth * 30) ? age - 1 : age
}


export const urlToCoords = (url) => {
    let arr = url.split("dir/")[1].split("data")[0].split("/")
    let arrCleaned = []
    arr.forEach(e => {
        if (e != "" && e != "am=t") {
            arrCleaned.push(e)
        }
    })
    let lastElement = arrCleaned[arrCleaned.length - 1].split("@")[1].split("z")[0]
    arrCleaned.pop()
    arrCleaned.push(lastElement)

    return arrCleaned
}

