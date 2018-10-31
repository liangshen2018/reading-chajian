// 默认配置的是纵向的区域滚动
// scrollY: true   默认值
// scrollX: false  默认值
window.addEventListener("load", function() {
  new IScroll(".jd_content_left");
  new IScroll(".jd_content_right", {
    scrollX: true,   // 设置是否进行水平方向的区域滚动
    scrollY: true   // 设置是否进行垂直方向的区域滚动
  });
});