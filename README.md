# myCourse

Решение задачи на собеседование

В списке курсов присутствуют массив объектов в которых содержатся массивы цены четырех типов: 
1) Диапазон цены от - до
2) Диапазон цены с нижним порогом и без верхнего
3) Диапазон цены с верхним порогом 
4) Цена не указана, принимается за исключение и удаляется из результирующего массива 

Исходный массив сортируется по диапазону цен, которые выносятся в отдельные массивы, далее эти массивы сравниваются между собой и результирующий массив записывается в переменную. Еще в одну переменную записывается исключение, в котором указан объект без цены.
Циклом мы проходим по результирующему массиву и выносим в новый массив название курсов, после чего из него удаляется название курса без цены. 
В итоге функция возвращает массив названий курсов, которые интересуют пользователя
