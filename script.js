"use strict";

let creditSum = document.querySelector('.form__input-credit-sum'),
    creditPeriod = document.querySelector('.form__input-credit-period'),
    creditPercent = document.querySelector('.form__input-credit-percent'),
    creditSelect = document.querySelector('.form__select'),
    btn = document.querySelector('.form__btn'),
    table = document.querySelector('.table');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if(creditSum.value == '' || creditPeriod.value == '' || creditPercent.value == '' || creditSelect.value == '') {
        alert('Заполните все поля!');
    } else {
        function monthlyPaymentSum() {
            return Math.round((((creditSum.value / 100) * creditPercent.value) / creditPeriod.value)) +  Math.round((creditSum.value / creditPeriod.value));
        }

        function overpaymentSum() {
            return Math.round((((creditSum.value / 100) * creditPercent.value) / creditPeriod.value));
        }
        let tbody = `
            <tbody>
                <tr>
                    <td>${creditSum.value}</td>
                    <td>${creditPercent.value}</td>
                    <td>${monthlyPaymentSum()}</td>
                    <td>${overpaymentSum()}</td>
                    <td>${monthlyPaymentSum() * creditPeriod.value}</td>
                </tr>
            </tbody>
        `;
        table.insertAdjacentHTML('beforeend', tbody);
    }
});