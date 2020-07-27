<template>
<button>{{title}}<round-arrow direction='right'/></button>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import RoundArrow from './RoundArrow.vue'

@Component({
     name: 'Button',
     components: {
         Button,
         RoundArrow
     }
})
export default class Button extends Vue{
    @Prop() title!: string;
}
</script>

<style lang='scss' scoped>
</style>