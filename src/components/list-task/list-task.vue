<template>
    <li @mouseenter="setHover(true)"
        @mouseleave="setHover(false)"
        :class="{'completed' : task.completed}">
        <transition name="slide">
            <div class="complete"
                 v-if="hover"
                 @click="completeTask">
                <span v-if="!task.completed">&#x2714;</span>
                <span v-if="task.completed">&#10005;</span>
            </div>
        </transition>

        <div class="context">
            <span :class="{'completed' : task.completed}">{{ task.name }}</span>
            <div class="delete"
                 @click="deleteTask"
                 @mouseenter="setHover(false)"
                 @mouseleave="setHover(true)">&times;
            </div>
        </div>
    </li>
</template>

<script lang="ts"
        src="./list-task.ts"></script>
<style lang="scss"
       src="./list-task.scss"
       scoped/>
