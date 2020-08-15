<template>
    <div class="container">
        <Input placeholder="What ya gotta do!?"
               class="input"
               @submit-task="addTask"/>

        <div class="tasks">
            <div v-if="tasks.length > 0">
                <span>Todo</span>
                <ul>
                    <ListTask v-for="task in tasks"
                              :key="task.id"
                              :task="task"
                              @complete-task="completeTask"
                              @delete-task="deleteTask"/>
                </ul>
            </div>

            <div v-if="completedTasks.length > 0">
                <span>Done</span>
                <ul>
                    <ListTask v-for="task in completedTasks"
                              :task="task"
                              @complete-task="completeTask"
                              @delete-task="deleteTask"/>
                </ul>
            </div>

            <div class="noTasks"
                 v-if="tasks.length === 0 && completedTasks.length === 0">
                You have no tasks, start typing above or press <em>`shift + k`</em> to create a new task.
            </div>
        </div>
    </div>
</template>

<script lang="ts"
        src="./index.ts"/>
<style lang="scss"
       src="./index.scss"/>
