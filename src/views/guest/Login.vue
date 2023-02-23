<template lang="html">
    <card>
        <card-title>
            Dispute
        </card-title>
        <form @submit.prevent>
            <card-content>
                <row-cmp v-for = "item in items">
                    {{$t(item.label)}}
                    <template v-slot:cmp>
                        <text-field
                        :key = "item.name"
                        :property = "item"
                        :is-error = "isError"
                        @on-change = "changeError($event, item.name)"
                        />
                    </template>
                </row-cmp>
                <row-cmp height="80px">
                    <template v-slot:cmp>
                        <check-box name="remember-me">
                            {{$t('Login.remember-me')}}
                        </check-box>
                    </template>
                </row-cmp>
            </card-content>
            <card-actions>
                <column cols="6" class="footer-text">
                    <a href="#" class="footer-link">
                        {{$t('Login.forgot-pass')}}
                    </a>
                </column>
                <column cols="6" class="row-flex jc-flex-end">
                    <button class="mdl-button mdl-js-button mdl-button--primary"
                    type="submit"
                    @click="onLogin()"
                    :disabled="!isEnabledSubmit">
                    {{$t('Login.login')}}
                </button>

                <button type="button" name="button" @click="onLogin()">Test</button>
            </column>
        </card-actions>
    </form>
</card>
</template>

<script>

import Card from "@/components/Card/Card.vue";
import CardTitle from "@/components/Card/CardTitle.vue";
import CardContent from "@/components/Card/CardContent.vue";
import CardActions from "@/components/Card/CardActions.vue";

import TextField from "@/components/TextField.vue";
import CheckBox from "@/components/CheckBox.vue";

import RowCmp from "@/components/RowCmp.vue";
import Column from "@/components/Column.vue";

export default
{
    metaInfo() {
        return {
            title: this.$t('Login.login'),
        }
    },
    data() {
        return {
            items: [
                {
                    label: 'caption.user',
                    placeHolder: 'Login.message.enter-username',
                    name: 'username',
                    inputType: 'text',
                    autocomplete: true
                },
                {
                    label: 'caption.password',
                    placeHolder: 'Login.message.enter-password',
                    name: 'password',
                    inputType: 'password',
                    message: {
                        info: 'Login.message.pattern-password',
                        error: 'Login.message.error-not-user',
                    },
                    btns: {
                        pass: true
                    }
                }
            ],
            isError: false,
            isEnabledSubmit: true,
            username: '',
            password: ''
        }
    },
    components: {
        Card,
        CardTitle,
        CardContent,
        CardActions,
        TextField,
        CheckBox,
        RowCmp,
        Column
    },
    methods: {
        changeError(value, fieldname) {
            //username or password
            this[fieldname] = value;
            this.isError = false;
            this.isEnabledSubmit = this.enabledSubmit();
        },
        enabledSubmit() {
            return Boolean(this.username) && Boolean(this.password);
        },
        // onLogin() {
        //     this.isError = !this.isError;
        // },
        Test(){
  //           let data = {
  //               'firstName': 'firstNameValue'
  //           };
  //           let str = JSON.stringify(data);
  //           this.axios.post('http://btt.front/site/ok',str
  // ,{
  //     "headers": {
  //       'Content-Type': 'application/json',
  //     }
  // }).then((response) => {
  //    console.log("reactNativeDemo","response get details:"+response.data);
  // })
  // .catch((error) => {
  //    console.log("axios error:",error);
  // });
            // this.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
            // this.axios.defaults.headers.common['Authorization'] = 'asd';
            let data= JSON.stringify({'qwe':1});
            this.$http.post('/rst/ok', data
            // , {
            //     headers: {
            //         'Content-Type': 'application/x-www-form-urlencoded'
            //     }
            // }
            )
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log( err);
            });
            // this.axios
            // .get('http://api.localhost/site/ok')
            // .then(
            //     response => console.log(response)
            // );
        },
        onLogin: function () {
            let username = this.username
            let password = this.password
            this.$store.dispatch('login', { username, password })
                .then(/*() => this.$router.push('/')*/)
                .catch(err => console.log(err))
        }
    }
}
</script>
