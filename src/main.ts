import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'

import TextTitleView from './components/Ui/Texts/TextTitleView.vue';
import TextTitleCard from './components/Ui/Texts/TextTitleCard.vue';
import TextVue from './components/Ui/Texts/TextVue.vue';

const app = createApp(App);

app.component('text-title-view', TextTitleView);
app.component('text-title-card', TextTitleCard);
app.component('text-view', TextVue);

app.mount('#app')

