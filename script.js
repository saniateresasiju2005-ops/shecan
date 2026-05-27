const form = document.getElementById("contactForm");

if(form){

  form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;

    const formData = {
      id: Date.now(),
      name,
      email,
      message
    };

    let messages =
      JSON.parse(localStorage.getItem("messages")) || [];

    messages.push(formData);

    localStorage.setItem("messages",JSON.stringify(messages));

    document.getElementById("successMessage")
      .innerText = "Form Submitted Successfully";

    form.reset();

  });

}