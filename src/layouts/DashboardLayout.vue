<script lang="ts" setup>
import { VDivider } from 'vuetify/components';

import { ref } from 'vue'
const open = ref(['Users'])
</script>
<template>
  <VLayout class="rounded rounded-md border">
    <VNavigationDrawer>
      <VList>
        <VListItem prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" subtitle="sandra_a88@gmailcom"
          title="Sandra Adams"></VListItem>
      </VList>

      <VDivider />

      <VList density="compact" nav v-model:opened="open">
        <VListGroup value="Users">
          <template v-slot:activator="{ props }">
            <VListItem v-bind="props" prepend-icon="mdi-account-circle" title="Users" />
          </template>

          <!-- Child list items -->
          <VListItem title="All Users" to="/users/all" />
          <VListItem title="Create User" to="/users/create" />
          <VListItem title="User Roles" to="/users/roles" />
        </VListGroup>

      </VList>

    </VNavigationDrawer>

    <VAppBar title="Application bar"></VAppBar>

    <VMain class="d-flex align-center justify-center" height="300">
      <VContainer>
        <RouterView />
      </VContainer>
    </VMain>
  </VLayout>
</template>
