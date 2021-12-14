import type { SvelteComponent } from "svelte/internal";
import { modalController, toastController } from "@ionic/core";

export const getIonicNav = () => {
  return document.querySelector("ion-nav");
};

/* export const getIonicMenu = (menuId: string): MenuI => {
  return document.querySelector(
    `ion-menu[menu-id='${menuId}']`
  ) as unknown as MenuI;
}; */

//Unused component variable to force component import at function call
export const IonicShowModal = async (
  selector: string,
  component: new (...args: any) => SvelteComponent,
  componentProps: any
) => {
  
  const modal = await modalController.create({
    component: selector,
    componentProps,
  });
  await modal.present();

  //TODO: Consider what should happen if more than 1 tag found...
  let elem = document.getElementsByTagName(selector)[0];  
  
  let svelteComponent = new component({ target: elem, props: componentProps, });

  let res = await modal.onWillDismiss();

  svelteComponent.$destroy();
  elem.remove();

  return res;
  
};

/* //Unused component variable to force component import at function call
export const IonicShowPopover = async (
  selector: string,
  component: new (...args: any) => SvelteComponent,
  componentProps: ComponentProps
) => {
  const popover = await popoverController.create({
    component: selector,
    event,
    componentProps,
  });
  popover.present();
  return await popover.onWillDismiss();
}; */

/* export const IonicShowLoading = async (options: LoadingOptions) => {
  const ionicitem = await loadingController.create(options);
  ionicitem.present();
  return ionicitem;
};
 */
export const IonicShowToast = async (options: any) => {
  const toast = await toastController.create(options);
  toast.present();
  return toast;
};

/* export const IonicShowPicker = async (options: PickerOptions) => {
  const picker = await pickerController.create(options);
  picker.present();
  return picker;
};
 */
