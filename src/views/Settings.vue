<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">Notifications</h1>
      </v-col>
      <v-col cols="12" lg="10" xl="8" xxl="6" class="mx-auto">
        <v-radio-group inline v-model="notify">
          <v-radio label="On" :value="true"></v-radio>
          <v-radio label="Off" :value="false"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="12">
        <h1 class="text-center">Settings</h1>
      </v-col>
      <v-col cols="12" lg="10" xl="8" xxl="6" class="mx-auto">
        <v-table>
          <thead>
            <tr>
              <th class="w-25">Name</th>
              <th class="w-50">Preview</th>
              <th class="w-25">Select</th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr v-for="alarm in settings.alarms" :key="alarm.id"> -->
            <tr v-for="alarm in alarms" :key="alarm.id">
              <td>{{ alarm.name }}</td>
              <td><audio :src="alarm.file" controls></audio></td>
              <td>
                <!-- <v-radio-group v-model="settings.selectedAlarm">-->

                <v-radio-group v-model="selectedAlarm">
                  <v-radio :value="alarm.id"></v-radio></v-radio-group>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { useSettingsStore } from '@/store/settings'
import { storeToRefs } from 'pinia'
const settings = useSettingsStore()
// 如果直接解構pinia store的state出來，會失去響應性
// 必須要使用storeToRefs的輔助才能解構
const { selectedAlarm, alarms, notify } = storeToRefs(settings)

</script>
