/*!
 * bs-sistema v0.0.1 - Um framework para sistemas web.
 * Copyright (c) 2016 Rodrigo Speller
 * Licença em https://github.com/rodrigo-speller/bs-sistema/blob/master/LICENSE
 */
(function($, namespace, window, document, undefined) {
    // VARIÁVEIS

    var app,
        loadCounter = 0,
        pageWrapper = $('#page-wrapper')[0];

    // FUNÇÕES

    function pushLoad() {
        loadCounter++;
        document.documentElement.setAttribute('loading', true);
    }

    function popLoad() {
        if (!(loadCounter = Math.max(--loadCounter, 0)))
            document.documentElement.removeAttribute('loading');
    }

    function navigate(url) {
        $(pageWrapper).load(url);
    }

    // EXPORTS

    app = namespace.app = {
        pushLoad: pushLoad,
        popLoad: popLoad,

        navigate: navigate
    }

    // INICIALIZAÇÃO

    $(function () {
        // LESS
        pushLoad();
        less.pageLoadFinished.then(function () {
            popLoad();
        });
    });

})(jQuery, window, window, document);
