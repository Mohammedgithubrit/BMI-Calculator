function calculateBMI() {
    // Get user input
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    // Check if the input is valid
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      document.getElementById("result").textContent = "Please enter valid values.";
      return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);

    // Display the result
    document.getElementById("result").textContent = `Your BMI is: ${bmi.toFixed(2)}`;
  }