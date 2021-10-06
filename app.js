const calculate = document.getElementById("calculate")

calculate.addEventListener("click", (e)=>{
    
    //Gating value
    const loanAmount = document.getElementById("loanAmount").value
    const interest = document.getElementById("interest").value
    const years = document.getElementById("years").value
    
    //console.log(loanAmount, interest, years)
    
    
    
    //calculate emi
    const amount = parseFloat(loanAmount);
    const calculateInterest = parseFloat(interest) / 100 / 12;
    const calculatePayments = parseFloat(years) * 12;
    
    
    
    //calcualte Monthly Payment
    const rate = Math.pow(1 + calculateInterest, calculatePayments)
    const monthly = (amount * rate * calculateInterest) / (rate -1);
    const monthlyPayment = monthly.toFixed(0)
    
    
    
    //Total interest
    const totalInterest = (monthly * calculatePayments - amount).toFixed(0)
    
    
    
    //Total Amount
    const totalAmount = (monthly * calculatePayments).toFixed(0)
    
    
    document.getElementById("monthlyPayment").innerHTML = "TK: " + monthlyPayment
    document.getElementById("totalInterest").innerHTML = "TK: " + totalInterest
    document.getElementById("totalAmount").innerHTML = "TK: " + totalAmount
    
    
    
    // Build the chart
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'EMI CALCULATOR'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Monthly Payment',
            y: ((monthlyPayment*100) / 100),
            sliced: true,
            selected: true
        }, {
            name: 'Total Interest',
            y: ((totalInterest*100) / 100),
        }, {
            name: 'Total Amount',
            y: ((totalAmount*100) / 100),
        }]
    }]
});
    
       
    e.preventDefault()
    
})