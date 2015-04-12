define(['dojo/_base/declare', 'apollo/propertytypes/_Base', 'altair/plugins/node!moment'],

    function (declare, _Base, moment) {

        return declare([_Base], {

            key: 'time',
            media: {
                css: ['/public/_dates/bootstrap-timepicker/css/bootstrap-timepicker.min.css'],
                js: [
                    '/public/_dates/bootstrap-timepicker/js/bootstrap-timepicker.min.js'
                ]
            },

            options: {
            },

            toViewValue: function (value, options, config) {
                return (value) ? moment(value).format('MM/D/YYYY') : '';
            },

            template: function (options) {
                return 'liquidfire:Dates/views/time';
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

                var v = this.toJsValue(value, options, config);

                if(v) {
                    v = v.toDate();
                }

                return v;
            },

            render: function (template, context) {

                context.moment = moment;
                context.display = (context.value) ? moment(context.value).format('MM/D/YYYY') : '';

                return this.parent.render(template, context);

            }

        });

    });
