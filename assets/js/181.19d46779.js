(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{532:function(s,a,e){"use strict";e.r(a);var h=e(0),o=Object(h.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"hashcode-方法和equals-方法的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hashcode-方法和equals-方法的区别"}},[s._v("#")]),s._v(" hashCode()方法和equals()方法的区别")]),s._v(" "),e("p",[s._v("hashCode()方法和equals()方法的作用其实是一样的，在Java里都是用来对比两个对象是否相等一致。")]),s._v(" "),e("p",[e("strong",[s._v("那么equals()既然已经能实现对比的功能了，为什么还要hashCode()呢？")])]),s._v(" "),e("p",[s._v("因为重写的equals()里一般比较的比较全面比较复杂，这样效率就比较低，而利用hashCode()进行对比，则只要生成一个hash值进行比较就可以了，效率很高。")]),s._v(" "),e("p",[e("strong",[s._v("那么hashCode()既然效率这么高为什么还要equals()呢？")])]),s._v(" "),e("p",[s._v("因为hashCode()并不是完全可靠，有时候不同的对象他们生成的hashcode也会一样（生成hash值得公式可能存在的问题），所以hashCode()只能说是大部分时候可靠，并不是绝对可靠，")]),s._v(" "),e("p",[e("strong",[s._v("所以我们可以得出：")])]),s._v(" "),e("p",[e("strong",[s._v("1.equals()相等的两个对象他们的hashCode()肯定相等，也就是用equals()对比是绝对可靠的。")])]),s._v(" "),e("p",[e("strong",[s._v("2.hashCode()相等的两个对象他们的equal()不一定相等，也就是hashCode()不是绝对可靠的。")])]),s._v(" "),e("p",[s._v("所有对于需要大量并且快速的对比的话如果都用equals()去做显然效率太低，所以解决方式是，每当需要对比的时候，首先用hashCode()去对比，如果hashCode()不一样，则表示这两个对象肯定不相等（也就是不必再用equal()去再对比了）,如果hashCode()相同，此时再对比他们的equals()，如果equals()也相同，则表示这两个对象是真的相同了，这样既能大大提高了效率也保证了对比的绝对正确性！")])])}),[],!1,null,null,null);a.default=o.exports}}]);