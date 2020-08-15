<template>
    <div class="container">
        <input v-model="input"
               :placeholder="error ? 'You have to enter something!!' : placeholder"
               @focus="focusInput"
               @blur="blurInput"
               @keypress.enter.prevent="validateTask"
               @keydown.esc.prevent="clearInput"
               ref="inputRef"
               :class="{'focus': focus, 'error' : error}"/>

        <input style="visibility: hidden"
               v-if="focus">

        <transition name="fade">
            <div class="overlay"
                 v-if="focus"></div>
        </transition>

        <span class="charsleft" v-if="focus">{{ charsLeft }}</span>
    </div>
</template>

<script lang="ts"
        src="./input.ts"></script>
<style lang="scss"
       src="./input.scss"
       scoped/>
