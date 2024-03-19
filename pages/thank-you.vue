<template >
    <div class="TYcard-container">
        <v-card class="TYcard rounded-lg" elevation="16" elevated>
            <v-card-title class="TYcard-title">Thank You for Scheduling</v-card-title>
            <p class="TYcard-subtitle">You will receve a confirmation email with the details of your appointment.</p>
            <v-card-text>
                <h5 class="mt-5 mapTagTitle">Grand Park</h5>
                <a class="mapTag" href="https://maps.app.goo.gl/SYcqJeE3YXHXdDqq8" target="_blank">200 E 186th St A, Westfield, IN 46074</a>
                <h5 class="mt-5 mapTagTitle">Carmel</h5>
                <a class="mapTag" href="https://maps.app.goo.gl/6vGgZuTXhi8pn5XP9" target="_blank">20 Executive Dr suite G, Carmel, IN 46032</a>
            </v-card-text>
        </v-card>
    </div>
    <div class="learnBTN">
        <v-btn href='https://www.recoveryroomusa.com' target="_blank" color="light-blue-lighten-2" block>Learn More</v-btn>
    </div>
</template>
<script setup>




</script>
<style lang="scss">
.brandColor {
    color: #00ccff;
}
.TYcard-container {
    padding: 1rem;
}
.TYcard {
    text-align: center;
    
}
.TYcard-title {
    font-size: 1.5rem;
    font-weight: 500;
}
.TYcard-subtitle {
    font-size: .9rem;
    font-weight: 400;
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
.learnBTN {
    padding: 1rem;
}
</style>