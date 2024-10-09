//1
/*let quest = ["Вы человек?", "сегодня понедельник?", "Какая машина лучше \'нисан\'?", "Вы были сегодня в школе?", "Этот код написан на HTML?"];
let corrAnsw = [true, false, true, true, false];
let userAnsw = [];
let points = [];
let score = 0;
for (let index in quest) {
    userAnsw[index] = confirm(quest[index]);
    if (userAnsw[index] == corrAnsw[index]) {
        points[index] = 1;
        score++;
    }
    else {
        points[index] = 0;
    }
}
document.write("Question -> your points <br /><br />");
for (let index in quest) {
    document.write((parseInt(index) + 1) + ". " + quest[index] + " " + points[index] + "<br />");
}
document.write("<br />Your score:           " + score + "/5");*/

//2
function condition(value, index, array) {
    let result = false;
    if (value == "." || value == " " || value.match(/[a-z]/i) ) {
        result = true;
    }
    return result;
};

let name = prompt("Ввелите имя: ");
let arrName = name.split("");
let passed = arrName.filter(condition);
name = passed.join("");
if(confirm("Did you mean " + name + "?"))
{
    alert("Хорошо!");
}
else{
    alert("Плохо:(");
}
document.write("<br />");