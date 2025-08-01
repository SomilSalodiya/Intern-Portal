document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("name").textContent = data.name;
      document.getElementById("referral").textContent = data.referralCode;
      document.getElementById("donations").textContent = data.donations;
    })
    .catch((err) => {
      console.error("Error loading data:", err);
    });
});
