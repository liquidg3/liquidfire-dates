define(['dojo/_base/declare', 'apollo/propertytypes/_Base', 'altair/plugins/node!moment'],

    function (declare, _Base, moment) {

        return declare([_Base], {

            key: 'date',
            media: {
                css: ['/public/_dates/css/datepicker3.css'],
                js: ['/public/_dates/js/bootstrap-datepicker.js']
            },

            toViewValue: function (value, options, config) {
                return (value) ? moment(value).format('MM/D/YYYY') : '';
            },

            template: function (options) {
                return 'liquidfire:Dates/views/date';
            },

            toJsValue: function (value, options, config) {
                return (value) ? moment(value) : null;
            },

            toHttpResponseValue: function (value, options, config) {
                return (value) ? moment(value).toISOString() : null;
            },


            fromFormSubmissionValue: function (value, options, config) {
                return (value) ? new Date(value) : null;
            },

            toDatabaseValue: function (value, options, config) {
                return value;
            },

            render: function (template, context) {

                context.moment = moment;
                context.display = (context.value) ? moment(context.value).format('MM/D/YYYY') : '';

                return this.parent.render(template, context);

            }

        });

    });
