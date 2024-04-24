document.addEventListener("DOMContentLoaded", function () {

  const backButton = document.getElementById("back-btn");
  if (backButton) {
    backButton.addEventListener("click", function (e) {
      window.location.href = "index.html";
    });
  }

  const dobInput = document.getElementById("UserDob");
  dobInput.addEventListener("input", function (e) {
    let input = e.target.value;

    // Remove any characters that are not digits
    input = input.replace(/[^0-9]/g, "");

    // Format the input with slashes, checking length each step
    let newInput = "";
    if (input.length > 0) {
      newInput += input.substring(0, Math.min(2, input.length));
    }
    if (input.length > 2) {
      newInput += "/" + input.substring(2, Math.min(4, input.length));
    }
    if (input.length > 4) {
      newInput += "/" + input.substring(4, 8); // Adjust the max length if needed
    }

    // Update the input field's value
    e.target.value = newInput;
  });

  document.getElementById("dobForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const dateStr = document.getElementById("UserDob").value;
    if (isDate18orMoreYearsOld(dateStr)) {
      window.location.href = "success.html";
    } else {
      const errorElement = document.getElementById("error-message");
      errorElement.style.display = "block";
    }
  });

  //Check if user is 18 years old or older
  function isDate18orMoreYearsOld(dateStr) {
    const parts = dateStr.split("/");
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);

    const eighteenthBirthday = new Date(year + 18, month, day);
    return eighteenthBirthday <= new Date();
  }


});
