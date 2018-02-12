import axios from 'axios'

export default {
    name: 'Grform',
    props: [
        'campaign_token'
    ],
    data() {
        return {
            modal: {
                name: '',
                email: '',
                phone: '',
                campaign_token: this.campaign_token
            },
            msg: '',
            error: '',
            isLoading: false
        }
    },
    methods: {
        register() {
            const payload = {
                ...this.modal
            }
            this.error = ''
            this.msg = ''
            this.isLoading = true
            axios.get('https://iteam.ru/grform', {
                params: {
                    ...payload
                }
            }).then((response) => {
                if (response.data.status === 'ok') {
                    this.msg = 'Поздравляем, вы зарегистрированы!'
                    // this.$router.push({ path: 'purchase' })
                    // location.reload()
                } else if (response.data.status === 'error') {
                    this.error = response.data.msg
                }
                this.isLoading = false
            }).catch((error) => {
                if (error.response.status === 422) {
                    this.error = 'Все поля обязательны к заполнению'
                } else {
                    this.error = 'Ошибка, пожалуйста проверьте правильность введенных данных и попробуйте еще раз'
                }
                this.isLoading = false
            })
        }
    },
    mounted() {
        $('#myModal').modal('hide');
    }
}