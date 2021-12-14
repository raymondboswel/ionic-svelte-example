<script lang="ts">
import CreateProject from "@components/projects/CreateProject.svelte";
import { actionSheetController } from "@ionic/core";
import type { IonModal } from "@ionic/core/components/ion-modal";
import { IonicShowModal } from "@utils/IonicHelper";
import { onMount } from "svelte";

let showModal = false;
let modal: IonModal;

onMount(() => {
  setDismissHandler()

  // If this is used, the modal only shows twice, whereafter showModal remains true.
  /* modal.onDidDismiss().then(() => {
    showModal = false;}); */
});


function setDismissHandler() {
  modal.onDidDismiss().then(() => {
    showModal = false;
    setDismissHandler();
  });
}

async function showActions() {
  const as = await actionSheetController.create({
    buttons: [
      {
        text: "Create Project",
        icon: "folder-outline",
        handler: () => {
          // IonicShowModal("wc-create-project", CreateProject, {})
          showModal = true;
        },
      },
    ],
  });

  await as.present();
}
</script>

<article>
  <header class="text-center mt-3">
    <span class="border-b-2 border-blue-light ">PROJECTS</span>
  </header>
  <ion-content>
    {showModal}
  </ion-content>
</article>

<ion-fab vertical="bottom" horizontal="end">
  <ion-fab-button on:click={showActions} color="blue">
    <span class="text-3xl ">+</span>
  </ion-fab-button>
</ion-fab>

<ion-modal bind:this={modal} is-open={showModal}>
  <CreateProject />
</ion-modal>

<style>
article {
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
</style>
