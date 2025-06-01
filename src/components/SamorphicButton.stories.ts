import SamorphicButton from './SamorphicButton.vue';

export default {
  title: 'Samorphic/SamorphicButton',
  component: SamorphicButton,
};

export const Default = () => ({
  components: { SamorphicButton },
  template: '<SamorphicButton>Click me</SamorphicButton>',
});
