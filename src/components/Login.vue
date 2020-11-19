<template>
    <div class="container">
        <User #user="{ user }">

            <div v-if="user">
                <UserProfile :user="user" />
                <Test :user="user" />
            </div>

            <div v-else>
                <h2>Login Page</h2>
                <h3>Login Anonymously</h3>
        <button @click="auth.signInAnonymously()">Sign In</button>
            <form @submit.prevent="login">
                <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" class="form-control" v-model="email" /> 
                <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" class="form-control" v-model="password" />
                </div>
                <p class="text-danger">{{ blankField }}</p>
                <p class="text-danger">{{ feedback }}</p>
                <input type="submit" value="Login" />
                </div>
                </form>
            </div>
        </User>
    </div>
</template>

<script>

import { auth } from "../firebase/init"; 
import User from "./User.vue"; 
import UserProfile from './UserProfile.vue'; 
import Test from './Test.vue'; 


export default {
    name:'Login', 
    components:{
        User, 
        UserProfile, 
        Test, 
    },
    data(){
        return {
            auth, 
            email:'', 
            password:'',
            feedback:'',
            blankField:'',  
        }
    },
    methods:{
        login(){
            if(this.email.trim().length == 0 || this.password.length == 0){
                this.blankField = "Email or Password field cannot be blank"; 
            }
            if(this.email && this.password){
                this.blankField = ''; 
                return auth.signInWithEmailAndPassword(this.email, this.password)
                .then(cred=>{ 
                    console.log(cred.user.email); 
                })
                .catch(error=>{
                    var errorCode = error.code;
                    if(errorCode == 'auth/invalid-email' || errorCode == 'auth/user-not-found' || errorCode == 'auth/wrong-password'){
                        this.feedback = 'Incorrect Credentials'; 
                    }
                })
            }
        }
    }
    
}
</script>

<style scoped>

</style>