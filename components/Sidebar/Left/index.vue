<template>
  <div>
    <div class="flex flex-col h-screen">
      <div
        class="w-min my-2 p-2 rounded-full hover:bg-blue-50 dark:hover:bg-white/20 default-transition"
      >
        <nuxt-link to="/">
          <div class="w-8 h-8">
            <UseDark v-slot="{ toggleDark }">
              <LogoTwitter @click="toggleDark()" />
            </UseDark>
          </div>
        </nuxt-link>
      </div>

      <div class="mt-2 space-y-3">
        <SidebarLeftTab
          v-for="tab in tabList"
          :key="tab.name"
          :active="tab.active"
          class="group"
        >
          <template #icon>
            <component :is="tab.component" class="group-hover:text-white/90" />
          </template>
          <template #name>
            {{ tab.name }}
          </template>
        </SidebarLeftTab>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { VNodeTypes } from 'vue'

import { BellIcon, BookmarkIcon, DocumentTextIcon, DotsCircleHorizontalIcon, HashtagIcon, HomeIcon, InboxIcon, UserIcon } from '@heroicons/vue/outline'

import { UseDark } from '@vueuse/components'

interface TabProps {
  name: string
  component: VNodeTypes
  active: boolean
}

const tabList = ref<TabProps[]>([
  {
    name: 'Home',
    component: HomeIcon,
    active: true,
  },
  {
    name: 'Explore',
    component: HashtagIcon,
    active: false,
  },
  {
    name: 'Notifications',
    component: BellIcon,
    active: false,
  },
  {
    name: 'Bookmarks',
    component: BookmarkIcon,
    active: false,
  },
  {
    name: 'Lists',
    component: DocumentTextIcon,
    active: false,
  },
  {
    name: 'Profile',
    component: UserIcon,
    active: false,
  },
  {
    name: 'More',
    component: DotsCircleHorizontalIcon,
    active: false,
  },
])
</script>
