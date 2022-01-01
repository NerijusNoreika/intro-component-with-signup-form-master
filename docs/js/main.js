new Vue({
    el: '#app',
    data: {
        form: {
            name: {
                text: '',
                errors: false,
            },
            surname: {
                text: '',
                errors: false,
            },
            email: {
                text: '',
                errors: false,
                
            },
            password: {
                text: '',
                errors: false,
            }
        }
    },
    methods: {
        submitForm(e) {
            console.log('sada')
            let submit = true;

            if (this.form.name.text == '') {
                submit = false;
                this.form.name.errors = true;
            }
            if (this.form.surname.text == '') {
                submit = false;
                this.form.surname.errors = true;
            }
            if (this.form.password.text == '') {
                submit = false;
                this.form.password.errors = true;
            }
            if (!this.testEmail()) {
                submit = false;
                this.form.email.errors = true;
            }

        },
        resetStyle(str) {
            if (this.form[str].errors)  {
                this.form[str].errors = false;
            }
        },
        testEmail()
         {
            let email = this.email, 
                regex = new RegExp("/^\S+@\S+\.\S+$/")
            return regex.test(email);
        }

    },
});

Vue.component('ValidationProvider', VeeValidate.ValidationProvider);