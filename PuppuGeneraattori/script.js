function generate(n) {
    class RandomGenerator {

        constructor(range) {
            this.range = range;
            this.iteration = 0;
        }

        RandomNonRepeating() {
            let randomIndex = Math.floor(Math.random() * this.range);

            // jos viime iteraatio oli sama kuin nykyinen lisätään siihen 1. Loopatan nollaan jos mennään yli vaihteluvälin.
            while (randomIndex == this.iteration) {
                randomIndex++;
                if (randomIndex >= this.range) {
                    randomIndex = 0;
                }
            }

            this.iteration = randomIndex;

            return randomIndex;
        }
    }

    // sana taulukot (alkulause, jne...)
    var taulukko1 = ['Minusta tuntuu, että', 'Olisko kuitenkin mahdollista, että', 'Kuitenkin', 'Toivottavasti', 'Sen lisäksi', 'Uskon, ettei', 'Tämän vuoksi', 'Todennäköisesti', 'Vaikka todellisuudessa', 'Usein']
    var taulukko2 = ['mahdollisuuksien kartoittaminen', 'paikkansa löytäminen', 'taitojen kartuttaminen', 'itseensä panostaminen', 'motivaation löytäminen', 'suoraviivainen toiminta', 'muiden huomioiminen', 'moniulotteinen ajattelu', 'skaalautuva toiminta', 'prosessien mallintaminen']
    var taulukko3 = ['on erittäin oleellista', 'ei ole haitaksi', 'ei välttämättä riitä', 'tuottaa tuloksia', 'voi olla hyödyksi', 'ei ole tarpeellista', 'voi tuottaa hankaluuksia', 'ei todennäköisesti riitä', 'suo uusia mahdollisuuksia', 'lisää tuottavuutta']
    var taulukko4 = ['päämäärän saavuttamisessa.', 'haastavissa tilanteissa.', 'työelämässä.', 'aina.', 'tuottavassa toiminnassa.', 'pienissä yhteisöissä.', 'inklusiivisissa kulttuureissa.', 'tehtävän suorittamisessa.', 'jatkossa.', 'tulevaisuuden suunnittelussa.']


    let lause = [];

    let words = [taulukko1, taulukko2, taulukko3, taulukko4]; // taulukko sana taulukoista
    let randoms = new Array(words.length); // lista random generaattoreista

    for (let i = 0; i < words.length; i++) {
        randoms[i] = new RandomGenerator(words[i].length); // luo uusi RandomGenerator objekti
    }

    // toistetaan pyydetty määrä.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < words.length; j++) {
            // TODO: ensimmäinen iteraatio yleisölauseeksi.

            // iteroi sana taulukot ja valitse random indeksillä
            let random = randoms[j].RandomNonRepeating();
            lause.push(words[j][random]);
        }
    }
    lause[0] = 'Arvoisa yleisö,'

    return lause
}

function validate() {
    var num = Number(document.getElementById('lausemaara').value);

    if (num < 1 || !Number.isInteger(num)) {
        alert('Lauseiden haluttu määrä täytyy olla positiivinen kokonaisluku');
    }

    else {
        return num;
    }

}

function main() {
    var lauseidenMaara = validate();
    var generoidutLauseet = generate(lauseidenMaara)
    // console.log(generoidutLauseet);
    
    if (generoidutLauseet.length <= 1)
        return;
    
    const lauseElement = document.getElementById('lauseet');
    lauseElement.innerHTML = generoidutLauseet.join(' ');
}
