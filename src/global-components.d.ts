import TextTitleCard from './components/Ui/Texts/TextTitleCard.vue'
import TextTitleView from "./components/Ui/Texts/TextTitleView.vue";
import TextBase from "./components/Ui/Texts/TextBase.vue";
import Box from './components/Ui/Box.vue';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    TextTitleView: typeof TextTitleView,
    TextTitleCard: typeof TextTitleCard,
    TextBase: typeof TextBase,
    Box: typeof Box,
  }
}