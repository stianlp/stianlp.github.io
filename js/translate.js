(function(module) {
    module.config(function($translateProvider) {
        $translateProvider.translations('en', {
            'MY_DESIGNS': 'My designs',
            'WHAT_I_DO': 'What I do',
            'CONTACT': 'Contact',
            'WHAT_I_DONT_DO': 'What I don\'t do',
            'CONTACT_INFO': 'Contact information',
            'WHAT_I_DO_TEXT1': 'I strive to develop neat and user friendly web sites and applications of smaller size. Everything I develop will work on all platforms, whether its your desktop computer, tablet of smart phone.',
            'WHAT_I_DO_TEXT2': 'Have a look at my projects listed above to get familiar with my work. It’s often very useful to have a look at my previous projects to get a picture of what I can do for you.',
            'WHAT_I_DO_TEXT3': 'I believe in small projects where changes can be carried out fast. Therefore there are some things I don’t do. See the bullet points of what I don’t do.',
            'WHAT_I_DONT_DO_TEXT1': 'I don\'t develop large enterprise systems',
            'WHAT_I_DONT_DO_TEXT2': 'I don\'t work on websites with sensitive information and a high need for security',
            'WHAT_I_DONT_DO_TEXT3': 'I don\'t deal with old browsers',
            'CONTACT_ME': 'Contact me right away so we can get your webpage up and running tomorrow already!',
            'YOUR_PAGE': 'Your webpage',
            'PHONE': 'P',
            'EMAIL': '@'

        });
        $translateProvider.translations('no', {
            'MY_DESIGNS': 'Websider',
            'WHAT_I_DO': 'Hva gjør jeg?',
            'CONTACT': 'Kontakt',
            'WHAT_I_DONT_DO': 'Hva gjør jeg ikke?',
            'CONTACT_INFO': 'Kontaktinformasjon',
            'WHAT_I_DO_TEXT1': 'Jeg utvikler enkle og brukervennlige webapplikasjoner av mindre størrelse. Alt jeg utvikler fungerer på alle formater og enheter, enten det er en PC, en tablet eller en smarttelefon.',
            'WHAT_I_DO_TEXT2': 'Ta en titt på noen av mine prosjekter over for å bli kjent med arbeidet mitt. Det vil være ganske nyttig for deg å ta en titt på det jeg har gjort før. Da kan du danne deg et bilde av hva jeg kunne gjort for deg.',
            'WHAT_I_DO_TEXT3': 'Jeg tror på mindre prosjekter der endringer kan gjøres raskt! Derfor er det en del ting jeg ikke gjør. Ta en titt på listen for å være sikker på at jeg dekker dine behov.',
            'WHAT_I_DONT_DO_TEXT1': 'Jeg utvikler ikke store enterprise systemer',
            'WHAT_I_DONT_DO_TEXT2': 'Jeg utvikler ikke nettsider som stiller veldig store krav til sikkerhet',
            'WHAT_I_DONT_DO_TEXT3': 'Jeg utvikler ikke for eldgamle nettlesere',
            'CONTACT_ME': 'Jo før du kontakter meg, jo før er nettsiden din oppe og går!',
            'YOUR_PAGE': 'Din nettside',
            'PHONE': 'T',
            'EMAIL': '@'

        });
        $translateProvider.preferredLanguage('no');
    });
}(angular.module('slp')));