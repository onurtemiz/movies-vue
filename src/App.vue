<template>
  <v-app id="inspire">
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col class="col-12">
            <v-sheet min-height="100px" rounded="lg" class="mt-5">
              <v-row justify="center">
                <v-col class="col-3">
                  <v-text-field
                    label="Search"
                    v-model="state.search"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
          <v-col class="col-12">
            <v-sheet rounded="lg">
              <v-container class="d-flex flex-wrap justify-center">
                <movie-item
                  v-for="movie in movies"
                  :key="movie.id"
                  :movie="movie"
                ></movie-item>
              </v-container>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { reactive, toRefs } from '@vue/composition-api';
import MovieItem from './components/MovieItem.vue';
import useSWRV from 'swrv';
import { api } from './utils';

export default {
  components: {
    MovieItem,
  },
  name: 'app',
  setup() {
    const state = reactive({
      search: 'fight',
    });

    const getMovies = async function(url) {
      try {
        const { data } = await api.get(url);
        return Promise.resolve(data.Search);
      } catch (error) {
        return Promise.reject(error);
      }
    };

    const { data: movies, error } = useSWRV(
      () => `/?s=${state.search}&y=2020`,
      getMovies
    );

    return {
      movies: movies,
      error,
      state,
      ...toRefs(state),
    };
  },
};
</script>
