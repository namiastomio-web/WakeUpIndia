console.log("welcome to wakeUpIndia");

document.getElementById("yearselect")
.addEventListener("change", function ()
                  {
                      const year = this.value;

                  if (year === "2026") {
                      window.location.href =
                          "kalahandi/2026.html";
                  }
                  });
