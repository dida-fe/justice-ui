<template>
  <div>
    MobileNav
    <!--  <van-collapse-->
    <!--    v-model="active"-->
    <!--    :border="false"-->
    <!--    class="mobile-nav"-->
    <!--  >-->
    <!--    <van-collapse-item-->
    <!--      class="mobile-nav__item"-->
    <!--      :title="group.groupName"-->
    <!--      :name="group.groupName"-->
    <!--    >-->
    <!--      <van-icon-->
    <!--        :name="group.icon"-->
    <!--        slot="right-icon"-->
    <!--        class="mobile-nav__icon"-->
    <!--      />-->
    <!--      <template v-for="(navItem, index) in group.list">-->
    <!--        <van-cell-->
    <!--          v-if="!navItem.disabled"-->
    <!--          :key="index"-->
    <!--          :to="'/' + base + navItem.path"-->
    <!--          :title="navItem.title"-->
    <!--          is-link-->
    <!--        />-->
    <!--      </template>-->
    <!--    </van-collapse-item>-->
    <!--  </van-collapse>-->
  </div>

</template>

<script>
export default {
  props: {
    base: String,
    group: Object
  },

  data() {
    return {
      active: []
    };
  }
};
</script>

<style lang="scss">
.mobile-nav {
  &__item {
    margin-bottom: 16px;
  }

  &__icon {
    font-size: 24px;

    img {
      width: 100%;
    }
  }

  .van-collapse-item__content {
    padding: 0;
  }

  .van-collapse-item__title {
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    border-radius: 2px;
  }
}
</style>
