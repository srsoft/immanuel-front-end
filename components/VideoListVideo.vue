<template>
  <v-card width="340px" hover class="ma-2" :to="`watch/${video.id}`">
    <v-img :src="`http://127.0.0.1:8000/storage/${video.image}`" />
    <v-card-title>{{ video.id }}. {{ video.contents }}</v-card-title>
    <v-card-actions>
      <!-- <span v-for="tag_id in video.user" :key="`${video.id}-${tag_id}`">
        <v-btn color="green lighten-2" class="mr-2" small @mousedown.stop>
          {{ tag_id }}
        </v-btn>
      </span> -->
      <v-btn color="green lighten-2" class="mr-2" small @mousedown.stop>
        {{ video.user.id }}. {{ video.user.name }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['video']
}
</script>

<style>

</style>
