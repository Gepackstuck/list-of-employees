<template>
<div class="users">
    <div v-if="user">
    <p>Имя: {{user.name}}</p>
    <p>Фамилия: {{user.midName}}</p>
    <p>Отчество: {{user.surName}}</p>
    <p>Должность: {{user.position}}</p>
    <p>Оклад: {{user.salary}} р.</p>
    <p>Дата выхода: {{user.date}}</p>
    <p>Ставка: {{user.stake}}</p>

    </div>
    <button @click="prev">Назад</button>
</div>
</template>


<script>
import { router } from "../main";
export default {
    data() {
        return {
            user: null,
        }
    },
mounted() {
        const savedLists = JSON.parse(localStorage.getItem('lists'));
        this.user = savedLists.find((e) => e.id == this.$route.params.id);
},
methods: {
    prev() {
        router.push({path: `/MainTable`})
    }
}
}
</script>


<style>
    .users {
        margin: 40px;
    }
</style>