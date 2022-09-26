$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Ве молиме внесете го вашето име'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Ве молиме внесете го вашето презиме'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Ве молиме внесете ја вашата Електронска пошта'
                    },
                    emailAddress: {
                        message: 'Ве молиме внесете валидна Електронска пошта'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Ве молиме внесете телефонски број'
                    },
                     
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Ве молиме внесете адреса на живеење'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Ве молиме внесете град'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please select your state'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Ве молиме внесете поштенски број'
                    },
                    zipCode: {
                        country: '',
                        message: 'Ве молиме внесете валиден поштенски број'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Ве молиме внесете број над 10 карактери'
                    },
                    notEmpty: {
                        message: 'Ве молиме внесете текст.'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            
            e.preventDefault();

            
            var $form = $(e.target);

            
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});const cards=document.querySelectorAll('.cards');
cards.forEach(cards=>cards.addEventListener('click',gotolink));

function gotolink(){
   window.location.href="vrabotise.html"
}
