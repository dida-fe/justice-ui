<template>
  <demo-section>
    <demo-block :title="$t('type')">
      <div class="demo-button-row">
        <justice-button type="default">{{ $t('default') }}</justice-button>
        <justice-button type="primary">{{ $t('primary') }}</justice-button>
        <justice-button type="info">{{ $t('info') }}</justice-button>
      </div>
      <justice-button type="danger">{{ $t('danger') }}</justice-button>
      <justice-button type="warning">{{ $t('warning') }}</justice-button>
    </demo-block>

    <demo-block :title="$t('plain')">
      <justice-button
        plain
        type="primary"
        :text="$t('plain')"
      />
      <justice-button
        plain
        type="danger"
        :text="$t('plain')"
      />
    </demo-block>

    <demo-block :title="$t('hairline')">
      <justice-button
        plain
        hairline
        type="primary"
        :text="$t('hairlineButton')"
      />
      <justice-button
        plain
        hairline
        type="danger"
        :text="$t('hairlineButton')"
      />
    </demo-block>

    <demo-block :title="$t('disabled')">
      <justice-button
        disabled
        type="primary"
        :text="$t('disabled')"
      />
      <justice-button
        disabled
        type="danger"
        :text="$t('disabled')"
      />
    </demo-block>

    <demo-block :title="$t('loadingStatus')">
      <justice-button
        loading
        type="primary"
      />
      <justice-button
        loading
        type="primary"
        loading-type="spinner"
      />
      <justice-button
        loading
        :loading-text="$t('loadingText')"
        type="danger"
      />
    </demo-block>

    <demo-block :title="$t('shape')">
      <justice-button
        type="primary"
        square
        :text="$t('square')"
      />
      <justice-button
        type="danger"
        round
        :text="$t('round')"
      />
    </demo-block>

    <demo-block :title="$t('icon')">
      <justice-button
        type="primary"
        icon="star-o"
      />
      <justice-button
        type="primary"
        icon="star-o"
        :text="$t('button')"
      />
      <justice-button
        plain
        type="primary"
        icon="https://img.yzcdn.cn/vant/logo.png"
        :text="$t('button')"
      />
    </demo-block>

    <demo-block :title="$t('size')">
      <justice-button
        type="primary"
        size="large"
      >
        {{ $t('large') }}
      </justice-button>
      <justice-button
        type="primary"
        size="normal"
      >
        {{ $t('normal') }}
      </justice-button>
      <justice-button
        type="primary"
        size="small"
      >
        {{ $t('small') }}
      </justice-button>
      <justice-button
        type="primary"
        size="mini"
      >
        {{ $t('mini') }}
      </justice-button>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      type: '按钮类型',
      size: '按钮尺寸',
      icon: '图标按钮',
      loading: '加载状态',
      shape: '按钮形状',
      default: '默认按钮',
      primary: '主要按钮',
      info: '信息按钮',
      danger: '危险按钮',
      warning: '警告按钮',
      large: '大号按钮',
      normal: '普通按钮',
      small: '小型按钮',
      mini: '迷你按钮',
      plain: '朴素按钮',
      square: '方形按钮',
      round: '圆形按钮',
      hairline: '细边框',
      hairlineButton: '细边框按钮',
      loadingText: '加载中...'
    },
    'en-US': {
      type: 'Type',
      size: 'Size',
      icon: 'Icon',
      loading: 'Loading',
      shape: 'Shape',
      default: 'Default',
      primary: 'Primary',
      info: 'Info',
      danger: 'Danger',
      warning: 'Warning',
      large: 'Large',
      normal: 'Normal',
      small: 'Small',
      mini: 'Mini',
      plain: 'Plain',
      square: 'Square',
      round: 'Round',
      hairline: 'Hairline',
      hairlineButton: 'Hairline',
      loadingText: 'Loading...'
    }
  }
};
</script>

<style lang="scss">
.demo-button {
  .justice-button {
    &--large {
      margin-bottom: 15px;
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: 10px;
    }
  }

  .van-doc-demo-block {
    padding: 0 15px;
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: 10px;
  }
}
</style>
