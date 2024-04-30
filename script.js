// 1.Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function () {
  const res = JSON.parse(request.response);
  console.log(res);

  // A) Get all the countries from Asia continent /region using Filter method

  // Filter countries from Asia

  let asiacountry = res.filter((country) => country.region === "Asia");

  // Extract country names

  let asiaCountryName = asiacountry.map((country) => country.name.common);

  // Print or use the country names

  console.log("Countries in Asia", asiaCountryName);

  //B)Get all the countries with a population of less than 2 lakhs using Filter method

  // Filter countries with population less than 200,000
  let lowPopulation = res.filter((popu) => popu.population < 200000);

  // Extract country names
  let countryName = lowPopulation.map((country) => country.name.common);

  // Print the country names
  console.log("Population lessar than 2 lakhs : ", countryName);

  // C) Print the following details name, capital, flag, using forEach method
  console.log("Name, Capital, Flag, using forEach method");
  let result = res.forEach((country) => {
    // Extract details
    const name = country.name.common;
    const capital = country.capital ? country.capital[0] : "N/A";
    const flag = country.flags.png;

    // Print details
    console.log("Name:", name);
    console.log("Capital:", capital);
    console.log("Flag:", flag);
    console.log("-------------------------");
  });

  console.log(result);

  // D) Print the total population of countries using reduce method

  const totalPopulation = res.reduce(
    (acc, country) => acc + country.population,
    0
  );

  // Print total population
  console.log("Total population of all countries:", totalPopulation);

  //E)Print the country that uses US dollars as currency.

  const countriesWithUSD = res.filter(
    (country) => country.currencies && country.currencies.USD
  );

  // Extract country names
  const countryNames = countriesWithUSD.map((country) => country.name.common);

  console.log(countryNames);
};
