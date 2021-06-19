<template>
  <v-card max-width="300" class="ma-4">
    <v-img
      height="450"
      :src="movie.Poster"
      gradient="to bottom, rgba(21, 21, 21, 0) -66%, #090909"
      class="d-flex align-end"
    >
      <v-container class="d-flex flex-column align-start">
        <v-card-title class="white--text font-weight-black">
          {{ movie.Title }}
        </v-card-title>
        <v-container>
          <v-chip class="mr-2" color="#DC2626" text-color="white" label>
            {{ movie.Type.toUpperCase() }}
          </v-chip>
          <v-chip color="#0284C7" text-color="white" label>
            {{ movie.Year }}
          </v-chip>
        </v-container>
      </v-container>
    </v-img>
  </v-card>
</template>

<script>
export default {
  props: ['movie'],
  data() {
    return { queries: 'fight' };
  },
};
</script>

<style></style>
