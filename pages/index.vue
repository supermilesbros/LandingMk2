<template>
  <v-stepper class="stepper-container" :items="['Personal Info', 'Visit Date']" mobile>
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
          v-model="location"
          :items="['Westfield - Grand Park', 'Carmel',]"
        ></v-select>
        <v-btn class="mb-5 dateBtn" @click="toggleDatePicker" size='large' color="#00ccff" prepend-icon="$calendar" tonal block>Select A Date</v-btn>
        <v-select
          label="Time"
          v-model="time"
          :items="['11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm']"
        ></v-select>
        <v-btn @click="submit" size='large' color="#00ccff" block>Submit</v-btn>
      </v-form>
    </v-card>
    <v-dialog
      v-model="dialog"
      fullscreen
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-container >
          <v-row justify="space-around" align="center">
            <v-date-picker v-model="date" no-title
            ></v-date-picker>
          </v-row>
        </v-container>
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Save"
            @click="dialog = false"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </template>

  <!-- <template v-slot:item.3>
    <v-card title="Thank You for Scheduling" flat>
      <p>You will receve a confirmation email with the details of your appointment.</p>
      <h5 class="mt-5 mapTagTitle">Grand Park</h5>
      <a class="mapTag" href="https://maps.app.goo.gl/SYcqJeE3YXHXdDqq8" target="_blank">200 E 186th St A, Westfield, IN 46074</a>
      <h5 class="mt-5 mapTagTitle">Carmel</h5>
      <a class="mapTag" href="https://maps.app.goo.gl/6vGgZuTXhi8pn5XP9" target="_blank">20 Executive Dr suite g, Carmel, IN 46032</a>
      
    </v-card>
  </template> -->
</v-stepper>
</template>

<script setup>
import { collection, setDoc, addDoc, doc, onSnapshot } from "firebase/firestore";
import { auth, db, getCurrentUser } from "~/firebase/firebase";

const router = useRouter();

const dialog = ref(false);

const toggleDatePicker = () => {
  dialog.value = !dialog.value;
};

const email = ref("");
const password = ref("");
const name = ref("");
const phone = ref("");
const time = ref("");
const location = ref("");
const date = ref();

const submit = async () => {
  console.log("submit", date.value);
  await addDoc(collection(db, "mail"), {
    email: email.value,
    name: name.value,
    phone: phone.value,
    location: location.value,
    time: time.value,
    date: date.value,
  });
  
    router.push("/thank-you");
}



const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();
</script>
<style lang="scss">
.stepper-container {
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
}
.mapTagTitle {
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
}
.mapTag {
  color: #00ccff;
  text-decoration: underline;
}
.dateBtn {
  text-align: left;
}
</style>