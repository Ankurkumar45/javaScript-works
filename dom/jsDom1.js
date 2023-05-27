function showFormData() {
    // Get the form elements
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    // Create a new element to display the form data
    var formDataElement = document.createElement("p");
    formDataElement.innerHTML =
      "<strong>First Name:</strong> " + firstName + "<br>" +
      "<strong>Last Name:</strong> " + lastName + "<br>" +
      "<strong>Email:</strong> " + email + "<br>" +
      "<strong>Phone Number:</strong> " + phoneNumber;

    // Append the form data element below the form
    var formContainer = document.getElementById("formContainer");
    formContainer.appendChild(formDataElement);
  }