<template>
    <Courses
        :title="courseTitle"
        :description="courseDescription"
        :highlights="courseHighlights"
        :videos="courseVideos"
        :videoOnLeft="true"
    />
</template>

<script setup>
import { ref } from 'vue'
import Courses from "@source/components/Courses.vue";

const courseTitle = "d2python | 动手学Python - TODO";
const courseDescription = "Python从入门到实践";
const courseHighlights = [
  { icon: 'fa-book', text: '在线书籍', link: '' },
  { icon: 'fa-code', text: '练习代码', link: '' },
  { icon: 'fa-video', text: '课程视频', link: '' },
  { icon: 'fa-angle-right', text: '课程安排', link: '' },
];

const courseVideos = [

];

</script>