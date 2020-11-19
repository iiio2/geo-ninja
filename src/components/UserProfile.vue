<template>
    <div>
         <p class="lead">
            Logged-as {{ user.uid }}
        </p>
        <button @click="auth.signOut()" >Sign Out</button>
    </div>
</template>

<script>
import { auth } from '../firebase/init';

export default {
    data(){
        return{
            auth, 
        }
    }, 
    props:['user'], 
   
}
</script>

<style scoped>

</style>