Lezione 17 - Angula Forms
==========================


STEP 1
------
In app.js definisco la route per la view add-event, e in questa uso un controller che chiamo FormCtrl


In controller.js definisco il mio controller FormCtrl,.
Il controller definisce un array $scope.event che costituisce lo storage dei dati di cui faccio il submit
All'interno del controller definisco la function che chiamo formSubmit, passando come parametro la variabile dataform.
Tale function esegue il push della variabile dataform dentro l'array.

    !! attenzione a non passare il valore  by reference, altrimenti tutti gli elementi dell'array vengono sovrascritti con l'ultimo inserito. Usare quindi una copia, attraverso angular.copy
    
Nel codice HTML del form, dentro add-event.html, vado a fare il binding dei campi del form con l'ng-model che chiamo eventForm (ng-model="eventForm.name" ....)
Nel tag <form> vado ad aggiungere la funzione del controller da eseguire al post: ng-submit="formSubmit(eventForm)"


STEP 2 - refactoring using a service
------------------------------------
Scopo del refactory e' quello di separare il codice del post dal controller.



