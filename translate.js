function translateTextToEstonian() {
    const translatedText = {
        'What is League of Legends?': 'Mis on League of Legends?',
        'Release': 'Väljalase',
        'Gameplay': 'Mängumehaanika',
        'E-Sports': 'E-sport',
        'LoL as an eSport': 'Lol E-spordina',
        'The game was released on 27th of October 2009. The game is both developed and produced by Riot Games. The game is categorized under the action, and the MOBA (Multiplayer Online Battle Arena) genres.':
            'Mäng anti välja 27. oktoobril 2009. Mäng on arendatud ja toodetud Riot Gamesi poolt. Mäng kuulub tegevuse ja MOBA (Mitmikmängijaga Online Lahing Areen) žanritesse.',
        'League of Legends is a team-based strategy game where two teams of five face off to destroy the other teams base. The Nexus is the heart of both teams’ bases. To win the game, a team must destroy the enemy’s Nexus first.':
            'League of Legends on meeskondlik strateegiamäng, kus kaks viieliikmelist meeskonda võistlevad teise meeskonna baasi hävitamise nimel. Nexus on mõlema meeskonna baasi süda. Mängu võitmiseks peab meeskond hävitama vaenlase Nexuse esimesena.',
        "In the game, teams navigate lanes and a jungle area, eliminating enemy champions and creeps to earn gold and experience, strategically pushing through towers toward the opposing team's nexus for victory.":
            "Mängus liiguvad meeskonnad radu ja džungli ala, elimineerides vaenlase kangelasi ja kreatuure kulla ja kogemuste saamiseks ning strateegiliselt tungivad läbi tornide vastase meeskonna nexuse suunas võidu saavutamiseks.",
        "League of Legends esports involves professional teams competing in structured leagues and tournaments globally, showcasing high-level gameplay and strategic teamwork, captivating millions of viewers and offering substantial prize pools and sponsorships. The competitive scene features skilled players specializing in roles, employing diverse strategies and champion selections to outplay opponents, aiming for victory and prestigious championship titles.":
            "League of Legendsi e-spordis osalevad professionaalsed meeskonnad võistlevad struktureeritud liigades ja turniiridel üle maailma, näidates kõrgetasemelist mängu ja strateegilist meeskonnatööd, haarates miljoneid vaatajaid ja pakkudes olulisi auhindu ning sponsorlusi. Konkurents on täis oskustega mängijaid, kes on spetsialiseerunud rollidele, kasutades erinevaid strateegiaid ja kangelaste valikuid vastaste ületamiseks, eesmärgiga võita prestiižikaid meistrivõistluste tiitleid.",

        
    
    };

    const h1Elements = document.querySelectorAll('.content h1');
    h1Elements.forEach(h1 => {
        const originalText = h1.textContent.trim();
        if (translatedText[originalText]) {
            h1.textContent = translatedText[originalText];
        }
    });

    const pElements = document.querySelectorAll('.content p');
    pElements.forEach(p => {
        const originalText = p.textContent.trim();
        if (translatedText[originalText]) {
            p.textContent = translatedText[originalText];
        }
    });

    const aboutLink = document.querySelector('a[href="https://www.leagueoflegends.com/en-gb/"]');
    if (aboutLink) {
        aboutLink.textContent = 'Lisateave';
    }

    const seeMoreLink = document.querySelector('a[href="Leht3.html"]');
    if (seeMoreLink) {
        seeMoreLink.textContent = 'Mängumehaanika';
    }
}

function setupTranslationButton() {
    const translateButton = document.createElement('button');
    translateButton.textContent = 'Tõlgi eesti keelde';
    translateButton.onclick = translateTextToEstonian;
    translateButton.classList.add('translate-button'); // Add a class for styling

    const header = document.querySelector('.navbar_phil');
    if (header) {
        header.appendChild(translateButton);
    }
}

document.addEventListener('DOMContentLoaded', setupTranslationButton);
