document.addEventListener("DOMContentLoaded", function () {
    const prayerForm = document.getElementById("prayerForm");
    const startDateInput = document.getElementById("start_date");
    const finishDateInput = document.getElementById("finish_date");
    const setTodayButton = document.getElementById("setToday");

    // clicking the set today button sets todays date as the end date
    setTodayButton.addEventListener("click", function () {
        const today = new Date().toISOString().split("T")[0];
        finishDateInput.value = today;
    });

    // func to run when the form is submitted
    prayerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const startDateValue = startDateInput.value;
        let finishDateValue = finishDateInput.value;

        // if the start date is mandatory but the end date is blank get today's date
        if (!startDateValue) {
            alert("Please select a start date!");
            return;
        }
        if (!finishDateValue) {
            finishDateValue = new Date().toISOString().split("T")[0];
        }

        const startDate = new Date(startDateValue);
        const finishDate = new Date(finishDateValue);

        if (finishDate < startDate) {
            alert("Finish date cannot be earlier than start date!");
            return;
        }

        // Namaz vakitleri
        const prayerTimes = ["Sabah", "Öğle", "İkindi", "Akşam", "Yatsı"];

        // create the necessary objects for the excel file
        const workbook = XLSX.utils.book_new();
        let currentDate = new Date(startDate);

        while (currentDate <= finishDate) {
            const year = currentDate.getFullYear();
            const data = [["Date", ...prayerTimes]]; 

            while (currentDate.getFullYear() === year && currentDate <= finishDate) {
                const day = currentDate.toLocaleDateString('en-GB');
                data.push([day, "", "", "", "", ""]); 
                currentDate.setDate(currentDate.getDate() + 1);
            }

            // create sheet and add to workbook
            const sheet = XLSX.utils.aoa_to_sheet(data);
            XLSX.utils.book_append_sheet(workbook, sheet, year.toString());
        }

        // download the excel file
        XLSX.writeFile(workbook, "Prayer_Times_Tracker.xlsx");
    });
});
