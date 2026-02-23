function comprar(producto) {
    const numero = "595975189851"; 
    const mensaje = "¡Hola! Me interesa comprar " + producto + " del Club San José-Mi.";
    const url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
}