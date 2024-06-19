<template>
  <div class="main">
    <div class="wrapper">
      <div class="main__body">
        <h1>Tasks</h1>
        <Input @clear-all="notes = []" @clear-complete="clearComplete(notes)" />
        <TransitionGroup name="slide-fade" tag="div">
          <Notes
            v-for="note in notes"
            :is-ready="note.isReady"
            :note="note.text"
            :key="note.id"
            @one-clear="deleteNote(note.id)"
            @change-ready="note.isReady = !note.isReady"
          />
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "../stores/data";
import Input from "../components/Input.vue";
import Notes from "../components/Notes.vue";

const data = useDataStore();
const { notes } = storeToRefs(data);

const deleteNote = (id) => {
  const delIndx = notes.value.findIndex((el) => el.id === id);

  if (delIndx < 0) return;
  notes.value.splice(delIndx, 1);
};

const clearComplete = () =>
  (notes.value = notes.value.filter((notes) => notes.isReady === false));
</script>

<style scoped>
.main {
  background: aquamarine;
}

.wrapper {
  min-width: 100vw;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main__body {
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px #00000021;
}

.main h1 {
  font-weight: 600;
  margin-bottom: 20px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>