const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#btn-qrcode")
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img")






// funções

const generateQrCode = () =>{

    // pegando o valor digitado pelo usuário
    const qrCodeInputValue = qrCodeInput.value;
    
    // se não digitar nada, não vai acontecer nada
    if(!qrCodeInput) return;


    // texto que vai aparecer quando o botao for clicado
    qrCodeBtn.innerText = "Gerando código..."

    // adicionando api de gerador de qrcodes  
    qrCodeImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue} `


    // adicionando um evento de carregamento pra ficar mais bonito
   qrCodeImg.addEventListener("load", () =>{
        container.classList.add("active")
        qrCodeBtn.innerText = "Código criado!"
   })
}

// Gerar QR Code

// eventos
qrCodeBtn.addEventListener("click", () =>{
    generateQrCode();

})

qrCodeInput.addEventListener("keydown", (e) =>{

    // verificando se a tecla digitada foi enter
    if(e.code === "Enter"){
        generateQrCode()
    }

})

// Limpar área do QR Code

qrCodeInput.addEventListener("keyup", () =>{

    if(!qrCodeInput.value){
        container.classList.remove("active")
        qrCodeBtn.innerText = "Gerar QR Code"
    }
})