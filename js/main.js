function calc() {
    let kreditSum = document.getElementById('kredit-sum').value;
    let yearPercent = document.getElementById('year-percent').value;
    let year = document.getElementById('year').value;
    let startPercent = document.getElementById('start-percent').value;
    let deadline = document.getElementById('deadline').value;
    let month = document.getElementById('month').value;

    let startPayment = kreditSum * startPercent / 100;

    document.getElementById('start-payment').innerHTML = startPayment + ' so`m';

    let givenPayment = kreditSum - startPayment;

    document.getElementById('given-sum').innerHTML = givenPayment + ' so`m';

    let  monthPayment = givenPayment / (deadline * 12);

    document.getElementById('month-payment').innerHTML = monthPayment.toFixed(1) + ' so`m';

    let result = "";

    let percentPayment = givenPayment * yearPercent / 1200;

    let months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'];

    let allMonthPayment = 0;
    let allPercentPayment = 0;
    let allSumma;

    for (let i = 0; i < deadline * 12; i ++) {

        if (month === 12  ) {
            month = 0;
            year ++;
        }

        result +=
            "<tr>" +
            "<td>"+ (i+1) +"</td>" +
            "<td>"+ year + " - yil</td>" +
            "<td>"+ (months[month++]) +"</td>" +
            "<td>"+ givenPayment.toFixed(1) + " so`m</td>" +
            "<td>"+ monthPayment.toFixed(1) + " so`m</td>" +
            "<td>"+ percentPayment.toFixed(1) + " so`m</td>" +
            "<td>"+ (monthPayment + percentPayment).toFixed(1) + " so`m</td>" +
            "</tr>";

        givenPayment -= monthPayment;
        percentPayment = givenPayment * yearPercent / 1200;

        // allMonthPayment += parseFloat(monthPayment.toFixed(1));
        allMonthPayment += monthPayment;
        // allPercentPayment += parseFloat(percentPayment.toFixed(1));
        allPercentPayment += percentPayment;
    }

    allSumma = allPercentPayment + allMonthPayment;

    document.getElementById('result').innerHTML = result;
    document.getElementById('tfoot1').innerHTML = allMonthPayment.toFixed(1) + ' so`m';
    document.getElementById('tfoot2').innerHTML = allPercentPayment.toFixed(1) + ' so`m';
    document.getElementById('tfoot3').innerHTML = allSumma.toFixed(1) + ' so`m';
    document.getElementById('allSum').innerHTML = '<b>Jami so`mma</b>';
}