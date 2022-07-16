<template> 
<div class="modalDialog">
  <div>
    <h2>Редактировать поле</h2>
    <p>Имя 
    <input v-model='newList.name'/></p>
    <p>Фамилия <input v-model='newList.midName'/></p>
    <p>Отчество <input v-model='newList.surName'/></p>
    <p>Должность <input v-model='newList.position'/></p>
    <p>Оклад <input v-model='newList.salary'/></p>
    <p>Дата выхода <input v-model='newList.date'/></p>
    <p>Ставка <input v-model='newList.stake'/></p>
    <button class="save" @click="$emit('onClose', this.newList)">Сохранить</button>
    <button class="close" @click="$emit('onClose', this.newList)">X</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'EditComp',
    props: ['item'],
    emits: ['onClose'],
    data() {
        return {
            isEdit: false,
            newList: {...this.item}
    }
  },
}
</script>

<style>
label {
  cursor: pointer;
}
.modalDialog {
	position: fixed;
	font-family: 'Courier New', Courier, monospace;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(0,0,0,0.8);
	z-index: 99999;
	transition: opacity 400ms ease-in;
    display: flex;
}

.modalDialog > div {
    height: 350px;
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