//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper (...args) {
    const hash = md5(args);
    let objectInCache = cache.find(item => item.cache === hash);
      if (objectInCache) {
        console.log("Из кеша: " + objectInCache[hash]);
        return "Из кеша: " + objectInCache[hash];
      }
      let result = func(...args);
      cache[hash] = result;
      cache.push(result);
      if (cache.lenght > 5) {
        cache.shift();
      }
      console.log ("Вычисляем: " + result);
      return "Вычисляем: " + result;
  }
  return wrapper;
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