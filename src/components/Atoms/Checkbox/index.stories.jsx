import SampleButton from "./index";

export default { component: SampleButton };

export const Default = {
  args: {
    onClick: () => console.log("clicked"),
  },
};
