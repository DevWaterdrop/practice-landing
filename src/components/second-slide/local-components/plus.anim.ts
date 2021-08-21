const plusVariants = (manualStagger: number) => ({
  hidden: {
    scale: 0
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.55,
      delay: manualStagger
    }
  }
});

export default plusVariants;
