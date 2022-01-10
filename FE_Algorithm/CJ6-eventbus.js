/*
 * @Author: Ran
 * @Date: 2021-08-20 12:48:05
 * @LastEditTime: 2021-08-20 13:04:48
 * @FilePath: \FrontEnd-Algorithm-JS\FE_Algorithm\CJ6-eventbus.js
 * @Description: 
 */
// 实现一个event bus
const o = {
    eventList: {}, // 存放事件对象

    on(event, cb) {
        if (!this.eventList[event]) {
            this.eventList[event] = []
        }
        this.eventList[event].push(cb)
    },

    emit(event) {
        let args = [...arguments].slice(1)
        if (this.eventList[event] && this.eventList[event].length !== 0) {
            this.eventList[event].forEach(callback => {
                callback(...args)
            })
        }

    },

    // 不带参、带一个参数、带两个参数
    off(event, cb) {
        const tasks = this.eventList[event]
            // 校验事件队列是否存在
        if (!Array.isArray(tasks)) {
            return
        }

        // 利用 filter 删除队列中的指定函数
        this.eventList[event] = tasks.filter((fn) => cb !== fn);
    },

    once(event, cb) {
        if (!this.eventList[event]) {
            this.eventList[event] = []
        }

        const that = this
            // 注意该函数必须是具名函数，因为需要删除，但该名称只在函数内部有效
        function _once(...args) {
            cb(...args)
            that.off(event, _once) // 执行一次后注销
        }

        this.eventList[event].push(_once)

    }
};
// 例子
const fn = (a) => console.log(a)
o.on('test', fn)
o.on('test', fn)
o.once('test', fn)
o.emit('test', 1)
    // 1
    // 1
    // 1
o.emit('test', 2)
    // 22