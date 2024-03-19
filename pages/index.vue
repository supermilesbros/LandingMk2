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
        <v-text-field
          v-model="location"
          :rules="[ruleRequired]"
          label="Location"
          required
        ></v-text-field>
        <v-date-picker
          v-model="date"
          :rules="[ruleRequired]"
          label="Date"
          required
        ></v-date-picker>
      </v-form>
    </v-card>
  </template>

  <template v-slot:item.3>
    <v-card title="SomethingS" flat>...</v-card>
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