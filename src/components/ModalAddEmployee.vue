<template>
    <div class="modalDialog">
        <div>
            <h2>Добавить поле</h2>
        <p> Введите имя
        <input
            placeholder="Имя"
            v-model="lists.name"
            @input="lists.name = $event.target.value"
        />
        </p>
        <p> Введите Фамилию
        <input
            placeholder="Фамилия"
            v-model="lists.surName"
            @input="lists.surName = $event.target.value"
        />
        </p>
        <p> Введите Отчетсво
        <input
            placeholder="Отчество"
            v-model="lists.midName"
            @input="lists.midName = $event.target.value"
        />
        </p>
        <p> Введите Должность
        <input
            placeholder="Должность"
            v-model="lists.position"
            @input="lists.position = $event.target.value"
        />
        </p>
        <p> Введите Оклад
        <input
            type="number"
            placeholder="Оклад"
            v-model="lists.salary"
            @input="lists.salary = $event.target.value"
        />
        </p>
        <p> Введите Дату выхода
        <input
            type="date"
            placeholder="Дата выхода"
            v-model="lists.date"
            @input="lists.date = $event.target.value"
        />
        </p>
        <p> Введите Ставку
        <input
            placeholder="Полная/половина"
            v-model="lists.stake"
            @input="lists.stake = $event.target.value"
        />
        </p>
        <button class="save" @click="addList">Сохранить</button>
        <button @click="$emit('close')" class="close">Х</button>
        </div>
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
.modalDialog {
	position: fixed;
	font-family: 'Courier New', Courier, monospace;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(0,0,0,0.8);
	z-index: 99999;
	/* transition: opacity 1000ms ease-in; */
    display: flex;
}

.modalDialog > div {
    height: 400px;
	width: 400px;
	position: relative;
	margin: 10% auto;
	padding: 5px 20px 13px 20px;
	border-radius: 10px;
	background: #fff;
}
.close {
	background: #606061;
	color: #FFFFFF;
	line-height: 20px;
	position: absolute;
	right: -12px;
	text-align: center;
	top: -10px;
	width: 24px;
	text-decoration: none;
	font-weight: bold;
	border-radius: 12px;
	box-shadow: 1px 1px 3px #000;
    cursor: pointer;
}
input {
    font-family: monospace;
}
.save {
    margin-left: 25px;
    background-color: white;
    color: black;
    border: 2px solid #e7e7e7;
    cursor: pointer;
}
.save:hover {
    background-color: #e7e7e7;
}
</style>