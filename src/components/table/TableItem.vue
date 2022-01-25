<template>
    <tr class="list-user">
        <td>{{people.username}}</td>
        <td>{{people.email}}</td>
        <td>{{dateReg(people)}}</td>
        <td>{{people.rating}}</td>
        <td><button @click="$emit('viewModal', people)"><i class="fas fa-times"></i></button></td>
    </tr>
</template>

<script>
export default {
    name: "TableItem",
    props: ['people'],
    data() { return{} },
    methods: {
        dateReg(people) { // фильтр даты
            return new Date(Date.parse(people.registration_date)).toLocaleDateString()
        }
    }
}
</script>

<style lang="sass" scoped>
.list-user
    position: relative
    > td
        position: relative
        padding: .9375rem 0
        font:
            size: .875rem
            weigth: 200
        &:last-child
            position: absolute
            right: 5rem
    button
        background: none
        border: 0
        outline: none
        font:
            size: 1.125rem
        color: red
        cursor: pointer
        transition: .4s
        &:hover
            transform: scale(1.1)
    &::after
        content: ''
        position: absolute
        width: 100%
        height: 1px
        top: 0
        left: 0
        background: $text-color
        opacity: .15
        display: block
</style>