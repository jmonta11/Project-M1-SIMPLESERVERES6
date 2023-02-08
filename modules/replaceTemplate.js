
module.exports = (htmlStr, course,)=>{ // fat arrow function or lambda
    let output = htmlStr.replace(/{%FROM%}/g, course.from);
    output = output.replace(/{%NAME%}/g, course.name);
    output = output.replace(/{%INSTRUCTOR%}/g, course.instructor);
    output = output.replace(/{%CREDITS%}/g, course.credits);
    output = output.replace(/{%MONTHLYPAYMENT%}/g, course.monthlyPayment);
    output = output.replace(/{%INTERESTRATE%}/g, course.interestRate);
    output = output.replace(/{%LOANTERMYEARS%}/g, course.loanTermYears);
    output = output.replace(/{%LOANTYPE%}/g, course.loanType);
    output = output.replace(/{%LOANAMOUNTS%}/g, course.loanAmount);
    output = output.replace(/{%DESCRIPTION%}/g, course.description);
    output = output.replace(/{%ID%}/g, course.id);
    return output;
}