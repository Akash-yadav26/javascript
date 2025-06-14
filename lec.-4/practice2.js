let companies = ["bloomberg","microsoft","uber","google","ibm","netflix"];
companies.shift(0,)
companies.splice(1,1,"ola")
companies.push("amazon")

console.log(companies);
