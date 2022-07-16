<template>
    <div>
        <input
            placeholder="Имя"
            v-model="lists.name"
            @input="lists.name = $event.target.value"
        />
        <input
            placeholder="Фамилия"
            v-model="lists.surName"
            @input="lists.surName = $event.target.value"
        />
        <input
            placeholder="Отчество"
            v-bind:value="lists.midName"
            @input="lists.midName = $event.target.value"
        />
        <input
            placeholder="Должность"
            v-bind:value="lists.position"
            @input="lists.position = $event.target.value"
        />
        <!-- <input
        type="checkbox"
            placeholder="Трудовая (галочка)"
            v-model="checked"
            @input="lists.empRec = $event.target.value"
        /> -->
        <input
            placeholder="Оклад"
            v-bind:value="lists.salary"
            @input="lists.salary = $event.target.value"
        />
        <input
            placeholder="Дата выхода"
            v-bind:value="lists.date"
            @input="lists.date = $event.target.value"
        />
        <input
            placeholder="Ставка полная/половина"
            v-bind:value="lists.stake"
            @input="lists.stake = $event.target.value"
        />
        <button @click="addList">Сохранить</button>
        <button @click="$emit('close')">Закрыть</button>
    </div>
</template>

<script>
export default {
  name: 'ModalAddEmployee',
    props: {
    },
    data() {
        return {
      lists: 
        {
          id: null,
          name: "", 
          midName: "",
          surName: "",
          position: "",
        //   empRec: this.checked,
          salary: "",
          date: "",
          stake: "",
        },
    }
  },
  methods: {
    addList() {
        const condition = this.lists.name || this.lists.midName || this.lists.surName || this.lists.position || this.lists.salary || this.lists.date || this.stake;
        if (condition) {
            this.lists.id = Date.now();
            this.$emit("create", this.lists);
            this.lists = {
                id: null,
                name: "", 
                midName: "",
                surName: "",
                position: "",
                salary: "",
                date: "",
                stake: "",
            }
        }
    },
  }
}
</script>

<style>
</style>