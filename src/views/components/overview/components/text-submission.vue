<script setup lang="ts">
import { ref } from "vue";
const emit = defineEmits(["subText"]);
// 文本
const textarea = ref(
  `习近平主席特使、全国人大常委会副委员长艾力更·依明巴海2019年12月10日在阿根廷首都布宜诺斯艾利斯出席阿新总统就职仪式，并于9日会见新任总统费尔南德斯。
艾力更·依明巴海向费尔南德斯转达了习近平主席的热烈祝贺和良好祝愿，并转交了习主席亲署函。艾力更·依明巴海表示，中方始终从战略高度和长远角度发展对阿关系，愿同阿方携手努力，加强全方位交往，推进各领域互利合作，密切人文领域交流，深化多边战略协作，推动中阿全面战略伙伴关系深入发展。
费尔南德斯感谢习近平主席派特使出席其就职仪式，请艾力更·依明巴海转达他对习近平主席的亲切问候。费表示，读了习主席亲署函，感到非常高兴和亲切。阿新政府高度重视对华关系，对两国合作充满信心和期待，愿同中方携手努力，深化各领域交往与合作，将两国关系提升到新的高度。
艾力更·依明巴海还会见了阿新任副总统克里斯蒂娜和卸任总统马克里。
  `
);
</script>

<template>
  <!-- 文本提交 -->
  <div class="text-submission">
    <el-input
      class="sub-input"
      v-model="textarea"
      style="width: 100%"
      :autosize="{ minRows: 2, maxRows: 4 }"
      type="textarea"
      placeholder="Please input"
    />
    <el-button
      class="sub-button"
      type="primary"
      @click="
        () => {
          emit('subText', '测试提交文本');
        }
      "
      >提交文本</el-button
    >
  </div>
</template>

<style scoped lang="scss">
@import "@/design/hooks.scss";

.text-submission {
  @include center;
  width: 100%;
  height: 100%;
  padding: 30px;
  margin-top: 50px;
  justify-content: space-around;
  flex-direction: column;
}
</style>

<style lang="scss">
.text-submission {
  .sub-input {
    width: 100%;
    height: 200px;

    > textarea {
      width: 100%;
      height: 100% !important;
      text-indent: 20px; /* 设置缩进为20像素 */
    }
  }

  .sub-button {
    margin-left: auto;
  }
}
</style>
