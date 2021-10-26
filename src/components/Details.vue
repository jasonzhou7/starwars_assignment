<template>
    {{ info }}
</template>

<script>
// import axios from 'axios'

export default {
    name: 'Details',
    data() {
        return {
            info: ''
        }
    },
    props: {
        url: String
    },
}
</script>