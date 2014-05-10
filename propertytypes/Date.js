define(['dojo/_base/declare', 'apollo/propertytypes/Date'],

    function (declare, Date) {

        return declare([Date], {

            media: {
                css: ['liquidfire:Dates/public/css/datepicker3.css'],
                js: ['liquidfire:Dates/public/js/bootstrap-datepicker.js']
            },

            toViewValue: function (value, options, config) {
                return 'render this bitch!';
            },

            template: function (options) {
                return 'liquidfire:Dates/views/date';
            }

        });

    });
