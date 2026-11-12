(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("primary-nav");

  function setMenu(open) {
    nav.setAttribute("data-open", open ? "true" : "false");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (toggle && nav) {
    setMenu(false);

    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) { setMenu(false); }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  var form = document.getElementById("contact-form");
  var summary = document.getElementById("error-summary");
  var status = document.getElementById("form-status");

  var rules = {
    name: function (value) {
      return value.trim() ? "" : "Enter your full name.";
    },
    email: function (value) {
      if (!value.trim()) { return "Enter your email address."; }
      var looksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
      return looksValid ? "" : "Enter an email address like name@example.com.";
    },
    message: function (value) {
      return value.trim().length >= 10 ? "" : "Enter a message of at least 10 characters.";
    }
  };

  function showError(field, message) {
    var input = document.getElementById(field);
    var error = document.getElementById(field + "-error");
    if (message) {
      input.setAttribute("aria-invalid", "true");
      error.textContent = message;
      error.hidden = false;
    } else {
      input.removeAttribute("aria-invalid");
      error.textContent = "";
      error.hidden = true;
    }
  }
  function validateAll() {
    var problems = [];
    Object.keys(rules).forEach(function (field) {
      var message = rules[field](document.getElementById(field).value);
      showError(field, message);
      if (message) { problems.push({ field: field, message: message }); }
    });
    return problems;
  }

  function renderSummary(problems) {
    summary.innerHTML = "";
    if (!problems.length) { summary.hidden = true; return; }

    var intro = document.createElement("p");
    intro.textContent = "There " + (problems.length === 1 ? "is 1 problem" : "are " + problems.length + " problems") + " with your form:";
    var list = document.createElement("ul");

    problems.forEach(function (item) {
      var li = document.createElement("li");
      var link = document.createElement("a");
      link.href = "#" + item.field;
      link.textContent = item.message;
      link.addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById(item.field).focus();
      });
      li.appendChild(link);
      list.appendChild(li);
    });

    summary.appendChild(intro);
    summary.appendChild(list);
    summary.hidden = false;
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      status.hidden = true;

      var problems = validateAll();
      renderSummary(problems);

      if (problems.length) {
        summary.focus();
        return;
      }

      form.reset();
      status.textContent = "Thank you. Your message is ready to send once a form service is connected.";
      status.hidden = false;
    });

    Object.keys(rules).forEach(function (field) {
      document.getElementById(field).addEventListener("blur", function () {
        showError(field, rules[field](this.value));
      });
    });
  }

  var year = document.getElementById("year");
  if (year) { year.textContent = new Date().getFullYear(); }
})();
