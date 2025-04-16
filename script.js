document.getElementById("dahejform").addEventListener("submit", function (e) {
  e.preventDefault();

  const salary = parseFloat(document.getElementById("salary").value) || 0;
  const property = parseFloat(document.getElementById("property").value) || 0;
  const cow = parseInt(document.getElementById("cow").value) || 0;
  const govtJob = parseInt(document.getElementById("govtjob").value);

  // Dahej calculation logic
  const salaryValue = salary * 12;
  const propertyValue = property * 250000;
  const cowValue = cow * 60000;
  let govtJobBonus;
    if (govtJob === 1) {
        govtJobBonus = 500000;
    } else {
        govtJobBonus = 0;
    }

  const totalDahej = salaryValue + propertyValue + cowValue + govtJobBonus;

  let condition1 = ""
  let condition2 = ""
  let condition3 = ""
  let condition4 = ""
  let condition5 = ""
  let condition6 = ""
  
  if (totalDahej >= 2000000) {
    condition1 = "VIR*IN GIRL";
    condition2 = "CAR";
    condition3 = "10 VORI GOLD JEWELERY";
    condition4 = "2 SALI";
  }
  else if (totalDahej >= 1000000) {
    condition2 = "CAR";
    condition3 = "5 VORI GOLD JEWELERY";
  }
  else if (totalDahej >= 500000) {
    condition5 = "BIKE";
  }
  else {
    condition6 = "CYCLE";
  }

  // Create a new full-page HTML content for the result
  const resultHTML = `
        <html>
            <head>
                <title>Calculate My Dahej</title>
                <link rel="stylesheet" href="src/output.css">
            </head>
            <body class="bg-amber-50" flex flex-col justify-center items-center h-screen">
            <div class="flex flex-col justify-center items-center mt-10">
                <h1 class="text-5xl font-cdm-spacial font-medium text-[#c2a503]">CMD</h1>
                <h1 class="text-2xl mt-2.5 font-cdm-spacial font-medium">Welcome to</h1>
                <h1 class="text-4xl mb-2.5 font-cdm-spacial font-medium text-[#ceb10f]">CalculateMyDahej.com</h1>
                <p>best way to get your dahej</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <h1 class="text-7xl font-bold text-[#c2a503] mt-20">🎉 ₹${totalDahej} 🎉</h1>
                <h1 class="font-bold text-[#c2a503]">${condition1}</h1>
                <h1 class="font-bold text-[#c2a503]">${condition2}</h1>
                <h1 class="font-bold text-[#c2a503]">${condition3}</h1>
                <h1 class="font-bold text-[#c2a503]">${condition4}</h1>
                <h1 class="font-bold text-[#c2a503]">${condition5}</h1>
                <h1 class="font-bold text-[#c2a503]">${condition6}</h1>
                <a href="index.html" class="bg-yellow-400 px-3 py-1 rounded-md hover:bg-yellow-500 mt-10">Go Back</a>
            </div>
            </body>
        </html>
    `;

  // Show result in same tab
  document.open();
  document.write(resultHTML);
  document.close();
});