document.getElementById("strokeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const nihss = parseInt(form.nihss.value);
  const bp = form.bp.value.split("/");
  const systolic = parseInt(bp[0]);
  const diastolic = parseInt(bp[1]);
  const hr = parseInt(form.hr.value);
  const spo2 = parseInt(form.spo2.value);

  let resultMsg = "Patient not eligible for tPA.";

  if (
    nihss >= 4 &&
    systolic <= 185 &&
    diastolic <= 110 &&
    hr >= 60 && hr <= 100 &&
    spo2 >= 95
  ) {
    resultMsg = "Patient meets tPA eligibility criteria. Consult remote neurologist immediately.";
  }

  document.getElementById("result").textContent = resultMsg;
});
