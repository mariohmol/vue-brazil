 <template>
  <div class="vue-brazil-mask">{{ maskedValue }}</div>
</template>

<script>
import { maskBr } from "js-brasil";

export default {
  props: ["type", "value"],
  data() {
    let { type, value} = this;
    if(!value){
      value = this.innerHTML
    }
    let maskedValue;
    if (type && maskBr[type]) {
      maskedValue = maskBr[type](value ? value.toString() : value);
    }
   
    return {
      timer: type,
      maskedValue,
    };
  },
  methods: {
    // hover: () => {
    //   this.timer = setTimeout(() => this.showPopover(), 600);
    // },
    // hoverOut: () => {
    //   clearTimeout(this.timer);
    //   this.timer = setTimeout(() => {
    //     if (!this.isInInfo) {
    //       this.closePopover();
    //     }
    //   }, 200);
    // },
    // hoverInfo: () => (this.isInInfo = true),
    // hoverOutInfo: () => {
    //   this.isInInfo = false;
    //   this.hoverOut();
    // },
    // showPopover: () => (this.showPopup = true),
    // closePopover: () => (this.showPopup = false),
  },
};
</script>

<style>
.user-pop {
  color: inherit;
  text-decoration: none;
}
</style>