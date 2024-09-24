const main = document.querySelector('main');

// 1) Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.

// class Circle {
//     constructor(r, color) {
//         this.color = color;
//         this.r = r;
//     }

//     get radiusInfo() {
//         console.log(`${this.r}`);
//     }

//     get colorInfo() {
//         console.log(`${this.color}`);
//     }

//     get diameterInfo() {
//         return `${this.r * 2}px`;
//     }

//     set setRadius(newR) {
//         this.r = newR;
//     }

//     set setColor(newColor) {
//         this.color = newColor;
//     }

//     // Метод для вычисления диаметра
//     calculateCircleDiameter() {
//         return this.r * 2;
//     }

//     // Метод для вычисления площади (исправлено возведение в степень)
//     calculateCircleArea() {
//         return Math.PI * Math.pow(this.r, 2); // Используем Math.pow или r * r
//     }

//     // Метод для вычисления длины окружности
//     calculateCircumference() {
//         return 2 * Math.PI * this.r;
//     }
// }



// function paintCircle() {
//     const circle = document.createElement('div');

//     const orangeCircle = new Circle(200, 'orange');

//     // Изменяем радиус и цвет с помощью сеттеров
//     orangeCircle.setRadius = 150;
//     orangeCircle.setColor = 'red';

//     // Логируем вычисленные значения
//     console.log('Диаметр:', orangeCircle.calculateCircleDiameter());
//     console.log('Площадь:', orangeCircle.calculateCircleArea());
//     console.log('Длина окружности:', orangeCircle.calculateCircumference());

//     // Устанавливаем стили круга
//     circle.style.height = orangeCircle.diameterInfo;
//     circle.style.width = orangeCircle.diameterInfo;
//     circle.style.background = orangeCircle.color;
//     circle.classList.add('circle');

//     main.append(circle);
// }

// paintCircle();

// 2) Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться доти, доки в маркері є чорнило; один не пробільний символ — це 0,5 % чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера й додай метод для заправки.

// Продемонструй роботу написаних методів.

class Marker{
    constructor(color, tank){
        this.color = color;
        this.tank= tank;
    }
    get getColor(){
        return this.color;
    }
    get getTank() {
        return `${this.tank}%`;
    }

    writing(){
        this.tank -= 0.5;
    }
}


class ModernMarker extends Marker{
    constructor(color, tank){
        super(color, tank)
    }

    set putInkToTank(value){
        this.tank += value
    }
}

const modernBlueMarker = new ModernMarker('blue', 200)

modernBlueMarker.putInkToTank = 100

console.log(modernBlueMarker)