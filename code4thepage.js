export default function contarOvejas(ovejas) {

    let currentOveja;
    let currentOvejasName = "";
    let currentOvejasColor = "";


    for (i = 0; i < ovejas.length; i++) {
        currentOveja = ovejas[i];
        currentOveja.name.toLowerCase();
        currentOveja.color.toLowerCase();

        if (currentOvejasName.includes("a") && currentOvejasName.includes("n") && currentOvejasColor === "rojo") {
            ovejasFiltradas.push(currentOveja);
        }

    }



    // aquí tu magia
    return ovejas
}
