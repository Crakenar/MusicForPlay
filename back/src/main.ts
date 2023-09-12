<<<<<<< HEAD
import { createApp, h } from 'vue'
import './style.css'

import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import './style.css'


const app = createApp({
    setup() {
    },

    render: () => h(App)
});

app.use(createPinia())
app.use(router)

app.mount('#app')
=======
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // possible to use {whitelist: true} for exceeding params on request
  // transform can just be activated on specific routes using @UsePipes(new ValidationPipe({transform: true}))
  app.useGlobalPipes(new ValidationPipe({transform: true}));
  await app.listen(3000);
}
bootstrap();
>>>>>>> cdd3b3cc3611e4028c6750685ff47154e7451cce
