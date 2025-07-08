function fillBeforeAfter() {
    const container = document.querySelector('.client-before-after');
    container.innerHTML = ``;
    const client = document.createElement("div");
    client.className = "client";

    client.innerHTML = `
        <div class="left">
            &#10096;
        </div>
        <div class="client-info">
            <h1>Esteban</h1>
            <p style="font-size: 18px;">Esteban was an overweight, depressed, directionless failure before he started
                training with Emiliano. He had tried everything, but nothing he did could earn
                the respect of his family, peers or spouse.
                <br><br>But then, he started training with Emiliano... and he experienced a deep change
                both <strong>externally</strong> and <strong>internally</strong>
                <br><br>
                Esteban's words: <em>"Emiliano made me realize that I am THAT/N*GGA, and that I shouldn't let
                anyone tell me otherwise. As soon as I realized this, the gains just came naturally."</em>
            </p>
        </div>
        <img src="assets/my-before.png" alt="client-before">
        <div class="trans-arrow">&rArr;</div>
        <img src="assets/my-after.png" alt="client-after">
        <div class="right">
            &#10097;
        </div>
    `;
    const left = client.querySelector('.left');
    left.onclick = () => {

    };

    const right = client.querySelector('.right');
    right.onclick = () => {

    };

    container.appendChild(client);
}

fillBeforeAfter();