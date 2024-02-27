const boton = document.getElementById("calcular");
const error = document.getElementById("error");
const datos = document.getElementById("datos");
const man = document.getElementById("man")
const flu = document.getElementById("flu")
const mm2 = document.getElementById("mm2")
const c1 = document.getElementById("casilla1")
const c2 = document.getElementById("casilla2")
const l1 = document.getElementById("l1")
const l2 = document.getElementById("l2")
boton.addEventListener("click", ()=>{
    input = document.getElementById("peso");
    peso = input.valueAsNumber;
    if(peso > 0){
        error.style.display = "none";
        datos.style.display = "none";
        calcularflujo(peso);
    }else{
        error.style.display = "block";
        datos.style.display = "block";
        flu.style.display = "none"
        man.style.display = "none"
        mm2.style.display = "none"
        input.value = ""
    }
})

function calcularflujo(peso){
    if (peso <= 30){
        let flujo = holliday(peso)
        let mant = flujo / 24
        let m = mant * 1.5
        flu.innerHTML = "volumen diario: " + Math.round(flujo) + " cc/hr"
        man.innerHTML = "mantenimiento: " + Math.round(mant) + " cc/hr"
        mm2.innerHTML = "m+m/2: " + Math.round(m) +" cc/hr"
        flu.style.display = "block"
        man.style.display = "block"
        mm2.style.display = "block"
    }else{
        let flujo = superficie(peso)
        m1 = flujo * 1500
        m2 = flujo * 2000
        flu.innerHTML = "SC1:  " +Math.round(m1)+ " cc/hr" 
        man.innerHTML = "SC2: " +Math.round(m2)+ " cc/hr"
        flu.style.display = "block"
        man.style.display = "block"
        mm2.style.display = "none"
    }
}
function holliday(peso){
    if (peso <= 10){
        vol_diario = peso * 100
    }else if (10 < peso < 20){
        vol_diario = 1000 + ((peso - 10) * 50)
    }else if (peso >= 20){
        vol_diario = 1500 + ((peso - 20) * 20)
    }
    return vol_diario
}
function superficie(peso){
    let sup_corp = ((peso * 4) + 7) / (peso + 90);
    return sup_corp
}