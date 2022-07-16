<template>
  <div class="wrapper">
    <table class="table">
      <tr>
        <th @click="sortParam='name'">Имя</th>
        <th @click="sortParam='midName'">Фамилия</th>
        <th @click="sortParam='surName'">Отчество</th>
        <th @click="sortParam='Pos'">Должность</th>
      </tr>
      <tr v-for="list in sortedList" :key="list.id" class="list">
        <td>{{list.name}}</td>
        <td>{{list.midName}}</td>
        <td>{{list.surName}}</td>
        <td class="posdel">
            {{list.position}} 
            <button @click="$emit('edit', list)">Изменить</button>
            <button @click="() => remove(list)">Удалить</button>
        </td>
      </tr>
    </table>
    <button @click="showModal">Добавить</button>
  </div>
  <ModalAddEmployee 
      @create="addList" 
      v-if="isShowModal" 
      @close="closeModal"
  />
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
      sortParam: "",
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
  computed:{
    sortedList () {
      switch(this.sortParam){
        case 'name': return this.lists.slice().sort(sortByName);
        case 'midName': return this.lists.slice().sort(sortByMidName);
        case 'surName': return this.lists.slice().sort(sortBySurName);
        case 'pos': return this.lists.slice().sort(sortByPos);
        default: return this.lists;
      }
    }
  },
  mounted() {
    if(localStorage.getItem('lists')) {
      try {
        this.lists = JSON.parse(localStorage.getItem('lists'));
      } catch(e) {
        localStorage.removeItem('lists');
      }
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
    saveList() {
      let parsed = JSON.stringify(this.lists);
      localStorage.setItem('lists', parsed);
    },
    editList() {

    },

  },
}
const sortByName = function (p1, p2) {return (p1.name.toLowerCase() > p2.name.toLowerCase()) ? 1 : -1;};
const sortByMidName = function (p1, p2) { return (p1.midName.toLowerCase() > p2.midName.toLowerCase()) ? 1 : -1; };
const sortBySurName = function (p1, p2) { return (p1.surName.toLowerCase() > p2.surName.toLowerCase()) ? 1 : -1; };
const sortByPos = function (p1, p2) { return (p1.position.toLowerCase() > p2.position.toLowerCase()) ? 1 : -1; };
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
