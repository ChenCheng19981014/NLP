<script setup>
import { ref, onMounted } from "vue";
import * as Cesium from "cesium";
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNzM4NTE5NC1mYjVjLTQzMzAtOTVjNS04MzgxNzBmZDE4YzQiLCJpZCI6MjIyMjQ5LCJpYXQiOjE3MTgzNzA3ODZ9.uGkhGZAviYDWgSKm5igAbjOCybmPR3Ka2W107J-gGXE";

const init = () => {
  // cesium的视图
  const viewer = new Cesium.Viewer("ces", {
    infoBox: false,
    timeline: false, // 是否显示时间线控件
    geocoder: false,
    homeButton: false, // 重置视角 按钮
    sceneModePicker: false, // 显示三维/二维切换按钮
    baseLayerPicker: false, // 切换地形 卫星影像 3D模型
    navigationHelpButton: false, // 帮助按钮
    animation: false, // 动画
    // creditContainer:"credit",
    // fullscreenButton:false,
    // vrButton:false,
  });

  // 输入经纬度 转为 笛卡尔坐标
  const cartesian = Cesium.Cartesian3.fromDegrees(
    120.3862847676645,
    31.48931813158433,
    20
  );

  //  笛卡尔坐标 转 弧度的坐标
  const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
  // 弧度 转 角度
  // const lon = (180 / Math.PI) * cartographic.longitude;
  // const lat = (180 / Math.PI) * cartographic.latitude;
  const lon = Cesium.Math.toDegrees(cartographic.longitude);
  const lat = Cesium.Math.toDegrees(cartographic.latitude);

  // console.log("笛卡尔坐标:", cartographic, cartesian, lon, lat);
  // console.log("cesium的视图:", viewer);

  const position = Cesium.Cartesian3.fromDegrees(
    120.38017292236532,
    31.480874872499374,
    4000
  );

  // 相机 聚焦到笛卡尔坐标
  viewer.camera.setView({
    destination: position,
    orientation: {
      // 默认(0,-90,0)
      heading: Cesium.Math.toRadians(0), // 左右
      pitch: Cesium.Math.toRadians(-70), // 上下
      roll: Cesium.Math.toRadians(0), // 歪头
    },
  });

  // 带飞行动画 飞行到指定的笛卡尔坐标
  // viewer.camera.flyTo({
  //   destination: position,
  //   duration: 3, // 单位
  //   orientation: {
  //     // 默认(0,-90,0)
  //     heading: Cesium.Math.toRadians(0), // 左右
  //     pitch: Cesium.Math.toRadians(-70), // 上下
  //     roll: Cesium.Math.toRadians(0), // 歪头
  //   },
  // });

  // 相机 看的指定视角 类似theejs相机lookAt\
  /**
   * heading 、 pitch 、range
   */
  // viewer.camera.lookAt(
  //   position,
  //   new Cesium.HeadingPitchRange(
  //     Cesium.Math.toRadians(0),
  //     Cesium.Math.toRadians(-90),
  //     4000
  //   )
  // );
  console.log(
    new Cesium.HeadingPitchRange(
      Cesium.Math.toRadians(0),
      Cesium.Math.toRadians(-90),
      4000
    )
  );

  let params = {
    lon: 119.98,
    lat: 30.22,
    alt: 0,
    heading: Cesium.Math.toRadians(60.0),
    pitch: Cesium.Math.toRadians(30.0),
    roll: 0.0,
    range: 5000.0,
  };

  // 添加模型 entities模型
  viewer.entities.add({
    // 设置方向
    orientation: {
      // 指向
      heading: params.heading,
      // 视角
      pitch: params.pitch,
      roll: params.roll,
    },
    position: Cesium.Cartesian3.fromDegrees(
      120.38017292236532,
      31.480874872499374,
      40
    ),
    model: {
      // 引入模型
      uri: "./airship.glb",
      // 模型的近似最小像素大小，而不考虑缩放。这可以用来确保即使观看者缩小也可以看到模型。如果为0.0，则不强制使用最小大小
      minimumPixelSize: 1280,
      // 模型的颜色（与模型的渲染颜色混合的属性）
      color: Cesium.Color.WHITE.withAlpha(1),
      // 模型的最大比例大小
      maximumScale: 20000,
      // 设置模型轮廓（边框）颜色
      silhouetteColor: Cesium.Color.BLACK,
      // 设置模型轮廓（边框）大小
      silhouetteSize: 2,
      // 是否执行模型动画
      // runAnimations: true,
      // 应用于图像的统一比例。比例大于会1.0放大标签，而比例小于会1.0缩小标签。
      scale: 1.0,
      // 是否显示
      show: true,
    },
  });

  viewer.scene.primitives
    .add(model)
    .readyPromise.then(function (model) {
      console.log("Model loaded successfully");
    })
    .otherwise(function (error) {
      console.error("Error loading model:", error);
    });
};

onMounted(() => {
  init();
});
</script>

<template>
  <div id="ces"></div>
</template>

<style scoped lang="scss">
#ces {
  width: 100%;
  height: 100%;
}
</style>

<style lang="scss">
.cesium-viewer-bottom {
  display: none;
}
</style>
