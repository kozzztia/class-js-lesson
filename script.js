const main = document.querySelector('main');

class Circle {
    constructor(r, color) {
        this.color = color;
        this.r = r;
    }

    get radiusInfo() {
        console.log(`${this.r}`);
    }

    get colorInfo() {
        console.log(`${this.color}`);
    }

    get diameterInfo() {
        return `${this.r * 2}px`;
    }

    set setRadius(newR) {
        this.r = newR;
    }

    set setColor(newColor) {
        this.color = newColor;
    }

    // Метод для вычисления диаметра
    calculateCircleDiameter() {
        return this.r * 2;
    }

    // Метод для вычисления площади (исправлено возведение в степень)
    calculateCircleArea() {
        return Math.PI * Math.pow(this.r, 2); // Используем Math.pow или r * r
    }

    // Метод для вычисления длины окружности
    calculateCircumference() {
        return 2 * Math.PI * this.r;
    }
}

function paintCircle() {
    const circle = document.createElement('div');

    const orangeCircle = new Circle(200, 'orange');

    // Изменяем радиус и цвет с помощью сеттеров
    orangeCircle.setRadius = 150;
    orangeCircle.setColor = 'red';

    // Логируем вычисленные значения
    console.log('Диаметр:', orangeCircle.calculateCircleDiameter());
    console.log('Площадь:', orangeCircle.calculateCircleArea());
    console.log('Длина окружности:', orangeCircle.calculateCircumference());

    // Устанавливаем стили круга
    circle.style.height = orangeCircle.diameterInfo;
    circle.style.width = orangeCircle.diameterInfo;
    circle.style.background = orangeCircle.color;
    circle.classList.add('circle');

    main.append(circle);
}

paintCircle();
