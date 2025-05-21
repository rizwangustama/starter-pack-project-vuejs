<script lang="ts" setup>
  import { useAppStore } from '@/app/stores/useAppStore';
  const appStore = useAppStore();

  const isDialog = ref<boolean>(false);
</script>

<template>
  <h1>{{ isDialog }}</h1>
  <VBtn @click="isDialog = true" variant="elevated">Hello World</VBtn>
  <h1 class="text-red-700 font-medium text-2xl">Report {{ appStore.name }}</h1>
  <p>This is the report page.</p>
  <p>Here you can find various reports and analytics.</p>
  <p>Contact us at:</p>
  <p v-if="!appStore.loading">{{ appStore.counter }}</p>
  <p v-if="appStore.loading">Loading</p>
  <button class="p-10 " @click="appStore.addIncrement">++</button>
    <button @click="appStore.addDecrement">--</button>


    <!-- Dialog -->
      <VDialog
        v-model="isDialog"
        transition=""
      >
        <v-card
          prepend-icon="mdi-map-marker"
          text="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
          title="Use Google's location service?"
        >
          <template v-slot:actions>
            <v-spacer></v-spacer>

            <v-btn @click="isDialog = false">
              Disagree
            </v-btn>

            <v-btn @click="isDialog = false">
              Agree
            </v-btn>
          </template>
        </v-card>
      </VDialog>
</template>