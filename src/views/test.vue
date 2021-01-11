<template>
  <h1>test</h1>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue'
import { 
  reactive, 
  effect, 
  shallowReactive,
  readonly,
  shallowReadonly,
  isReactive,
  isReadonly,
  isProxy,
  markRaw,
  toRaw,
  stop,
  track,
  trigger,
  TrackOpTypes,
  TriggerOpTypes,
  ref
  } from '@vue/reactivity';

export default defineComponent({
  name: 'test',
  setup () {
    //reactive() 函数接收一个对象作为参数，并返回一个代理对象
    //effect() 函数用于定义副作用，它的参数就是副作用函数，副作用
    //函数内的响应式数据会与副作用函数间建立联系，即依赖收集，当响应式
    //数据变化后，会导致副作用函数重新执行
    /* const obj = reactive({ text: 'hello' })
    effect(() => {
      document.body.innerText = obj.text
    })
    setTimeout(() => {
      obj.text += ' world'
    }, 1000) */

    // shallowReactive()定义浅响应式数据
    /* const obj = shallowReactive({ foo: { bar: 1 } })
    effect(() => {
      console.log(obj.foo.bar)
    }) 
    obj.foo.bar = 2 //无效
    obj.foo = { bar: 2 } // 有效 */

    // readonly()定义只读数据
    // shallowReadonly() 定义浅只读数据，在 Vue 内部 props 就是使用 shallowReadonly()
    /* const obj = readonly({ text: 'hello' })
    // obj.text += ' world' // 报错

    const obj2 = shallowReadonly({ foo: { bar: 1 } })
    obj2.foo = { bar: 2 } // 报错
    obj2.foo.bar = 2 */

    // isReactive() 判断数据对象是否是reactive
    /* const reactiveProxy = reactive({ foo: { bar: 1 } })
    console.log(isReactive(reactiveProxy)) // true
    console.log(isReactive(reactiveProxy.foo)) // true

    const shallowReactiveProxy = shallowReactive({ foo: { bar: 1 } })
    console.log(isReactive(shallowReactiveProxy)) // true
    console.log(isReactive(shallowReactiveProxy.foo)) // false

    const readonlyProxy = readonly({ foo: 1 })
    console.log(isReactive(readonlyProxy)) // false

    const shallowReadonlyProxy = shallowReadonly({ foo: { bar: 1 } })
    console.log(isReactive(shallowReadonlyProxy)) //false
    console.log(isReactive(shallowReadonlyProxy.foo))
    console.log(isReactive(shallowReadonlyProxy.foo.bar)) */

    // isReadonly() 用于判断数据是否是readonly
    /* console.log(isReadonly(readonly({}))) // true
    console.log(isReadonly(shallowReadonly({}))) // true
    console.log(isReadonly(reactive({}))) // false
    console.log(isReadonly(shallowReactive({}))) // false */

    // isProxy() 用于判断对象是否是代理对象（reactive或readonly）
    /* console.log(isProxy(readonly({}))) // true
    console.log(isProxy(shallowReadonly({}))) // true
    console.log(isProxy(reactive({}))) // true
    console.log(isProxy(shallowReactive({}))) // true

    const shallowReactiveProxy = shallowReactive({ foo: {} })
    console.log(isProxy(shallowReactiveProxy))  // true
    console.log(isProxy(shallowReactiveProxy.foo))  // false

    const shallowReadonlyProxy = shallowReadonly({ foo: {} })
    console.log(isProxy(shallowReadonlyProxy))  // true
    console.log(isProxy(shallowReadonlyProxy.foo))  // false */

    // 哪些数据是可以被代理的：
    // 1、Object、Array、 Map 、Set 、WeakMap 、WeakSet
    // 2、非object.isFrozen
    // markRaw() 函数用于让数据不可被代理，实际上就是在对象上定义__v_skip属性
    // 从而跳过代理
    /* const obj = { foo: 1 }
    markRaw(obj)
    console.log(obj) */

    // toRaw() 接收代理对象作为参数，并获取原始对象
    /* const obj1 = {}
    const reactiveProxy = reactive(obj1)
    console.log(toRaw(reactiveProxy) === obj1) // true

    const obj2 = {}
    const readonlyProxy = readonly(obj2)
    console.log(toRaw(readonlyProxy) === obj2) // true */

    /* const obj = reactive({ count: 1 })
    // effect(() => {
    //   console.log(obj.count)
    // })
    watchEffect(() => {
      console.log(obj.count)
    })
    obj.count++
    obj.count++
    obj.count++ */

    // 调度器实现
    /* const queue: Function[] = []
    let isFlushing = false
    function queueJob(job: () => void) {
      if (!queue.includes(job)) queue.push(job)
      if (!isFlushing) {
        isFlushing = true
        Promise.resolve().then(() => {
          let fn
          while(fn = queue.shift()) {
            fn()
          }
        })
      }
    }
    const obj = reactive({ count: 1 })
    effect(() => {
      console.log(obj.count)
    }, {
      // 指定调度器为 queueJob
      scheduler: queueJob
    })
    obj.count++
    obj.count++
    obj.count++
 */

    /* const obj = reactive({ foo: 1 })
    watchEffect(() => {
      console.log(obj.foo)
    })

    obj.foo++
    obj.foo++
    obj.foo++ */

    /* const obj = reactive({ foo: 1 })
    const runner = effect(() => {
      console.log(obj.foo)
    })
    // 停止一个副作用
    stop(runner)
    obj.foo++
    obj.foo++ */
    
    // track() 与 trigger()
    /* track() 和 trigger() 是依赖收集的核心，track() 用来跟踪收集依赖(收集 effect)，
    trigger() 用来触发响应(执行 effect)，它们需要配合 effect() 函数使用： */
    /* const obj = { foo: 1 }
    effect(() => {
      console.log(obj.foo)
      track(obj, TrackOpTypes.GET, 'foo')
    })
    obj.foo = 2
    trigger(obj, TriggerOpTypes.SET, 'foo') */

    /**
     * ref() reactive()函数可以代理一个对象，但不能代理基本类型值，例如字符串、
     * 数字、boolean等，这是js语言的限制，因此我们需要使用ref()函数间接对基本
     * 数据类型进行处理
     */
    /* const refVal = ref(0)
    effect(() => {
      console.log(refVal.value)
    })
    refVal.value = 1 */

    /* function myRef(val: any) {
    let value = val

    const r = {
      isRef: true, // 随便加个标识以示区分
      get value() {
        // 收集依赖
        track(r, TrackOpTypes.GET, 'value')
        return value
      },
      set value(newVal: any) {
        if (newVal !== value) {
          value = newVal
          // 触发响应
          trigger(r, TriggerOpTypes.SET, 'value')
        }
      }
    }
    return r
  }
  const refVal = myRef(0)
  effect(() => {
    console.log(refVal.value)
  })

  refVal.value = 1 */

  


    





   

    return {
    }
  }
})
</script>
