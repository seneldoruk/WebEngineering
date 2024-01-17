export function renderKWs() {
    const navbar = document.querySelector(".horizontal");
    kwArr.forEach((kw) => {
        const title = kw.title;

        const li = document.createElement("li");
        const a = document.createElement("a");

        const funcName = `${title
            .toLowerCase()
            .replace(/\s/g, "")}.renderSelf(this)`;
        a.setAttribute("onclick", funcName);

        const titleToRender = `- ${title} -`;
        a.textContent = titleToRender;

        li.appendChild(a);
        navbar.appendChild(li);
    });

    navbar.children[0].firstChild.click();
}
export function fetchAJoke() {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => document.querySelector(".footer").textContent = data.joke)
}