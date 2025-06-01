import SamorphicButton from './components/SamorphicButton.vue';

export { SamorphicButton };

export default {
  install(app: any) {
    app.component('SamorphicButton', SamorphicButton);
  },
};
