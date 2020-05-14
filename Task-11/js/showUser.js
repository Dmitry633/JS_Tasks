
'use strict';
let age = document.getElementById('age');
function showUser(surname, name) {
   // value = age.value
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
//showUser();
//console.log(showUser.call(age, 'surname', 'name'));
//нужно вручную указать контекст для this методом .call
//age.addEventListener('change', showUser.call(age, 'surname1', 'nam2e'));
showUser.call(age, 'Иванов', 'Дмитрий');
showUser.apply(age, ['surname', 'name']);
