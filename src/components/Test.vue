<template>
    <div>
        <h1>Hello Test</h1>
        {{ user.uid }}
    </div>
</template>

<script>

export default {
    props:['user']
}
</script>