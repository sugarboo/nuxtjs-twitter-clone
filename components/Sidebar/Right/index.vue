<template>
  <div>
    <SidebarRightPreviewCard title="What's happening">
      <SidebarRightPreviewCardItem
        v-for="(item, index) in whatsHappeningList"
        :key="`${item.title} - ${index}`"
      >
        <div>
          <h2 class="font-bold text-gray-800 dark:text-white">
            {{ item.title }}
          </h2>
          <p class="text-xs text-gray-400">
            {{ item.count }}
          </p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <SidebarRightPreviewCard title="Who to follow">
      <SidebarRightPreviewCardItem
        v-for="(item, index) in whoToFollowList"
        :key="`${item.name} - ${index}`"
      >
        <div class="flex justify-between items-center p-2">
          <div class="flex">
            <img :src="item.image" :alt="item.name" class="w-10 h-10 rounded-full">
            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">
                {{ item.name }}
              </h1>
              <p class="text-xs text-gray-400">
                {{ item.handle }}
              </p>
            </div>
          </div>
          <div class="flex h-full">
            <button class="px-4 py-2 text-xs font-bold text-white bg-black rounded-full dark:text-black dark:bg-white">
              Follow
            </button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>

<script setup lang="ts">
const whatsHappeningList = ref([
  {
    title: 'SpaceX',
    count: '18.8k Tweets',
  },
  {
    title: '#CodingIsFun',
    count: '8.8k Tweets',
  },
  {
    title: '#artforall',
    count: '1.8k Tweets',
  },
])
const whoToFollowList = ref([
  {
    name: 'Joe Biden',
    handle: '@JoeBiden',
    image: 'https://picsum.photos/200/200',
  },
  {
    name: 'Joe Biden',
    handle: '@JoeBiden',
    image: 'https://picsum.photos/200/200',
  },
  {
    name: 'Joe Biden',
    handle: '@JoeBiden',
    image: 'https://picsum.photos/200/200',
  },
])
</script>
