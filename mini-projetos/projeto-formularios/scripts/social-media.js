const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    form.classList.add('submitted')

    console.log(form)

    if(!form.checkValidity())
        event.preventDefault()
})