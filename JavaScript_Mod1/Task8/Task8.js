function findLeapYears() {
    const startYear = parseInt(document.getElementById("startYear").value);
    const endYear = parseInt(document.getElementById("endYear").value);

    if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
        document.getElementById("leapYearsList").innerHTML = "<li>Please enter valid years where the start year is less than or equal to the end year.</li>";
        return;
    }

    const leapYearsList = document.getElementById("leapYearsList");
    leapYearsList.innerHTML = ""; // Clear previous results

    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            const listItem = document.createElement("li");
            listItem.textContent = year;
            leapYearsList.appendChild(listItem);
        }
    }

    if (!leapYearsList.hasChildNodes()) {
        leapYearsList.innerHTML = "<li>No leap years found in the given range.</li>";
    }
}
