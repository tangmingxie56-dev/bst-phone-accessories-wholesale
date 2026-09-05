/**
 * BST PHONE ACCESSORIES WHOLESALE — main.js
 * Minimal front-end: mobile nav + contact form handling
 */

(function () {
  "use strict";

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Active nav highlight ---------- */
  var path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });

  /* ---------- Contact form ---------- */
  var form = document.getElementById("inquiry-form");
  if (!form) return;

  var success = document.getElementById("form-success");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = (form.querySelector("#name") || {}).value || "";
    var company = (form.querySelector("#company") || {}).value || "";
    var country = (form.querySelector("#country") || {}).value || "";
    var interest = (form.querySelector("#interest") || {}).value || "";
    var message = (form.querySelector("#message") || {}).value || "";

    if (!name.trim() || !company.trim() || !country.trim() || !message.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    var body = [
      "Wholesale Inquiry — BST Phone Accessories",
      "",
      "Name: " + name,
      "Company: " + company,
      "Country: " + country,
      "Product Interest: " + (interest || "Not specified"),
      "",
      "Message:",
      message,
    ].join("\n");

    var subject = encodeURIComponent("Wholesale Inquiry from " + company);
    var mailto =
      "mailto:sales@bst-accessories.com?subject=" +
      subject +
      "&body=" +
      encodeURIComponent(body);

    if (success) {
      success.classList.add("visible");
      success.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    form.reset();

    // Open mail client after brief delay so user sees success state
    setTimeout(function () {
      window.location.href = mailto;
    }, 400);
  });
})();
