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
//     created() {
//     axios
//     .get(this.url)
//     .then((response => {
//         this.info = response.name
//         console.log(this.info)
//         console.log("we did it?")
//     }))
//   },
}
</script>