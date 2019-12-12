(() => {
  const msInput = document.querySelector("#msInput");
  const dateOutput = document.querySelector("#dateOutput");
  const shortDateOutput = document.querySelector("#shortDateOutput");
  msInput.addEventListener("keyup", onInputChange);

  function onInputChange() {
    const date = Number(msInput.value) ? new Date(Number(msInput.value)) : "";

    dateOutput.value = date;
    shortDateOutput.value = date.toLocaleString("en-MY");
  }
})();
