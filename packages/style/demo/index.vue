<template>
  <demo-section>
  </demo-section>
</template>

<script>
  export default {
    i18n: {
      'zh-CN': {
        hairline: '1px 边框',
        ellipsis: '文字省略',
        animation: '动画',
        toggle: '切换动画',
        text: '这是一段宽度限制 250px 的文字，后面的内容会省略'
      },
      'en-US': {
        hairline: 'Hairline',
        ellipsis: 'Text Ellipsis',
        animation: 'Animation',
        toggle: 'Switch animation',
        text: 'This is a paragraph of 250px width limit, the back will be omitted.'
      }
    },

    data() {
      return {
        show: false,
        transitionName: ''
      };
    },

    methods: {
      animate(transitionName) {
        this.show = true;
        this.transitionName = transitionName;

        setTimeout(() => {
          this.show = false;
        }, 500);
      }
    }
  };
</script>

<style lang="scss">
  @import '../../style/var.scss';

  .demo-style {
    .van-ellipsis {
      max-width: 250px;
      margin-left: 15px;
      font-size: 13px;
    }

    .van-hairline--top {
      height: 30px;
      background-color: $white;

      &::after {
        top: 5px;
      }
    }

    .demo-animate-block {
      position: fixed;
      top: 50%;
      left: 50%;
      width: 100px;
      height: 100px;
      margin: -50px 0 0 -50px;
      background-color: $blue;
      border-radius: 3px;
    }
  }
</style>
