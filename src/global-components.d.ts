import TextVue from "./components/Ui/Texts/TextVue.vue";
import TextTitleCard from './components/Ui/Texts/TextTitleCard.vue'
import TextTitleView from "./components/Ui/Texts/TextTitleView.vue";

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    TextTitleView: typeof TextTitleView,
    TextTitleCard: typeof TextTitleCard,
    TextVue: typeof TextVue,
  }
}