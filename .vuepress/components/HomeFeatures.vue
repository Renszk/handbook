<template>
  <div>
    <div class="features">
      <div v-for="feature in $page.frontmatter.homeFeatures" :key="feature" class="feature">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
        <button>More Details</button>
      </div>
    </div>
  </div>
</template>