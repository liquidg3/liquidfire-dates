define(['dojo/_base/declare', 'apollo/propertytypes/_Base', 'altair/plugins/node!moment'],

    function (declare, _Base, moment) {

        return declare([_Base], {

            key: 'date',
            media: {
                css: ['liquidfire:Dates/public/css/datepicker3.css'],
                js: ['liquidfire:Dates/public/js/bootstrap-datepicker.js']
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
                return (value) ? moment(value) : null;
            },


            fromFormSubmissionValue: function (value, options, config) {
                return new Date(value);
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
