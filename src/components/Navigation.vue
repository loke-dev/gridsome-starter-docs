<template>
  <aside :class="{'hidden': !showOnMobile}" class="navigation lg:block fixed bottom-0 z-20 w-full lg:w-80 px-6 top-16 lg:top-24 -mt-px overflow-y-auto bg-gradient-l-ocean-light scrolling-touch">
    <nav class="py-4 text-white">
      <ul class="md:py-8 lg:py-6">
        <li v-for="(group, i1) in links" :key="`title-${i1}`" class="py-2">
          <h5 class="text-blue-100 uppercase font-semibold text-sm mb-3 -mt-2">{{ group.name }}</h5>
          <ul class="px-4 leading-loose text-blue-200">
            <li v-for="(item, i2) in group.items" :key="`link-${i1}-${i2}`" class="pb-1" @click="$emit('update:showOnMobile', false)">
              <g-link :to="item.path" class="block hover:text-blue-100">
                {{ item.title }}
              </g-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>

export default {
  props: ['showOnMobile', 'links'],
  name: 'Navigation',
}
</script>
