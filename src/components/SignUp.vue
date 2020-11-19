<template>
    <div class="container">
        <h2>Sign Up Page</h2>
        <form @submit.prevent="signUp">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" name="email" v-model="email" />
            </div>
            <p class="text-danger">{{ dupEmail }}</p>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" name="password" v-model="password" />
            </div>
            <p class="text-danger">{{ weakPass }}</p>
            <p class="text-danger">{{ feedback }}</p>
            <input type="submit" class="btn btn-success" value="Sign Up" /> 
        </form>
    </div>
</template>

<script>
import { auth } from "../firebase/init"; 
import { db } from "../firebase/init"; 

//console.log(auth); 

export default {
    name:"SignUp", 
    data(){
        return {
            email:'',
            password:'',
            alias:'', 
            feedback:'',
            dupEmail:'',
            weakPass:'', 
        }
    }, 
    methods:{
        signUp(){
            if(this.email.trim().length == 0 || this.password.length == 0){
                this.feedback = 'Email or Password field cannot be blank';
            }

            if(this.email && this.password){
                this.feedback = '';     
                return auth.createUserWithEmailAndPassword(this.email, this.password)
                .then(cred=>{
                    db.collection('users').add({
                        user_id: cred.user.uid, 
                    })
                })
                .catch(error=>{
                    var errorCode = error.code; 
                    if(errorCode == 'auth/email-already-in-use'){
                        this.dupEmail = "Email exists";

                    }else{
                        this.dupEmail = ''; 
                    }
                    if(errorCode == 'auth/weak-password'){
                        this.weakPass = "Password must be at least 6 characters";                  
                    }else{
                        this.weakPass = ''; 
                    }
                })
             
            }
        }
    }
    
}
</script>

<style scoped>

</style>