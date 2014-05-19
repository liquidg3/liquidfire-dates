define(['dojo/_base/declare', 'apollo/propertytypes/Date', 'altair/plugins/node!moment'],

    function (declare, DateBase, moment) {

        return declare([DateBase], {

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


            fromFormSubmissionValue: function (value, options, config) {

                return new Date(value);

            },

            render: function (template, context) {

                context.moment = moment;
                context.display = (context.value) ? moment(context.value).format('MM/D/YYYY') : '';

                return this.parent.render(template, context);

            }

        });

    });
