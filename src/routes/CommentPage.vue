<template>
  <form @submit.prevent="sendComment" action="#">
    <div class="field">
      <label class="label">Type de note</label>
      <div class="control">
        <div class="select">
          <select v-model="selectedType" value="Note à moi même">
            <option>Note à moi même</option>
            <option>Commentaire pour mon coach</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Commentaire</label>
      <div class="control">
        <textarea
          v-model="comment"
          class="textarea"
          placeholder="Commentaire"
        ></textarea>
      </div>
    </div>

    <div class="field is-centered">
      <div class="control">
        <button class="button envoyer" type="submit" value="Submit">
          Envoyer
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      detailsExercice: null,
      selectedType: "",
      comment: "",
    };
  },
  props: {
    exercice: String,
  },
  methods: {
    async sendComment(e) {
      this.detailsExercice = JSON.parse(this.exercice);

      await this.$exerciceRepository.addCommentaire(
        this.comment,
        this.detailsExercice.Id
      );

      await this.$exerciceRepository.addTypeCommentaire(
        this.selectedType,
        this.detailsExercice.Id
      );

      e.preventDefault();
    },
  },
};
</script>

<style>
.label {
  color: white;
}

.envoyer {
  background-color: #63d052;
  border: none;
}
</style>
