<script>
export let label;
export let value;
</script>

<div class="flex flex-col">
  <ion-label class="text-sm " for="">{label}</ion-label>
  <input type="text" {value} on:change />
</div>

<style>
input:focus {
  outline: none;
  border-bottom: 2px solid #217cbb;
}

input {
  border: 1px solid var(--ion-color-gray-0);
  padding-left: 8px;
  padding-top: 2px;
  padding-bottom: 2px;
}
</style>
