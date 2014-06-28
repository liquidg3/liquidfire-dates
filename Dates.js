define(['altair/facades/declare',
        'liquidfire/modules/apollo/mixins/_HasPropertyTypesMixin'
], function (declare, _HasPropertyTypesMixin) {

    return declare([_HasPropertyTypesMixin], {



        startup: function (options) {

            //hook into requests to see if forms were submitted
            this.on('titan:Alfred::did-execute-server').then(this.hitch('onDidExecuteAlfredWebServer'));

            return this.inherited(arguments);

        },

        onDidExecuteAlfredWebServer: function (e) {

            var server = e.get('server');
            server.serveStatically(this.resolvePath('public'), '/public/_dates');


        }


    });

});