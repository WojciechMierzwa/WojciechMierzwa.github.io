//zad1
$(document).ready(function() {
    $('span.pq').each(function() {
    const quote=$(this).clone();
    quote.removeClass('pq');
    quote.addClass('pullquote');
    $(this).before(quote);
    }); // koniec funkcji each
    }); // koniec funkcji ready

//zad2

//podwojne klikniecie
$(document).dblclick(function() {
    alert("Dwukrotnie kliknięto na stronie!");
});

//najechanie myszka
$('#Projekt\\ 3 a').hover(function() {
    const message = "<p>Wskazałeś odnośnik myszą!</p>";
    $('.main').append(message);
});
$('#clickButton').click(function() {
    $(this).val("zostałem kliknięty!");
});


$(document).ready(function() {
    // Funkcja do generowania losowej klasy
    function getRandomClass() {
        const colorClasses = ['red-text', 'green-text', 'blue-text'];
        const fontClasses = ['large-font', 'medium-font', 'small-font'];
        const decorationClasses = ['underline', '']; 
        const backgroundClasses = ['highlight', '']; 

        return {
            colorClass: colorClasses[Math.floor(Math.random() * colorClasses.length)],
            fontClass: fontClasses[Math.floor(Math.random() * fontClasses.length)],
            decorationClass: decorationClasses[Math.floor(Math.random() * decorationClasses.length)],
            backgroundClass: backgroundClasses[Math.floor(Math.random() * backgroundClasses.length)]
        };
    }


    $('#clickButton').click(function() {
        const randomClass = getRandomClass();
        $('.example').removeClass().addClass(randomClass.colorClass + ' ' + randomClass.fontClass + ' ' + randomClass.decorationClass + ' ' + randomClass.backgroundClass);
    });

    for (let i = 1; i <= 10; i++) {
        $(`#${i}`).click(function() {
     
            const elementsToChange = ['.song-section h1', '.song-section h2', '.song-section h3', '.song-section p span', '.song-section p em', '.song-section p u'];
            const randomElement = $(elementsToChange[Math.floor(Math.random() * elementsToChange.length)]).first();


            if (randomElement.length) {
                const randomClass = getRandomClass();
                randomElement.removeClass().addClass(randomClass.colorClass + ' ' + randomClass.fontClass + ' ' + randomClass.decorationClass + ' ' + randomClass.backgroundClass);

                const tagName = randomElement.prop('tagName').toLowerCase(); 
                const message = `<p>Zmieniono styl elementu <strong>${tagName}</strong>: klasy to ${randomClass.colorClass}, ${randomClass.fontClass}, ${randomClass.decorationClass}, ${randomClass.backgroundClass} - TAG: ${tagName}</p>`;
               
                $('#msg').append(message);
            }

            $(this).val(`NR. ${i} kliknięty`);
        });
    }
});


