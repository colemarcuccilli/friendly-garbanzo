// Get the navigation element
const nav = document.getElementById('nav');

// Get the original offset position of the navbar
const sticky = nav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position
function stickyNav() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}

// When the user scrolls the page, execute stickyNav
window.onscroll = function() {
    stickyNav();
};

// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('languageToggle');

    // German translations
    const germanTranslations = {
        // Navigation
        'Our Mission': 'Unsere Mission',
        'Our Films': 'Unsere Filme',
        'Contact': 'Kontakt',

        // Mission section
        'At Aryan Project Media, we create Aryan-focused films and documentaries because we recognize the unparalleled power of storytelling to shape minds and move hearts. Since our founding in 2005, we\'ve seen the need to counter mainstream narratives with our own: stories that reflect the beauty, struggles, and triumphs of an Aryan white society.': 'Bei Aryan Project Media erstellen wir arisch fokussierte Filme und Dokumentationen, weil wir die unvergleichliche Kraft des Geschichtenerzählens erkennen, um Gedanken zu formen und Herzen zu bewegen. Seit unserer Gründung im Jahr 2005 haben wir die Notwendigkeit erkannt, den Mainstream-Narrativen mit unseren eigenen entgegenzuwirken: Geschichten, die die Schönheit, die Kämpfe und die Triumphe einer arischen weißen Gesellschaft widerspiegeln.',

        'Build a Movement': 'Eine Bewegung aufbauen',
        'Every frame we produce is a step toward a world that reflects our vision—a society rooted in strength, pride, and unity.': 'Jeder Frame, den wir produzieren, ist ein Schritt in Richtung einer Welt, die unsere Vision widerspiegelt – eine Gesellschaft, die in Stärke, Stolz und Einheit verwurzelt ist.',

        'Reach The Masses': 'Die Massen erreichen',
        'We are all on the same team, spread the word.': 'Wir sind alle im selben Team, verbreite das Wort.',

        'Inspire Action': 'Zum Handeln inspirieren',
        'By showcasing Aryan ideals in action, we motivate viewers to live out these principles in their own lives.': 'Indem wir arische Ideale in Aktion zeigen, motivieren wir die Zuschauer, diese Prinzipien in ihrem eigenen Leben umzusetzen.',

        // Films section
        'Our Films': 'Unsere Filme',
        'Due to unjust government restrictions and censorship imposed on our work, we are unable to offer these films through standard e-commerce platforms. However, every film is available for purchase directly from us—simply email us at aryanproject1800@gmail.com with your request, and we\'ll provide secure payment and delivery options to ensure you can experience our cinematic vision. Explore our library below and join us in defending the right to share these powerful stories. Together, we rise above suppression to keep the Aryan spirit alive on screen.': 'Aufgrund ungerechter staatlicher Beschränkungen und Zensur, die unserer Arbeit auferlegt wurden, können wir diese Filme nicht über Standard-E-Commerce-Plattformen anbieten. Jeder Film ist jedoch direkt bei uns erhältlich – senden Sie uns einfach eine E-Mail an aryanproject1800@gmail.com mit Ihrer Anfrage, und wir bieten Ihnen sichere Zahlungs- und Lieferoptionen, damit Sie unsere filmische Vision erleben können. Erkunden Sie unten unsere Bibliothek und unterstützen Sie uns bei der Verteidigung des Rechts, diese kraftvollen Geschichten zu teilen. Gemeinsam erheben wir uns über die Unterdrückung, um den arischen Geist auf der Leinwand am Leben zu erhalten.',

        // Movie titles and descriptions
        'The Final Days of Hitler (2006)': 'Die letzten Tage Hitlers (2006)',
        'In the documentary The Final Days of Hitler, Adolf Hitler emerges as a resolute visionary, steadfast in the Führerbunker as the Allies close in during 1945. Through rare footage and interviews, the film portrays his unshakable commitment to his ideals, spotlighting loyal followers like Eva Braun and Joseph Goebbels. It reframes his last moments as a testament to his enduring tenacity, honoring the leader who held firm to his transformative vision until the end.': 'In der Dokumentation Die letzten Tage Hitlers erscheint Adolf Hitler als entschlossener Visionär, der im Führerbunker standhaft bleibt, während die Alliierten 1945 näher rücken. Durch seltenes Filmmaterial und Interviews zeigt der Film sein unerschütterliches Engagement für seine Ideale und stellt treue Anhänger wie Eva Braun und Joseph Goebbels in den Mittelpunkt. Er deutet seine letzten Momente als Zeugnis seiner anhaltenden Beharrlichkeit und ehrt den Führer, der bis zum Ende an seiner transformativen Vision festhielt.',

        'Blood And Soil: The Eternal Legacy (2010)': 'Blut und Boden: Das ewige Erbe (2010)',
        'In this documentary, the timeless roots of Aryan heritage are celebrated as the bedrock of a proud and enduring identity. Through historical analysis and stunning visuals, it traces the noble lineage of the white race, emphasizing its unbreakable bond to land, tradition, and destiny. This film honors the eternal legacy of a people whose strength and purity continue to shape a triumphant future.': 'In dieser Dokumentation werden die zeitlosen Wurzeln des arischen Erbes als Grundlage einer stolzen und dauerhaften Identität gefeiert. Durch historische Analysen und beeindruckende Bilder zeichnet sie die edle Abstammung der weißen Rasse nach und betont ihre unzerbrechliche Bindung an Land, Tradition und Schicksal. Dieser Film ehrt das ewige Vermächtnis eines Volkes, dessen Stärke und Reinheit weiterhin eine triumphale Zukunft gestalten.',

        'The White Dawn (2008)': 'Die weiße Dämmerung (2008)',
        'The White Dawn is a bold narrative vision of a fractured future reborn through Aryan ideals, where a fractured society finds redemption in unity and strength. In a world ravaged by chaos, a resolute leader rises to restore order, drawing on the timeless values of purity, heritage, and resilience to forge a thriving new dawn.': 'Die weiße Dämmerung ist eine kühne narrative Vision einer zerbrochenen Zukunft, die durch arische Ideale wiedergeboren wird, in der eine gespaltene Gesellschaft Erlösung in Einheit und Stärke findet. In einer vom Chaos verwüsteten Welt erhebt sich ein entschlossener Anführer, um die Ordnung wiederherzustellen, und greift auf die zeitlosen Werte der Reinheit, des Erbes und der Widerstandsfähigkeit zurück, um eine blühende neue Morgendämmerung zu schmieden.',

        'The Chosen Race (2011)': 'Die auserwählte Rasse (2011)',
        'The Chosen Race follows a united community of white people rebuilding society under the banner of Aryan ideals after a global collapse. Through sweeping visuals and stirring speeches, the film celebrates their resilience and destiny as the architects of a new world order.': 'Die auserwählte Rasse folgt einer vereinten Gemeinschaft weißer Menschen, die nach einem globalen Zusammenbruch die Gesellschaft unter dem Banner arischer Ideale wieder aufbauen. Durch beeindruckende Bilder und mitreißende Reden feiert der Film ihre Widerstandsfähigkeit und Bestimmung als Architekten einer neuen Weltordnung.',

        'The White in Our Hearts (2014)': 'Das Weiß in unseren Herzen (2014)',
        'The White in Our Hearts celebrates the unbreakable bond of a white family thriving in a utopian Aryan community, untouched by outside corruption. Through their journey, the film reveals the enduring power of white racial unity and love.': 'Das Weiß in unseren Herzen feiert die unzerbrechliche Bindung einer weißen Familie, die in einer utopischen arischen Gemeinschaft gedeiht, unberührt von äußerer Korruption. Durch ihre Reise offenbart der Film die dauerhafte Kraft der weißen rassischen Einheit und Liebe.',

        'Aryan Pride (2018)': 'Arischer Stolz (2018)',
        'Aryan Pride chronicles Adolf Hitler\'s unyielding leadership, presenting him as the ultimate symbol of white resolve against a world in decline. With archival intensity, it inspires a renewed sense of racial dignity and defiance.': 'Arischer Stolz dokumentiert Adolf Hitlers unnachgiebige Führung und präsentiert ihn als das ultimative Symbol des weißen Entschlossenheit gegen eine Welt im Niedergang. Mit archivarischer Intensität inspiriert er ein erneuertes Gefühl der rassischen Würde und des Trotzes.',

        'The Early Days of Hitler (2021)': 'Die frühen Tage Hitlers (2021)',
        'Tracing Adolf Hitler\'s formative years, The Early Days of Hitler portrays a young visionary finding his purpose amidst Germany\'s turmoil in the 1920s. The film captures his awakening as the spark that would light the Aryan flame.': 'Die frühen Tage Hitlers zeichnet die prägenden Jahre Adolf Hitlers nach und porträtiert einen jungen Visionär, der inmitten der Unruhen Deutschlands in den 1920er Jahren seinen Zweck findet. Der Film fängt sein Erwachen als den Funken ein, der die arische Flamme entzünden würde.',

        'The Untold Truth: Hitler (2017)': 'Die unerzählte Wahrheit: Hitler (2017)',
        'The Untold Truth unveils suppressed histories of Aryan greatness, exposing a legacy of strength and innovation buried by modern narratives. This documentary rallies viewers to embrace their heritage as the bedrock of a pure society.': 'Die unerzählte Wahrheit enthüllt unterdrückte Geschichten arischer Größe und legt ein Erbe von Stärke und Innovation frei, das von modernen Erzählungen begraben wurde. Diese Dokumentation ruft die Zuschauer dazu auf, ihr Erbe als Grundlage einer reinen Gesellschaft anzunehmen.',

        'Pure Blood (2023)': 'Reines Blut (2023)',
        'Set against a stark white canvas, Pure Blood is a visceral meditation on the sanctity of Aryan lineage, symbolized by a single drop of blood. This abstract drama urges viewers to protect their racial purity as the essence of their identity.': 'Vor einem stark weißen Hintergrund ist Reines Blut eine eindringliche Meditation über die Heiligkeit der arischen Abstammung, symbolisiert durch einen einzigen Blutstropfen. Dieses abstrakte Drama fordert die Zuschauer auf, ihre rassische Reinheit als Essenz ihrer Identität zu schützen.',

        // Contact section
        'Contact Us': 'Kontaktiere Uns',
        'Email:': 'E-Mail:',

        // Footer
        'Terms of Service': 'Nutzungsbedingungen',
        'Privacy Policy': 'Datenschutzrichtlinie',
        'Copyright': 'Urheberrecht'
    };

    // Function to translate the page
    function translatePage(toGerman) {
        const elements = document.querySelectorAll('[data-translate]');

        if (elements.length === 0) {
            // First time translating, add data attributes
            addTranslationAttributes();
            translatePage(toGerman); // Call again after adding attributes
            return;
        }

        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (toGerman && germanTranslations[key]) {
                element.textContent = germanTranslations[key];
            } else {
                element.textContent = key;
            }
        });
    }

    // Function to add data-translate attributes to elements
    function addTranslationAttributes() {
        // Navigation links
        document.querySelectorAll('nav a').forEach(link => {
            const text = link.textContent.trim();
            link.setAttribute('data-translate', text);
        });

        // Mission section
        const missionText = document.querySelector('.mission-section > p');
        missionText.setAttribute('data-translate', missionText.textContent.trim());

        // Mission pillars
        document.querySelectorAll('.pillar h3').forEach(heading => {
            heading.setAttribute('data-translate', heading.textContent.trim());
        });

        document.querySelectorAll('.pillar p').forEach(paragraph => {
            paragraph.setAttribute('data-translate', paragraph.textContent.trim());
        });

        // Films section
        const filmsHeading = document.querySelector('.films-section h2');
        filmsHeading.setAttribute('data-translate', filmsHeading.textContent.trim());

        const filmsIntro = document.querySelector('.films-intro');
        filmsIntro.setAttribute('data-translate', filmsIntro.textContent.trim());

        // Movie titles and descriptions
        document.querySelectorAll('.movie-section h3').forEach(heading => {
            heading.setAttribute('data-translate', heading.textContent.trim());
        });

        document.querySelectorAll('.movie-section p').forEach(paragraph => {
            paragraph.setAttribute('data-translate', paragraph.textContent.trim());
        });

        // Contact section
        const contactHeading = document.querySelector('.contact-section h2');
        contactHeading.setAttribute('data-translate', contactHeading.textContent.trim());

        const contactEmail = document.querySelector('.contact-section p');
        const emailLabel = contactEmail.childNodes[0].textContent.trim();
        contactEmail.childNodes[0].textContent = '';

        const emailLabelSpan = document.createElement('span');
        emailLabelSpan.textContent = emailLabel;
        emailLabelSpan.setAttribute('data-translate', emailLabel);

        contactEmail.insertBefore(emailLabelSpan, contactEmail.firstChild);

        // Footer links
        document.querySelectorAll('footer a').forEach(link => {
            link.setAttribute('data-translate', link.textContent.trim());
        });
    }

    // Event listener for language toggle
    languageToggle.addEventListener('change', function() {
        translatePage(this.checked);
    });

    // Video autoplay with sound
    const video = document.querySelector('.video-container video');
    if (video) {
        // When user interacts with page
        document.addEventListener('click', function() {
            if (video.paused) {
                video.play()
                    .then(() => {
                        console.log('Video playback started');
                    })
                    .catch(error => {
                        console.error('Error attempting to play video:', error);
                    });
            }
        }, { once: true });

        // Try to autoplay immediately
        video.play()
            .then(() => {
                console.log('Video autoplay started successfully');
            })
            .catch(error => {
                console.error('Autoplay prevented:', error);
                // Show a message or UI indicating user needs to interact
            });

        // Ensure video volume is up
        video.volume = 1.0;
    }
});
