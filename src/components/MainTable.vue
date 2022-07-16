<template>
  <div class="wrapper">
    <table class="table">
      <tr>
        <th @click="() => sortedList('name')">Имя</th>
        <th @click="sortedList('midName')">Фамилия</th>
        <th @click="sortedList('surName')">Отчество</th>
        <th @click="sortedList('pos')">Должность</th>
        <th></th>
      </tr>
      <EditEmployee v-model:lists='lists' @remove='remove' v-bind:saveList='saveList'/>
    </table>
    <button
      class="add"
      @click="showModal">Добавить</button>
  </div>
  <ModalAddEmployee @create="addList" v-if="isShowModal" @close="closeModal"/>
  
  
</template>

<script>
import ModalAddEmployee from "./ModalAddEmployee.vue"
import EditEmployee from "./EditEmployee.vue"
export default {
  name: 'MainTable',
  components: {
    ModalAddEmployee,
    EditEmployee,
  },
  props: {
  
  },
  data() {
    return {
      isShowModal: false,
      isEdit: false,
      lists: [
        {
          id: 12342,
          name: "Василий", 
          midName: "Игоревич",
          surName: "К",
          position: "Дизайнер",
          salary: "60 000",
          date: "27.06.2021",
          stake: "Полная",
        },
        {
          id: 23453,
          name: "Иван", 
          midName: "Дмитриевич",
          surName: "Т",
          position: "Менеджер по персоналу",
          salary: "60 000",
          date: "01.12.2020",
          stake: "Полная",
        },
        {
          id: 35675,
          name: "Вадим", 
          midName: "Федорович",
          surName: "В",
          position: "Копирайтер",
          salary: "40 000",
          date: "13.02.2022",
          stake: "Полная",
        }
      ],
      sorted: [],
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
    sortedList(sortParam) {
      switch(sortParam){
        case 'name': this.lists.sort(sortByName); break;
        case 'midName': this.lists.sort(sortByMidName); break;
        case 'surName': this.lists.sort(sortBySurName); break;
        case 'pos': this.lists.sort(sortByPos); break;
        default: this.lists;
      }
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
  margin: 40px;
	width: 800px;
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
.add {
  margin-left: 40px;
    background-color: white;
    color: black;
    border: 2px solid #e7e7e7;
    cursor: pointer;
}
.add:hover {
      background-color: #e7e7e7;
}
.list:hover {
  cursor: pointer;
  color: rgb(129, 129, 129);
}
.table td {
	border: 1px solid #dddddd;
	padding: 5px;
}
.posdel {
  display: flex;
  justify-content: space-between;
}
</style>
