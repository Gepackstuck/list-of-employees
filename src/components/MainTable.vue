<template>
  <div class="wrapper">
    <table class="table">
      <tr>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Отчество</th>
        <th>Должность</th>
      </tr>
      <tr v-for="list in lists" :key="list.id" class="list">
        <td>{{list.name}}</td>
        <td>{{list.midName}}</td>
        <td>{{list.surName}}</td>
        <td class="posdel">
            {{list.position}} 
            <button @click="() => remove(list)">Удалить</button>
        </td>
      </tr>
    </table>
    <button @click="showModal">Добавить</button>
  </div>
  <ModalAddEmployee @create="addList" v-if="isShowModal" @close="closeModal"/>
</template>

<script>
import ModalAddEmployee from "./ModalAddEmployee.vue"
export default {
  name: 'MainTable',
  components: {
    ModalAddEmployee,
  },
  props: {
  
  },
  data() {
    return {
      isShowModal: false,
      lists: [
        {
          id: 1,
          name: "Василий", 
          midName: "Игоревич",
          surName: "К",
          position: "Дизайнер"
        },
        {
          id: 2,
          name: "Иван", 
          midName: "Дмитриевич",
          surName: "Т",
          position: "Менеджер по персоналу"
        },
        {
          id: 3,
          name: "Вадим", 
          midName: "Федорович",
          surName: "В",
          position: "Копирайтер"
        }
      ]
    }
  },
  methods: {
    addList(lists) {
      this.lists.push(lists);
      this.isShowModal = false;
      this.saveList();
    },
    remove(list) {
      if (confirm("Точно удалить элемент?"))
      this.lists = this.lists.filter((p) => p.id !== list.id);
      this.saveList();
    },
    showModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
  },
}
</script>

<style scoped>
.table {
	width: 50%;
	margin-bottom: 20px;
	border: 1px solid #dddddd;
	border-collapse: collapse;
}
.table th {
	font-weight: bold;
	padding: 5px;
	background: #efefef;
	border: 1px solid #dddddd;
  cursor: pointer;
}
.table td {
	border: 1px solid #dddddd;
	padding: 5px;
}
.list:hover {
  cursor: pointer;
  color: aqua;
}
.posdel {
  display: flex;
  justify-content: space-between;
}
</style>