//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
  const cacheValuesCount = 5;
  return (...args) => {
    const hash = md5(args);
    const objectInCache = cache.find((object) => object.hash === hash);
      if (objectInCache) {
        console.log("Из кеша: " + objectInCache.value);
        return "Из кеша: " + objectInCache.value;
      }
      let result = func(...args);
      cache.push({hash: hash, value: result});
      if (cache.length > cacheValuesCount) {
        cache.shift();
      }
      console.log ("Вычисляем: " + result);
      return "Вычисляем: " + result;
  }
}


//Задача № 2
function debounceDecoratorNew(funcArgs, delay) {
	let timerId = null;
  function resultFunction(...args) {
  	if (!timerId) {
  		funcArgs(...args);
  		resultFunction.count++;
  	}
        resultFunction.allCount++;

  	clearTimeout(timerId);
  	timerId = setTimeout(() => {
  		funcArgs(...args);
  		resultFunction.count++;
  	}, delay)
  }
	resultFunction.count = 0;
	resultFunction.allCount = 0;
return resultFunction;
}


let decorated = debounceDecoratorNew((...args) => console.log('бзбзбз', ...args), 3000);