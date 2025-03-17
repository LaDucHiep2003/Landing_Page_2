import { defineAsyncComponent } from "vue";

export function registerGlobalComponents(app) {
    app.component('default', defineAsyncComponent(() => import("@/components/layouts/LayoutDefault.vue")))
}