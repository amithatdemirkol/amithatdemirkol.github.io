document.addEventListener("DOMContentLoaded", function () {
                              const tcInput = document.getElementById("tcInput");
                              const verifyButton = document.getElementById("verifyTC");
                              const resultDiv = document.getElementById("tcResult");
                          
                              verifyButton.addEventListener("click", function () {
                                  let tc = tcInput.value;
                          
                                  // TC no must be 11 digits
                                  if (tc.length !== 11 || !/^\d+$/.test(tc)) {
                                      resultDiv.innerHTML = `<span class="text-danger">❌ Invalid TC No!</span>`;
                                      return;
                                  }
                          
                                  // validation by algorithm
                                  let digits = tc.split("").map(Number);
                          
                                  if (digits[0] === 0) {
                                      resultDiv.innerHTML = `<span class="text-danger">❌ Invalid TC No!</span>`;
                                      return;
                                  }
                          
                                  let check1 = ((digits[0] + digits[2] + digits[4] + digits[6] + digits[8]) * 7 -
                                      (digits[1] + digits[3] + digits[5] + digits[7])) % 10 === digits[9];
                          
                                  let check2 = (digits.slice(0, 10).reduce((sum, num) => sum + num, 0)) % 10 === digits[10];
                          
                                  if (check1 && check2) {
                                      resultDiv.innerHTML = `<span class="text-success">✅ Valid TC No!!</span>`;
                                  } else {
                                      resultDiv.innerHTML = `<span class="text-danger">❌ Invalid TC No!</span>`;
                                  }
                              });
                          });
                          