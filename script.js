// Aditya Devfolio interactions
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Update this email address before publishing your website.
const emailAddress = "aditya@example.com";
const emailLink = document.getElementById("emailLink");
const copyEmail = document.getElementById("copyEmail");
const contactHint = document.getElementById("contactHint");

emailLink.href = `mailto:${emailAddress}`;

copyEmail?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(emailAddress);
    copyEmail.textContent = "Copied!";
    contactHint.textContent = "Email address copied. Remember to replace the placeholder with your real email.";
  } catch {
    contactHint.textContent = `Copy this email address: ${emailAddress}`;
  }
});
