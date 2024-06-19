<template>
  <div class="input">
    <input
      type="text"
      placeholder="new task"
      v-model="note"
      @keyup.enter="addNote"
    />
    <button @click="addNote"><Plus /> Add</button>
  </div>
  <div class="button">
    <button class="button-uellow" @click="$emit('clearComplete')">
      <galachka />
      <h2>Clear Completed</h2>
    </button>
    <button class="button-red" @click="$emit('clearAll')">
      <trashkan />
      <h2>Clear All</h2>
    </button>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "../stores/data.js";
import { ref } from "vue";
import galachka from "./icons/galachka.vue";
import trashkan from "./icons/trashkan.vue";
import Plus from "./icons/plus.vue";

const emits = defineEmits("clearAll", "clearComplete");
const data = useDataStore();
const { notes } = storeToRefs(data);
const note = ref("");
const addNote = () => {
  if (note.value) {
    notes.value.push({
      id: Math.random().toString(16).slice(2),
      text: note.value,
      isReady: false,
    });
    note.value = "";
  }
};
</script>

<style scoped>
.button {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 2px;
}

.button-red {
  cursor: pointer;
  max-width: 130px;
  width: 100%;
  background-color: #ec5840;
  color: #fefefe;
  height: 40px;
  display: flex;
  align-items: center;
  border: none;
  gap: 3px;
  padding: 7px 13px;
}

.button-red:hover {
  transition: all 0.4s;
  color: rgb(70, 70, 250);
  background: white;
  box-shadow: 0 0 10px rgb(207 207 250 / 50%);
}

.button-uellow {
  cursor: pointer;
  gap: 3px;
  padding: 7px 13px;
  display: flex;
  align-items: center;
  height: 40px;
  background-color: #ffae00;
  color: #fefefe;
  border: none;
}

.button-uellow:hover {
  transition: all 0.4s;
  color: rgb(250, 70, 214);
  background: white;
  box-shadow: 0 0 10px rgb(207 207 250 / 50%);
}

.input {
  display: flex;
  height: 40px;
}

.input input {
  border: 1px solid #707070;
  padding: 5px 10px;
  width: 100%;
}

.input button {
  background: rgb(70, 70, 250);
  color: white;
  font-weight: 500;
  padding: 5px 10px;
  border: none;
  width: 100px;
  cursor: pointer;
  transition: all 0.3s;
}

.input button:hover {
  color: rgb(70, 70, 250);
  background: white;
  box-shadow: 0 0 10px rgb(207 207 250 / 50%);
}
</style>