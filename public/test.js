import { getPersonData } from './App.js';

const submitBtn = document.getElementById("submit-btn")

submitBtn.addEventListener('click', e => {
    e.preventDefault();

    const info = getPersonData();
    console.log(
        `ФИО: ${info.name}
         Серия и номер паспорта: ${info.id}
         Кем выдан: ${info.orgIssued}
         Когда выдан: ${info.dateIssued}
         Место рождения: ${info.birthPlace}
         Дата рождения: ${info.birthDate}
         Место жительства: ${info.homeAddress}
         Отдел: ${info.department}
         Должность: ${info.jobTitle}
         Цель прибывания: ${info.purposeOfStay}
         Дата визита: ${info.dateOfStay}
         Сопровождающия: ${info.accompPerson}
         Согласующий: ${info.coordPerson}
         
         Object: ${info.toJSON()}`
    );

})


