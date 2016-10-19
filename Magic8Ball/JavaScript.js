function Shake() {
        var fortunes = ["try again later", "Most Definately", "NO"]
        var num = Math.floor((Math.random() * 3) + 1);
        document.getElementById("Fortune").innerHTML = fortunes[num];
}