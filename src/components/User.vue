<template>
    <div>
        <slot name="user" :user="user"></slot>
    </div>
</template>

<script>

import { ref } from '@vue/composition-api'; 
import { auth } from "../firebase/init"; 


export default {
    setup(){
        var user = ref(null);
        var unsubscribe = auth.onAuthStateChanged(firebaseUser=>{
            return user.value = firebaseUser; 
        }); 
        return {
            user, 
            unsubscribe, 
        }  
    },
    destroyed(){
        this.unsubscribe();  
    }

}
</script>

<style scoped>

</style>