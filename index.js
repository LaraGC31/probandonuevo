window.onload = function(){
    document.getElementById("bott").addEventListener("click", () => {
    const enlace = document.createElement("a");
    enlace.href = "cartita.html";
    enlace.download = "cartita.html";
    enlace.click();
});
}