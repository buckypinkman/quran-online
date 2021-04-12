export default {
  data() {
    return {
      isLooping: false,
    }
  },
  methods: {
    toggleLoop() {
      if (this.isLooping === true) {
        this.disableLoop()
      } else {
        this.enableLoop()
      }
    },
    enableLoop() {
      const {
        murottal
      } = this;
      for (let i = 0; i < murottal.length; i++) {
        murottal[i].loop = true;
      }
      this.isLooping = true;
    },
    disableLoop() {
      const {
        murottal
      } = this;
      for (let i = 0; i < murottal.length; i++) {
        murottal[i].loop = false;
      }
      this.isLooping = false;
    },
    preventDoublePlayAndTriggerNextPlay(e, index) {
      const {
        murottal
      } = this;
      for (let i = 0; i < murottal.length; i++) {
        if (murottal[i] != e.target) {
          murottal[i].pause();
        }
      }

      e.target.onended = () => {
        e.target.parentElement.parentElement.nextSibling.children[0].children[1].play()
      }

      this.$router.push({
        path: `#ayah-${index + 1}`
      })
    },
  },
  computed: {
    murottal() {
      return document.getElementsByTagName("audio");
    },
  }
}
