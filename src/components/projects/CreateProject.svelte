<script>
import Input from "@components/general/Input.svelte";
import { modalController } from "@ionic/core";

async function closeModal() {
    await modalController.dismiss();
}
</script>

<article class="flex mx-4 my-3 flex-col h-full">
  <header class="text-2xl  mb-3">
    <h1 class="flex justify-between">
      <span>Create  Project</span> <span on:click="{closeModal}">×</span>
    </h1>
  </header>
  <section class="p-4 flex-grow">
    <Input label="Project Name" value="Blank Project" />
    <div>
      <ion-list class="ion-no-padding" lines="none">
        <ion-radio-group value="biff">
          <ion-list-header class="ion-no-padding">
            <ion-label class="text-sm  ">Project Template</ion-label>
          </ion-list-header>      
          <ion-item>
            <ion-label class="ml-2">Standard Project</ion-label>
            <ion-radio color="blue" slot="start" value="STANDARD PROJECT"></ion-radio>
          </ion-item>      
          <ion-item>
            <ion-label class="ml-2">Blank Project</ion-label>
            <ion-radio color="blue" slot="start" value="BLANK PROJECT"></ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-list>
    </div>
  </section>
  <footer>
    <ion-buttons class="flex justify-end">
      <ion-button on:click="{closeModal}" color="text">Cancel</ion-button>  
      <ion-button   color="blue">Create</ion-button>
    </ion-buttons>
  </footer>
</article>

<style>
    ion-list-header {      
      padding-left: 0px;
    }
</style>