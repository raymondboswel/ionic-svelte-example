<script lang="ts">
import { Router } from "@roxi/routify";
import { routes } from "../.routify/routes";
import { initialize } from "@ionic/core/components";
import { IonApp } from "@ionic/core/components/ion-app";
import { IonButton } from "@ionic/core/components/ion-button";
import { IonButtons } from "@ionic/core/components/ion-buttons";
import { IonIcon } from "ionicons/components/ion-icon";
import { IonCard } from "@ionic/core/components/ion-card";
import { IonToolbar } from "@ionic/core/components/ion-toolbar";
import { IonHeader } from "@ionic/core/components/ion-header";
import { IonContent } from "@ionic/core/components/ion-content";
import { IonCardHeader } from "@ionic/core/components/ion-card-header";
import { IonCardTitle } from "@ionic/core/components/ion-card-title";
import { IonCardSubtitle } from "@ionic/core/components/ion-card-subtitle";
import { IonCardContent } from "@ionic/core/components/ion-card-content";
import { IonRippleEffect } from "@ionic/core/components/ion-ripple-effect";
import { IonMenu } from "@ionic/core/components/ion-menu";
import { IonList } from "@ionic/core/components/ion-list";
import { IonItem } from "@ionic/core/components/ion-item";
import { IonMenuButton } from "@ionic/core/components/ion-menu-button";
import { IonFab } from "@ionic/core/components/ion-fab";
import { IonFabButton } from "@ionic/core/components/ion-fab-button";
import { onMount } from "svelte";
import { menuController } from "@ionic/core";
import { IonPopover } from "@ionic/core/components/ion-popover";
import { IonChip } from "@ionic/core/components/ion-chip";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { IonRadio} from "@ionic/core/components/ion-radio";
import { IonRadioGroup} from "@ionic/core/components/ion-radio-group";
import { IonLabel } from "@ionic/core/components/ion-label";
import { IonListHeader} from "@ionic/core/components/ion-list-header";
import { IonInput } from "@ionic/core/components/ion-input";
import { IonModal } from "@ionic/core/components/ion-modal";

onMount(() => {
  initialize();

  tryDefine("ion-app", IonApp);
  tryDefine("ion-input", IonInput);
  tryDefine("ion-button", IonButton);
  tryDefine("ion-buttons", IonButtons);
  tryDefine("ion-card", IonCard);
  tryDefine("ion-icon", IonIcon);
  tryDefine("ion-toolbar", IonToolbar);
  tryDefine("ion-header", IonHeader);
  tryDefine("ion-content", IonContent);
  tryDefine("ion-card-header", IonCardHeader);
  tryDefine("ion-cart-title", IonCardTitle);
  tryDefine("ion-card-subtitle", IonCardSubtitle);
  tryDefine("ion-card-content", IonCardContent);
  tryDefine("ion-ripple-effect", IonRippleEffect);
  tryDefine("ion-list", IonList);
  tryDefine("ion-menu", IonMenu);
  tryDefine("ion-item", IonItem);
  tryDefine("ion-icon", IonIcon);
  tryDefine("ion-menu-button", IonMenuButton);
  tryDefine("ion-fab", IonFab);
  tryDefine("ion-fab-button", IonFabButton);
  tryDefine("ion-popover", IonPopover);
  tryDefine("ion-chip", IonChip);
  tryDefine("ion-radio", IonRadio);
  tryDefine("ion-list-header", IonListHeader);
  tryDefine("ion-label", IonLabel);
  tryDefine("ion-radio-group", IonRadioGroup);
  tryDefine("ion-modal", IonModal);

  (window as any).menuController = menuController;

  // Ensures that hot reloading doesn't throw an exception when trying to reregister a component
  function tryDefine(tag, impl) {
    try {
      customElements.define(tag, impl);
    } catch (error) {}
  }

  document.documentElement.classList.add("ion-ce");

  defineCustomElements(window);
});
</script>

<ion-app>
  <Router {routes} />
</ion-app>

<style @global>
</style>
