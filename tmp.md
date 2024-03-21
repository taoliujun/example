<!--hexo

---
url: web-api-Media_Capabilities_API
tags:
  - webapi
  - Media Capabilities
---

-->

# Media Capabilities

> MDN: https://developer.mozilla.org/en-US/docs/Web/API/Media_Capabilities_API

**Media Capabilities**获取设备的编码解码能力，包含是否支持、是否流畅，是否高效能。

媒体的编解码能力受设备、硬件、软件、媒体流的影响，播放的效果是不尽相同的。通过此接口可以为用户选择合适的媒体流类型、清晰度、帧率等以让用户至少能流畅的播放。

-   用户不能播放mp4，则提供ogg。
-   播放1080p会卡顿，则播放720p。

## 接口

### MediaCapabilities

媒体能力接口，提供两个方法来分别检测编码、解码能力：

-   encodingInfo，检测编码能力。
-   decodingInfo，检测解码能力。

## 属性和方法

### Navigator: mediaCapabilities

返回`MediaCapabilities`接口实例。

## 事件

//

## 示例

示例：https://taoliujun.github.io/example/web-api/Media_Capabilities_API/index.html
