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


//zad3
$(document).ready(function() {
    $('#btn1').click(function() {
        const row = $('tbody tr').eq(0); 
        toggleColor(row, $(this));
    });

    $('#btn2').click(function() {
        const row = $('tbody tr').eq(1); 
        toggleColor(row, $(this));
    });

    $('#btn3').click(function() {
        const row = $('tbody tr').eq(2); 
        toggleColor(row, $(this));
    });

    $('#btn4').click(function() {
        const row = $('tbody tr').eq(3); 
        toggleColor(row, $(this));
    });

    $('#btn5').click(function() {
        const row = $('tbody tr').eq(4);
        toggleColor(row, $(this));
    });

    $('#removeRow').click(function() {
        $('tbody tr.selected').remove(); 
    });

    function toggleColor(row, button) {
        if (button.data('toggled')) {
            row.css('background-color', '');
            button.css('background-color', '');
            button.data('toggled', false);
        } else {
            row.css('background-color', 'lightgreen');
            button.css('background-color', 'lightblue');
            button.data('toggled', true);
        }
    }

    $('#addRow').click(function() {
        const newRowId = $('tbody tr').length + 1;
        const newRow = `
            <tr>
                <td>${newRowId}</td>
                <td>Element ${newRowId}</td>
                <td>Opis elementu ${newRowId}</td>
                <td>Typ ${Math.floor(Math.random() * 3) + 1}</td>
                <td>Aktualny</td>
                <td><input type="text" value="Tekst ${newRowId}"></td>
            </tr>`;
        $('tbody').append(newRow); 
    });

    $('#filterEven').click(function() {
        $('tbody tr:even').css('background-color', 'lightyellow'); 
    });

    $('#filterOdd').click(function() {
        $('tbody tr:odd').css('background-color', 'lightcoral'); 
    });

    $('#firstLast').click(function() {
        $('tbody tr:first').css('background-color', 'lightblue'); 
        $('tbody tr:last').css('background-color', 'lightblue');
    });

    $('#notSelector').click(function() {
        $('tbody tr').not(':first').css('background-color', 'lightgray'); 
    });

    $('#containsText').click(function() {
        $('tbody td').filter(function() {
            return $(this).text().includes('A');
        }).css('background-color', 'lightgreen'); 
    });

    $('#showHidden').click(function() {
        $('tbody tr:hidden').show(); 
    });

    $('#hideRow').click(function() {
        $('tbody tr.selected').hide(); 
    });

    $('tbody').on('click', 'tr', function() {
        $(this).toggleClass('selected'); 
    });
});