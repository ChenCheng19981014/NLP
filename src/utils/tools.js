/**
 *  echarts tooltip 自动轮播
 *  @author liuwei
 *  @param myChart  //初始化echarts的实例
 *  @param option   //指定图表的配置项和数据
 *  @param num      //类目数量(原因：循环时达到最大值后，使其从头开始循环)
 *  @param time     //轮播间隔时长
 */
export function autoHover(myChart, option, num, time, isBrokenLine = false) {
  var defaultData = { // 设置默认值
    time: 3000,
    num: 14
  };
  if (!time) {
    time = defaultData.time;
  }
  if (!num) {
    num = defaultData.num;
  }

  var count = 0;
  var timeTicket = 0;

  // 清除定时器
  function clearLoop() {
    if (timeTicket) {
      clearInterval(timeTicket);
      timeTicket = 0;
    }

    myChart.off('mousemove', () => {
      stopAutoShow()
    });


    myChart.getZr().off('mousemove', () => {
      zRenderMouseMove()
      console.log('停止 轮播； ');
    });
    // myChart.getZr().off('globalout', zRenderGlobalOut);
  }

  // 关闭轮播
  function stopAutoShow() {
    if (timeTicket) {
      clearInterval(timeTicket);
      timeTicket = 0;
    }
  }

  function zRenderMouseMove(param) {
    if (param.event) {
      // 阻止canvas上的鼠标移动事件冒泡
      // param.event.cancelBubble = true;
    }
    stopAutoShow();
  }


  timeTicket && clearInterval(timeTicket);

  timeTicket = setInterval(function () {
    myChart?.dispatchAction({
      type: 'downplay',
      seriesIndex: 0 // serieIndex的索引值   可以触发多个
    });
    myChart?.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: count
    });
    myChart?.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: count
    });
    count++;
    if (count >= num) {
      count = 0;
    }
  }, time);

  // 判断是否是折线图
  if (isBrokenLine) {

    myChart.getZr().on('mousemove', function (params) {
      // 清除 定时器
      clearLoop();
      clearInterval(timeTicket);
      myChart?.dispatchAction({
        type: 'downplay',
        seriesIndex: 0
      });
      myChart?.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: params.dataIndex
      });
      myChart?.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: params.dataIndex
      });
    });
    myChart.getZr().on('mouseout', function () {
      timeTicket && clearInterval(timeTicket);
      timeTicket = setInterval(function () {
        myChart?.dispatchAction({
          type: 'downplay',
          seriesIndex: 0 // serieIndex的索引值   可以触发多个
        });
        myChart?.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: count
        });
        myChart?.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: count
        });
        count++;
        if (count >= 14) {
          count = 0;
        }
      }, 3000);
    });
  } else {

    myChart.on('mouseover', function (params) {
      // 清除 定时器
      clearLoop();

      clearInterval(timeTicket);

      console.log('21122:', 21122);

      myChart?.dispatchAction({
        type: 'downplay',
        seriesIndex: 0
      });
      myChart?.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: params.dataIndex
      });
      myChart?.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: params.dataIndex
      });
    });

    myChart.on('mouseout', function () {
      timeTicket && clearInterval(timeTicket);
      timeTicket = setInterval(function () {
        myChart?.dispatchAction({
          type: 'downplay',
          seriesIndex: 0 // serieIndex的索引值   可以触发多个
        });
        myChart?.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: count
        });
        myChart?.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: count
        });
        count++;
        if (count >= 14) {
          count = 0;
        }
      }, 3000);
    });
  }


  return clearLoop
}

/**
 *  echarts tooltip 自动轮播
 *  @param chart
 *  @param chartOption
 *  @param options
 *  {
 *  interval    轮播时间间隔，单位毫秒，默认为2000
 *  loopSeries  boolean类型，默认为false。
 *              true表示循环所有series的tooltip，false则显示指定seriesIndex的tooltip
 *  seriesIndex 默认为0，指定某个系列（option中的series索引）循环显示tooltip，
 *              当loopSeries为true时，从seriesIndex系列开始执行.
 *  }
 * @returns {{clearLoop: clearLoop}}
 */

export const autoToolTip = (chart, chartOption, options) => {
  // console.log('chart, chartOption, options',chart, chartOption, options)
  var defaultOptions = {
    interval: 2000,
    loopSeries: false,
    seriesIndex: 0,
    updateData: null
  };

  if (!chart || !chartOption) {
    return {};
  }

  var dataIndex = 0; // 数据索引，初始化为-1，是为了判断是否是第一次执行
  var seriesIndex = 0; // 系列索引
  var timeTicket = 0;
  var seriesLen = chartOption.series.length; // 系列个数
  var dataLen = 0; // 某个系列数据个数
  var chartType; // 系列类型
  var first = true;

  // 不循环series时seriesIndex指定显示tooltip的系列，不指定默认为0，指定多个则默认为第一个
  // 循环series时seriesIndex指定循环的series，不指定则从0开始循环所有series，指定单个则相当于不循环，指定多个
  // 要不要添加开始series索引和开始的data索引？

  if (options) {
    options.interval = options.interval || defaultOptions.interval;
    options.loopSeries = options.loopSeries || defaultOptions.loopSeries;
    options.seriesIndex = options.seriesIndex || defaultOptions.seriesIndex;
    options.updateData = options.updateData || defaultOptions.updateData;
  } else {
    options = defaultOptions;
  }

  // 如果设置的seriesIndex无效，则默认为0
  if (options.seriesIndex < 0 || options.seriesIndex >= seriesLen) {
    seriesIndex = 0;
  } else {
    seriesIndex = options.seriesIndex;
  }

  function autoShowTip() {
    function showTip() {
      // 判断是否更新数据
      if (dataIndex === 0 && !first && typeof options.updateData === "function") {
        options.updateData();
        chart?.setOption(chartOption);
      }

      var series = chartOption.series;
      chartType = series[seriesIndex].type; // 系列类型
      dataLen = series[seriesIndex].data.length; // 某个系列的数据个数

      var tipParams = { seriesIndex: seriesIndex };
      switch (chartType) {
        case 'map':
        case 'pie':
        case 'chord':
          tipParams.name = series[seriesIndex].data[dataIndex].name;
          break;
        case 'radar': // 雷达图
          tipParams.seriesIndex = seriesIndex;
          tipParams.dataIndex = dataIndex;
          break;
        default:
          tipParams.dataIndex = dataIndex;
          break;
      }

      if (!chart) return

      if (chartType === 'pie' || chartType === 'radar') {
        // 取消之前高亮的图形
        chart?.dispatchAction({
          type: 'downplay',
          seriesIndex: options.loopSeries ? (seriesIndex === 0 ? seriesLen - 1 : seriesIndex - 1) : seriesIndex,
          dataIndex: dataIndex === 0 ? dataLen - 1 : dataIndex - 1
        });

        // 高亮当前图形
        chart?.dispatchAction({
          type: 'highlight',
          seriesIndex: seriesIndex,
          dataIndex: dataIndex
        });
      }

      // 显示 tooltip
      tipParams.type = 'showTip';
      chart && chart?.dispatchAction(tipParams);

      dataIndex = (dataIndex + 1) % dataLen;
      if (options.loopSeries && dataIndex === 0 && !first) { // 数据索引归0表示当前系列数据已经循环完
        seriesIndex = (seriesIndex + 1) % seriesLen;
      }

      first = false;
    }

    showTip();
    timeTicket = setInterval(showTip, options.interval);
  }

  // 关闭轮播
  function stopAutoShow() {
    if (timeTicket) {
      clearInterval(timeTicket);
      timeTicket = 0;

      if (!chart) return

      if (chartType === 'pie' || chartType === 'radar') {
        // 取消高亮的图形
        chart?.dispatchAction({
          type: 'downplay',
          seriesIndex: options.loopSeries ? (seriesIndex === 0 ? seriesLen - 1 : seriesIndex - 1) : seriesIndex,
          dataIndex: dataIndex === 0 ? dataLen - 1 : dataIndex - 1
        });
      }
    }
  }

  var zRender = chart.getZr();

  function zRenderMouseMove(param) {
    if (param.event) {
      // 阻止canvas上的鼠标移动事件冒泡
      param.event.cancelBubble = true;
    }

    stopAutoShow();
  }

  // 离开echarts图时恢复自动轮播
  function zRenderGlobalOut() {
    if (!timeTicket) {
      autoShowTip();
    }
  }

  // 鼠标在echarts图上时停止轮播
  chart.on('mousemove', stopAutoShow);
  zRender.on('mousemove', zRenderMouseMove);
  zRender.on('globalout', zRenderGlobalOut);

  autoShowTip();

  return {
    clearLoop: function () {

      chart&& chart.dispose();
      
      if (timeTicket) {
        clearInterval(timeTicket);
        timeTicket = 0;
      }

      chart?.off('mousemove', stopAutoShow);
      zRender?.off('mousemove', zRenderMouseMove);
      zRender?.off('globalout', zRenderGlobalOut);
    }
  };
};

export default {
  autoHover,
  autoToolTip
}

console.warn = () => {};
