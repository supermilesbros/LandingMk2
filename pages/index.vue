<template>
  <v-stepper class="stepper-container" :items="['Personal Info', 'Visit Date', 'Step 3']">
  <template v-slot:item.1>
    <v-card class="h-100" title="Personal Info" flat>
      <v-form @submit.prevent="submit">
        <v-text-field
          v-model="name"
          :rules="[ruleRequired]"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="[ruleRequired, ruleEmail]"
          label="Email"
          required
        ></v-text-field>
        <v-text-field
          v-model="phone"
          :rules="[ruleRequired]"
          label="Phone Number"
          required
          type="phone"
        ></v-text-field>
      </v-form>
    </v-card>
  </template>

  <template v-slot:item.2>
    <v-card title="Location & Date" flat>
      <v-form @submit.prevent="submit">
        <v-select
          label="Location"
          :items="['Westfield - Grand Park', 'Carmel',]"
        ></v-select>
        <v-select
          label="Day"
          :items="['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']"
        ></v-select>
        <v-select
          label="Time"
          :items="['11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm']"
        ></v-select>
      </v-form>
    </v-card>
  </template>

  <template v-slot:item.3>
    <v-card title="Thank You for Scheduling" flat>
      You will receve a confirmation email with the details of your appointment.
    </v-card>
  </template>
</v-stepper>
</template>

<script setup>
const email = ref("");
const password = ref("");



const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();

const submit = async () => {};
</script>
<style lang="scss">
.stepper-container {
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
}
</style>