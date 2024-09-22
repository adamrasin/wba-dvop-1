function Task1point1() {
    let userName = prompt("Jak se jmenuješ?");
    alert("Ahoj, " + userName + "!");
}

function Task1point2() {
    const num1 = parseFloat(prompt("Zadej první číslo:"));
    const num2 = parseFloat(prompt("Zadej druhé číslo:"));
    let sum = num1 + num2;
    alert(sum);
}

function Task1point3() {
    let num1 = parseFloat(prompt("Zadej první číslo:"));
    let num2 = parseFloat(prompt("Zadej druhé číslo:"));
    if (num1 > num2) {
        alert(num1 + " je větší číslo než " + num2);
    }
    else if (num2 > num1) {
        alert(num2 + " je větší číslo než " + num1);
    }
    else {
        alert("Obě čísla jsou stejná.");
    }
}

function Task2point1() {
    let num = parseFloat(prompt("Zadej číslo:"));
    if (num % 2 === 0) {
        alert(num + " je sudé číslo.");
    }
    else {
        alert(num + " je liché číslo.");
    }
}

function Task2point2() {
    let age = parseFloat(prompt("Zadej svůj věk:"));
    if (age >= 18) {
        alert("Uživatel je plnoletý.");
    }
    else if (age < 15) {
        alert("Uživatel je mladší 15 let.");
    }
    else {
        alert("Uživatel bude plnoletý za " + (18 - age) + " let.");
    }
}

function Task3() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}

let names = ["Sam" , "Vojta" , "Tomáš" , "Tonda" , "Petr" , "Mikuláš" , "Natálie" , "Anežka" , "Lea"];

function Task4point1() {
    console.log("Jména: ")
    names.forEach(function(name) {console.log(name)});
}

function Task4point2() {
    names.sort();
    console.log("Jména podle abecedy: " + names);
}

let numbers = [];

function Task4point3() {
    for (let i = 0; i < 20; i++) {
        numbers.push(Math.floor(Math.random() * 100));
    }
    console.log("Random čísla: " + numbers);

    let avg = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    console.log("Jejich průměr: " + avg);
}

function greet(name) {
    return "Ahoj, " + name + ", rádi tě tu vidíme!";
}

function Task5point1() {
    alert(greet("Bob"));
}

let nums5 = [7, 94, 3];

function sortnums5(nums5) {
    return nums5.sort((a, b) => a - b);
}

function Task5point2() {
    alert("Seřazená čísla: " + sortnums5(nums5));
}

let person = {
    name6: "Ondřej Vlček",
    age6: "25",
    int6: function() {
        return `Ahoj tady ${this.name6}, je mi ${this.age6} let!`;
    }
}

function Task6point1() {
    alert(person.int6()); 
}

let auto = {
    brand: "Opel",
    model: "Zafira",
    year: 2021,
    car6: function() {
        return `Auto a konrétní model: ${this.brand} ${this.model}, rok výroby: ${this.year}`;
    }
}

function Task6point2() {
    alert(auto.car6());
}

let books = [
    {
        title: "Bylo nás pět", author: "Karel Poláček", year: 1943
    },
    {
        title: "1984", author: "George Orwell", year: 1949
    },
    {
        title: "Rozmarné léto", author: "Vladislav Vančura", year: 1926
    },
    {
        title: "Robinson Crusoe", author: "Daniel Defoe", year: 1719
    },
    {
        title: "Na západní frontě klid", author: "Eric Maria Remarque", year: 1928
    }
]

function Task6point3() {
    books.forEach(function(book) {
        alert(book.title);
    });
}

let toggle = false;

function Task7point1() {
    toggle = !toggle;
    if (toggle) {
        document.getElementById("Text").innerHTML = "Jiný text!";
    } else {
        document.getElementById("Text").innerHTML = "Text";
    }
}

function Task7point2(event) {
    event.preventDefault();
    let name = document.getElementById("nameInput").value;
    document.getElementById("displayName").innerText = "Vítej, " + name + "!";
}

function Task7point3(operator) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;
        switch(operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }
    document.getElementById("result").textContent = "Výsledek: " + result;
}