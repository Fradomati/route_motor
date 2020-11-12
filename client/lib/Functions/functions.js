/* <---- RESOURCES FUNCTIONS ----> */

/* 
A = %C3%81
E = %C3%A9
I = %C3%AD
O = %C3%B3
U = %C3%9A
Ñ = %C3%B1
 */

const characters = (value) => {
    switch (value) {
        case '%C3%81':
            console.log('A');
            break;
        case '%C3%A9':
            console.log('E');
            break;
        case '%C3%AD':
            console.log('I');
            break;
        case '%C3%B3':
            console.log('O');
            break;
        case '%C3%9A':
            console.log('U');
            break;
        case '%C3%B1':
            console.log('Ñ');
            break;
        default:
            console.log('No localizamos esta letra ' + value + '.');
    }
}




/* <---- EXPORT FUNCTIONS ----> */

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

// Get Coords from URL Google Maps
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

// Convert array of strings to array of arrays
export const arrayOfArrays = (array) => {
    const newArray = []
    array.forEach(e => {
        newArray.push(e.split(","))
    })
    return newArray
}

