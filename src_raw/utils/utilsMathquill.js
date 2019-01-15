const fMathQuill = {
  getInterface: (n = 2) => getInterface(n),
  isLoaded: () => isLoaded(),
  MathField: (...args) => MathField(...args),
  object: () => window.MathQuill,
  StaticMath: (...args) => StaticMath(...args),
  waitThenWhenLoaded: (callback, interval, wait) => waitThenWhenMathQuillLoaded(callback, interval, wait),
  whenLoaded: (callback, interval) => whenMathQuillLoaded(callback, interval)
};

const getInterface = (n = 2) => (
  window.MathQuill
    ? window.MathQuill.getInterface(n)
    : null
)

const isLoaded = () => window.MathQuill

const MathField = (...args) => (
  isLoaded()
    ? getInterface().MathField(...args)
    : null
)

const StaticMath = (...args) => (
  isLoaded()
    ? getInterface().StaticMath(...args)
    : null
)

const waitThenWhenMathQuillLoaded = (callback, interval, wait = 0) => (
  setTimeout(() => whenMathQuillLoaded(callback, interval), wait)
)

const whenMathQuillLoaded = (callback, interval = 100) => {
  isLoaded()
    ? callback()
    : setTimeout(() => whenMathQuillLoaded(callback, interval), interval)
}

export default fMathQuill