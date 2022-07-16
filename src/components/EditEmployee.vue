<template>
    <tr v-for="(list, index) in lists" :key="list.id" class="list">
    <template v-if="!isEdit">
        <td  @click="openInfo(list.id)">{{list.name}}</td>
        <td  @click="openInfo(list.id)">{{list.midName}}</td>
        <td  @click="openInfo(list.id)">{{list.surName}}</td>
        <td  @click="openInfo(list.id)">
            {{list.position}}
        </td>            
      </template>
      <template v-if="isEdit">
        <td><input v-model='list.name'/></td>
        <td><input v-model='list.midName'/></td>
        <td><input v-model='list.surName'/></td>
        <td><input v-model='list.position'/></td>
        </template>
        
            <button class="edit" @click="editItem(index)" v-if="!isEdit">Изменить</button>   
            <button class="del" @click="$emit('remove', list)">Х</button>
                                                      
    </tr>
      <EditComp v-bind:item="lists[editList]" @on-close="handleEdit" v-if='editList'/>
</template>

<script>
import { router } from "../main";
import EditComp from "./EditComp.vue"
export default {
     components: {
    EditComp,
  },
  name: 'EditEmployee',
    props: ['lists', 'saveList'],
    emits: ['remove', 'update:lists',],
    data() {
        return {
            isEdit: false,
            editList: null,
    }
  },
    methods: {
        editItem(editList) {
            this.editList = editList;

        },
        handleSave() {
            this.editItem();
            this.saveList();
        },
        handleEdit(newItem) {
            const updatedLists = [...this.lists];
            updatedLists[this.editList] = newItem;
            this.$emit('update:lists', updatedLists);
            console.log(updatedLists[this.editList]);
            this.saveList();
            this.editList = null;
        },
        openInfo(id) {
            router.push({path: `/PersonalInfoPage/${id}`})
        },
    }
}
</script>
<style>
td {
    height: 30px;
    max-height: 30px;
    width: 220px;
    max-width: 220px;
	border: 1px solid #dddddd;
	padding: 5px;
    cursor: pointer;
}

td input {
    width: 100%;
}
button {
    font-family: monospace;
}
.edit {
    background-color: white;
    color: black;
    border: 2px solid #e7e7e7;
    cursor: pointer;
}
.edit:hover {
    background-color: #e7e7e7;
    
}
.del {
    margin-left: 25px;
    background-color: white;
    color: black;
    border: 2px solid #e7e7e7;
    cursor: pointer;
}
.del:hover {
    background-color: #e7e7e7;
}
</style>