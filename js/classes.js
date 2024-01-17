class QuestionAndAnswer {
    constructor(q, a, demo) {
        this.q = q;
        this.a = a;
        this.demo = demo;
    }
}

class KalenderWoche {
    constructor(title, qaArray) {
        this.title = title;
        this.qaArray = qaArray
    }

    static changeSelectedElement = (function () {
        var currentElement
        return (element) => {
            if (currentElement) {
                currentElement.classList.remove("active")
            }
            currentElement = element
            currentElement.classList.add("active")
        }
    })()

    async renderSelf(element) {
        KalenderWoche.changeSelectedElement(element)
        const entrypoint = document.querySelector('#entrypoint');
        entrypoint.innerHTML = '';
        entrypoint.style.opacity = '0';
        await new Promise(resolve => setTimeout(resolve, 499));
        this.qaArray.forEach((item, index) => {
            const div = document.createElement('div');
            const question = document.createElement('p');
            question.classList.add('question')
            question.textContent = `${index + 1} - ${item.q}`;

            if (item.demo) {
                const demo = document.createElement('a')
                demo.classList.add('demo')
                demo.setAttribute('target', '_blank')
                demo.setAttribute('href', `./demos/${item.demo}`)
                demo.setAttribute("style", "transform: scale(0.8) translate(20%, -20%);");

                var svgNS = "http://www.w3.org/2000/svg";
                var svg = document.createElementNS(svgNS, "svg");
                svg.setAttribute("x", "0px");
                svg.setAttribute("y", "0px");
                svg.setAttribute("fill", "white");
                svg.setAttribute("width", "20");
                svg.setAttribute("height", "20");
                svg.setAttribute("viewBox", "0 0 50 50");

                var path = document.createElementNS(svgNS, "path");
                path.setAttribute("d", "M 33.40625 0 C 32.855469 0.0507813 32.449219 0.542969 32.5 1.09375 C 32.550781 1.644531 33.042969 2.050781 33.59375 2 L 46.59375 2 L 38.59375 10 C 39.292969 10.199219 39.800781 10.707031 40 11.40625 L 48 3.40625 L 48 16.40625 C 47.996094 16.765625 48.183594 17.101563 48.496094 17.285156 C 48.808594 17.464844 49.191406 17.464844 49.503906 17.285156 C 49.816406 17.101563 50.003906 16.765625 50 16.40625 L 50 0 L 33.59375 0 C 33.5625 0 33.53125 0 33.5 0 C 33.46875 0 33.4375 0 33.40625 0 Z M 2 10 C 0.898438 10 0 10.898438 0 12 L 0 48 C 0 49.101563 0.898438 50 2 50 L 38 50 C 39.101563 50 40 49.101563 40 48 L 40 12 C 40 11.800781 40.007813 11.699219 39.90625 11.5 L 27.09375 24.3125 C 26.894531 24.511719 26.605469 24.59375 26.40625 24.59375 C 26.105469 24.59375 25.886719 24.511719 25.6875 24.3125 C 25.289063 23.914063 25.289063 23.304688 25.6875 22.90625 L 38.5 10.09375 C 38.300781 9.992188 38.199219 10 38 10 Z");

                svg.appendChild(path);

                demo.appendChild(svg)
                question.appendChild(demo)

            }

            div.appendChild(question);

            const answer = document.createElement('textarea');
            answer.textContent = item.a;
            const row = Math.max(5, item.a.split('\n').length)
            answer.setAttribute('rows', row);
            answer.style = "width: 100%";
            answer.setAttribute('disabled', true);
            div.appendChild(answer);



            const linebreak = document.createElement('hr')
            div.appendChild(linebreak)

            entrypoint.appendChild(div);
        });
        entrypoint.style.opacity = '1';

    }
}