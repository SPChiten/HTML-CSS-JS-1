function openTab(tabName) {
    // Hide all tab content
    var tabs = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
    }
  
    // Show the selected tab content
    document.getElementById(tabName).style.display = "block";
  }
  
  function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Simple form validation
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill out all fields.");
      return;
    }
  
    // Simulate a server response (replace this with actual server-side logic)
    setTimeout(function () {
      console.log("Form submitted successfully!");
      console.log("Name: " + name);
      console.log("Email: " + email);
      console.log("Message: " + message);
  
      alert("Form submitted successfully!\n\nName: " + name + "\nEmail: " + email);
      document.getElementById("contactForm").reset();
    }, 500);
  }
  
  // Open the Home tab by default
  openTab('home');
  