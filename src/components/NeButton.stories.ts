import NeButton from "./NeButton.vue";

export default {
  title: "Components/NeButton",
  component: NeButton,
};

export const Default = () => ({
  components: { NeButton },
  template: "<NeButton>Click Me</NeButton>",
});
