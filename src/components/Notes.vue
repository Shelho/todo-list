<template>
    <div class="notes">
        <div :class="{ 'is-ready': isReady }" @click="$emit('changeReady')" class="text-note">{{ note }}
        </div>
        <button class="note" @click="$emit('oneClear')">
            <deleter />
        </button>
    </div>
</template>

<script setup>
import deleter from './icons/deleter.vue';

const props = defineProps({
    note: String,
    isReady: Boolean
})

const emits = defineEmits(['oneClear'])
</script>

<style scoped>
.notes {
    margin-top: 15px;
    display: flex;
}

.text-note {
    padding: 9px 10px;
    cursor: pointer;
    width: 100%;
    transition: all .5s;

    background-color: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
}

.note {
    cursor: pointer;
    color: #fff;
    border: none;
    background-color: #ec5840;
    width: 40px;
}

.text-note.is-ready {
    text-decoration: line-through;
    background: rgb(139, 255, 139);
}
</style>