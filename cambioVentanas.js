
const ventanaBienvenida = document.getElementById("ventanaBienvenida")
const ventanaRegistro = document.getElementById("primeraVentana")
const ventanaPrincipal = document.getElementById("ventanaPrincipal")
const navBar = document.getElementById("navBar")
const homeBtn = document.getElementById("home")
const registrarseBtn = document.getElementById("registrarse")
const aboutBtn = document.getElementById("about")
const horaBtn = document.getElementById("hora")


if(!sessionStorage.getItem('hasVisited')){
    ventanaBienvenida.style.display = "block"
    ventanaRegistro.style.display = "none"
    ventanaPrincipal.style.display = "none"
    navBar.style.display = "none"
    taskManager.style.display = "none"
    sessionStorage.setItem('hasVisited', 'true')
}else{
    ventanaBienvenida.style.display = "none"
    ventanaRegistro.style.display = "none"
    ventanaPrincipal.style.display = "block"
    navBar.style.display = "block"
}

const startBtn = document.getElementById("startBtn")
startBtn.addEventListener("click", () => {
    ventanaBienvenida.style.display = "none"
    ventanaRegistro.style.display = "block"
})

const registerBtn = document.getElementById("registerBtn")
registerBtn.addEventListener("click", () => {
    ventanaRegistro.style.display = "none"
    ventanaPrincipal.style.display = "block"
    navBar.style.display = "block"

    Swal.fire({
        title: 'Listo',
        text: 'Ya te sumaste al equipo',
        icon: 'success',
        showConfirmButton: false,
        backdrop: false,
        timer: 2000,
        timerProgressBar: true,
      })
      return registrado
})

homeBtn.addEventListener("click", () => {
    ventanaBienvenida.style.display = "block"
    ventanaRegistro.style.display = "none"
    ventanaPrincipal.style.display = "none"
    navBar.style.display = "none"
    taskManager.style.display = "none"
})

registrarseBtn.addEventListener("click", () => {
    ventanaBienvenida.style.display = "none"
    ventanaRegistro.style.display = "block"
    ventanaPrincipal.style.display = "none"
    navBar.style.display = "none"
    taskManager.style.display = "none"
})

horaBtn.addEventListener("click", () => {
    let dt = DateTime.now()
    const fechaStr = dt.toLocaleString(DateTime.DATETIME_MED)
    Swal.fire({
        title: fechaStr,
        text: 'Hora local',
        imageUrl:'img/clock.png',
        imageWidth:'200px',
        imageHeight:'200px',
        showConfirmButton: false,
        backdrop: false,
        timer: 3500,
        timerProgressBar: true,
        position: 'bottom-end',
        width: '250px',
      })
})

aboutBtn.addEventListener("click", () => {
    Swal.fire({
        title: 'About Us',
        text: 'Desarrollador: Giacomini Guido',
        showConfirmButton: false,
        backdrop: false,
        timer: 2000,
        timerProgressBar: true,
        position: 'bottom-end',
        width: '350px',

      })
})