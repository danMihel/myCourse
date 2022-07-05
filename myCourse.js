// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// Функиця

function  chooseYourCourse(arrCourses, range) {
    const noPriceArr = (arr) => {
        return (arr[0] === null && arr[1] === null);
    }

    const minValueWithNull = (arr) => {
        return (arr[0] === null ? 0 : arr[0]);
    }

    const MaxValueWithNull = (arr) => {
        return (arr[1] === null ? Infinity : arr[1]);
    }

    const rez = arrCourses.filter(course => (minValueWithNull(course.prices) <= MaxValueWithNull(range)) && MaxValueWithNull(course.prices) >= minValueWithNull(range));
    
    const minus = arrCourses.filter(course => noPriceArr (course.prices));

    const myCourse =  (arr) => {
        const nameArr = []; 
        arr.forEach(element => {
            nameArr.push(element.name);
        });

        const resArray = nameArr.filter(function(f) { return f !== minus[0].name});
        
        return resArray;
    };
return  myCourse(rez, minus);
}
