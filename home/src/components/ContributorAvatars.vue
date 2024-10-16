<template>
  <div class="contributor-avatars">
    <div v-if="loading && !contributors.length" class="loading-indicator">
      Loading contributors...
    </div>
    <a v-for="contributor in contributors" 
       :key="contributor.id" 
       :href="contributor.html_url" 
       target="_blank" 
       rel="noopener noreferrer">
      <img :src="contributor.avatar_url" 
           :alt="contributor.login" 
           :title="contributor.login" 
           width="40" 
           height="40">
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  repos: {
    type: Array,
    required: true
  }
});

const contributors = ref([]);
const loading = ref(true);

const CACHE_DURATION = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

class ContributorsCache {
  getKey(repo) {
    return `contributors_${repo}`;
  }

  get(repo) {
    const key = this.getKey(repo);
    const cachedData = localStorage.getItem(key);
    if (cachedData) {
      const { timestamp, data } = JSON.parse(cachedData);
      if (Date.now() - timestamp < CACHE_DURATION) {
        return data;
      }
    }
    return null;
  }

  set(repo, data) {
    const key = this.getKey(repo);
    const cacheObject = {
      timestamp: Date.now(),
      data: data
    };
    localStorage.setItem(key, JSON.stringify(cacheObject));
  }
}

const cache = new ContributorsCache();

async function fetchContributors(repo) {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}/contributors`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching contributors for ${repo}:`, error);
    return [];
  }
}

async function loadContributors() {
  const allContributors = new Map();

  for (const repo of props.repos) {
    let repoContributors = cache.get(repo);
    if (!repoContributors) {
      repoContributors = await fetchContributors(repo);
      cache.set(repo, repoContributors);
    }

    repoContributors.forEach(contributor => {
      if (!allContributors.has(contributor.id)) {
        allContributors.set(contributor.id, contributor);
      }
    });
  }

  contributors.value = Array.from(allContributors.values());
  loading.value = false;
}

onMounted(() => {
  // Use setTimeout to defer the loading of contributors
  setTimeout(loadContributors, 0);
});
</script>

<style scoped>
.contributor-avatars {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.contributor-avatars img {
  border-radius: 50%;
  transition: transform 0.2s;
}

.contributor-avatars img:hover {
  transform: scale(1.1);
}

.loading-indicator {
  text-align: center;
  padding: 20px;
}
</style>