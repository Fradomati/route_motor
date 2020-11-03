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


export const mapsEmbebed = (url) => {

    return `<iframe src=${url} width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
}