function generateResume(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const linkedin = document.getElementById("linkedin").value;
  const github = document.getElementById("github").value;
  const work = document.getElementById("work").value;
  const education = document.getElementById("education").value;
  const photoFile = document.getElementById("photo").files[0];

  const resumeContent = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
    <p><strong>GitHub:</strong> <a href="${github}" target="_blank">${github}</a></p>
    <p><strong>Work Experience:</strong> ${work}</p>
    <p><strong>Education:</strong> ${education}</p>
  `;
  document.getElementById("resume-content").innerHTML = resumeContent;

  if (photoFile) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("preview-photo").src = e.target.result;
    };
    reader.readAsDataURL(photoFile);
  } else {
    document.getElementById("preview-photo").style.display = "none";
  }

  
  document.getElementById("form-container").classList.add("hidden");
  document.getElementById("resume-preview").classList.remove("hidden");
}

function downloadPDF() {
  const element = document.getElementById("resume-preview");
  const downloadButton = document.querySelector("#resume-preview button");

  
  downloadButton.style.display = "none";

  const options = {
    margin:       1,
    filename:     'resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf()
    .set(options)
    .from(element)
    .save();
}
