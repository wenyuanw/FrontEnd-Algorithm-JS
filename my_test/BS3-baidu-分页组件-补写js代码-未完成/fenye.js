/*
 * @Author: Ran
 * @Date: 2021-03-21 18:49:47
 * @LastEditTime: 2021-03-21 21:10:15
 * @FilePath: \JZoffer\my_test\BS3-baidu-分页组件-补写js代码-未完成\fenye.js
 * @Description: 
 */

/* 
题目描述：
本题展示了一个分页组件，界面中存在 id=jsContainer 的节点 A，
系统会随机实例化各 Pagination 实例，请按照如下要求补充完成 Pagination 函数。
每个 demo 都在编辑器的 html 这一个 tab 下。
---------------------------------------------------------------------------
1. 最多连续显示 5 页，居中高亮显示 current 页 (如 demo1 所示)
2. total <= 1 时，隐藏该组件 (如 demo2 所示)
3. 如果 total <= 5, 则显示全部页数，隐藏“首页”和“末页”元素 (如 demo3 所示)
4. 当 current 居中不足 5 页，向后（前）补足 5 页，隐藏“首页”（“末页”）元素(如 demo4 和 demo5 所示)
5. total、current 均为正整数，1 <= current <= total
6. 当前界面中，节点 A 为系统执行 new Pagination （节点 A，20，10）后的展示效果
7. 请不要手动修改 html 和 css
8. 不要使用第三方插件
---------------------------------------------------------------------------
 */
function Pagination(container, total, current) {
    this.total = total;
    this.current = current;
    this.html = html;
    this.val = val;
    this.el = null; //TODO: 创建分页组件根节点
    if (!this.el) return;

    this.el.innerHTML = this.html();
    container.appendChild(this.el);
    this.el.className = ''; //TODO: 判断是否需要隐藏当前元素

    function html() {
        if (this.total <= 1) return '';

        //TODO: 生成组件的内部html字符串
        return '';
    }

    function val(current) {
        if (arguments.length === 0) return this.current;
        if (current < 1 || current > this.total || current === this.current) return;
        this.current = current;
        this.el.innerHTML = this.html();
    };
}