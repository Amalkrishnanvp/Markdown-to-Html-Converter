document.addEventListener("DOMContentLoaded", () => {
  const convertBtn = document.querySelector(".convert-btn");
  const markdownHolder = document.querySelector("#markdown-holder");
  const htmlShower = document.querySelector("#html-shower");

  // convert markdown to html
  async function markdownToHtml(markdownText) {
    try {
      // request to convert markdown to html
      const response = await fetch("/htmlconvert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ markdown: markdownText }),
      });

      if (response.ok) {
        const data = await response.json();
        displayHtml(data);
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error converting to HTML", error);
      throw error;
    }
  }

  function displayHtml(data) {
    htmlShower.innerText = data.html;
  }

  convertBtn.addEventListener("click", () => {
    if (markdownHolder.value) {
      const markdownText = markdownHolder.value;
      markdownToHtml(markdownText);
    }
  });
});
