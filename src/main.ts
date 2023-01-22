import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

import TextTitleView from './components/Ui/Texts/TextTitleView.vue';
import TextTitleCard from './components/Ui/Texts/TextTitleCard.vue';
import TextBase from './components/Ui/Texts/TextBase.vue';
import Box from './components/Ui/Box.vue';

const app = createApp(App);

app.component('text-title-view', TextTitleView);
app.component('text-title-card', TextTitleCard);
app.component('text-base', TextBase);
app.component('Box', Box);

app.use(mdiVue, { icons: mdijs });
app.mount('#app');
