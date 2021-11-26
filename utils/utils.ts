// TODO: Modernize
/* eslint-disable */
import { groupBy } from 'lodash';

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function (...args) {
    if (!lastRan) {
      func.apply(null, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(null, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

export const debounce = (callback, wait, timeoutId = null) => (
  ...args
) => {
  window.clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    callback.apply(null, args);
  }, wait);
};

export const slugify = (str = '') => {
  let slug = str
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '');

  // If the value starts with a number, swap it out!
  // Doing this in a dumb way for now.
  if (slug.match(/^[\d]{1,2}/)) {
    slug = slug.replace(/^[\d]{1,2}/, 'digit');
  }

  return slug;
};

export const normalize = (
  number,
  currentScaleMin,
  currentScaleMax,
  newScaleMin = 0,
  newScaleMax = 1
) => {
  // FIrst, normalize the value between 0 and 1.
  const standardNormalization =
    (number - currentScaleMin) / (currentScaleMax - currentScaleMin);

  // Next, transpose that value to our desired scale.
  return (
    (newScaleMax - newScaleMin) * standardNormalization + newScaleMin
  );
};


// 格式化日期
export const formatDate = (dateStr, fmt) => {
  const date = new Date(dateStr);
  const o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    "S": date.getMilliseconds()
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  
  return fmt;
}

// 文章排序
export const sortPosts = (posts, limit) => {
  const sortedPosts = [...posts].sort((a, b) => {
    return Date.parse(b.time) - Date.parse(a.time);
  });
  if (limit && limit > 0 && limit < sortedPosts.length) return sortedPosts.splice(0, limit);
  return sortedPosts;
};

// 文章排序
export const postGroupBy = (posts, key) => {
  let data = groupBy(posts, key);
  let keys = Object.keys(data);
  let newArr = [];
  for(let key of keys){
    newArr.push({
      title: key,
      data: data[key]
    });
  }
  newArr.sort((a, b) => {
    return parseInt(b.title) - parseInt(a.title);
  });
  return newArr;
};