document.addEventListener("DOMContentLoaded", () => {
  const convertBtn = document.querySelector(".convert-btn");
  const markdownHolder = document.querySelector("#markdown-holder");

  // convert markdown to html
  async function markdownToHtml(markdown) {
    try {
      // request to convert markdown to html
      const response = await fetch("/htmlconvert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ markdown }),
      });

      if (response.ok) {
        const data = await response.json();
        displayHtml(data);
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error converting to HTML", error);
    }
  }

  function displayHtml(data) {
    console.log(data);
  }

  convertBtn.addEventListener("click", () => {
    if (markdownHolder.value) {
      const markdown = markdownHolder.value;
      markdownToHtml(markdown);
    }
  });
});
