let button = document.getElementById('examinar')
let input = document.getElementById('input')
let enviar = document.getElementById('enviar')

button.addEventListener('click',()=>{
    input.click()
})

enviar.addEventListener('click',()=>{
    let file = input.files[0]
    let xhr = new XMLHttpRequest()
    xhr.open('POST','/upload',false)
    xhr.onload = () => {
        if(xhr.status === 200) console.log("Response from server = ", xhr.response); else consle.log( xhr.status , ":", xhr.statusText );
    }
    let formData = new FormData();
    formData.append("file", file);
    xhr.send(formData)
})
document.addEventListener('click',()=>{
    let xhr = new XMLHttpRequest()
    xhr.open('GET','/download/'+'El ojo del mundo - Robert Jordan.epub',false)
    xhr.onload = () => {
        if(xhr.status === 200) {
            let blob = new Blob([xhr.response],{type:'application/epub+zip'})
            let link = document.createElement('a')
            link.href = window.URL.createObjectURL(blob)
            link.download = 'El ojo del mundo - Robert Jordan.epub'
            link.click()  
        } 
        else consle.log( xhr.status , ":", xhr.statusText );
    }
    xhr.send()
})