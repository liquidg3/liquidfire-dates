define(['dojo/_base/declare', 'apollo/propertytypes/_Base', 'altair/plugins/node!moment'],

    function (declare, _Base, moment) {

        return declare([_Base], {

            key: 'date',
            media: {
                css: ['/public/_dates/css/datepicker3.css'],
                js: ['/public/_dates/js/bootstrap-datepicker.js']
            },

            options: {
                format: {
                    type: 'string',
                    options: {
                        label: 'The format used for import, export ,etc.'
                    }
                },
                httpRequestFormat: {
                    type: 'string',
                    options: {
                        label: 'The format used for dealing with http requests'
                    }
                }
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

                var v = (value) ? moment(value) : null;

                if(v) {

                    if(options.httpRequestFormat) {
                        v = v.format(options.httpRequestFormat);
                    } else {
                        v = v.toISOString();
                    }

                }

                return v;
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
