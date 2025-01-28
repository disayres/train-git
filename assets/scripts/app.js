let setCookieBtn = document.querySelector('button')
let getCookieBtn = document.querySelector('#get-cookie')
let removeCookieBtn = document.querySelector('#remove-cookie')

const addCookie = () => {
    const now = new Date()
    let expiresDay = now.setTime(now.getTime() + (2 * 24 * 60 * 60 * 1000))
    document.cookie = `userAge=22;path=/;expires=${expiresDay}`
}

const getCookie = () => {
    let cookiesArray = document.cookie.split(';')
    let mainCookie = null
    cookiesArray.some(cookie => {
        if (cookie.includes('username')) {
            mainCookie = cookie.substring(cookie.indexOf('=') + 1)
            return true
        }
    })
    console.log(mainCookie);
}

setCookieBtn.addEventListener('click', addCookie)
getCookieBtn.addEventListener('click', getCookie)
