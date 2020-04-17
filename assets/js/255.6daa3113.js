(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{448:function(v,_,t){"use strict";t.r(_);var n=t(0),o=Object(n.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"cron表达式详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cron表达式详解"}},[v._v("#")]),v._v(" cron表达式详解")]),v._v(" "),t("p",[v._v("Cron表达式是一个字符串，字符串以5或6个空格隔开，分为6或7个域，每一个域代表一个含义，Cron有如下两种语法格式：")]),v._v(" "),t("p",[v._v("（1） Seconds Minutes Hours DayofMonth Month DayofWeek Year")]),v._v(" "),t("p",[v._v("（2）"),t("em",[v._v("Seconds Minutes Hours DayofMonth Month DayofWeek")])]),v._v(" "),t("p"),v._v(" "),t("p",[t("strong",[v._v("一、结构")])]),v._v(" "),t("p",[v._v("corn从左到右（用空格隔开）：秒 分 小时 月份中的日期 月份 星期中的日期 年份")]),v._v(" "),t("p",[t("strong",[v._v("二、各字段的含义")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("字段")]),v._v(" "),t("th",[v._v("允许值")]),v._v(" "),t("th",[v._v("允许的特殊字符")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("秒（Seconds）")]),v._v(" "),t("td",[v._v("0~59的整数")]),v._v(" "),t("td",[v._v(", - * /   四个字符")])]),v._v(" "),t("tr",[t("td",[v._v("分（"),t("em",[v._v("Minutes")]),v._v("）")]),v._v(" "),t("td",[v._v("0~59的整数")]),v._v(" "),t("td",[v._v(", - * /   四个字符")])]),v._v(" "),t("tr",[t("td",[v._v("小时（"),t("em",[v._v("Hours")]),v._v("）")]),v._v(" "),t("td",[v._v("0~23的整数")]),v._v(" "),t("td",[v._v(", - * /   四个字符")])]),v._v(" "),t("tr",[t("td",[v._v("日期（"),t("em",[v._v("DayofMonth")]),v._v("）")]),v._v(" "),t("td",[v._v("1~31的整数（但是你需要考虑你月的天数）")]),v._v(" "),t("td",[v._v(",- * ? / L W C   八个字符")])]),v._v(" "),t("tr",[t("td",[v._v("月份（"),t("em",[v._v("Month")]),v._v("）")]),v._v(" "),t("td",[v._v("1~12的整数或者 JAN-DEC")]),v._v(" "),t("td",[v._v(", - * /   四个字符")])]),v._v(" "),t("tr",[t("td",[v._v("星期（"),t("em",[v._v("DayofWeek")]),v._v("）")]),v._v(" "),t("td",[v._v("1~7的整数或者 SUN-SAT （1=SUN）")]),v._v(" "),t("td",[v._v(", - * ? / L C #   八个字符")])]),v._v(" "),t("tr",[t("td",[v._v("年(可选，留空)（"),t("em",[v._v("Year")]),v._v("）")]),v._v(" "),t("td",[v._v("1970~2099")]),v._v(" "),t("td",[v._v(", - * /   四个字符")])])])]),v._v(" "),t("p",[t("strong",[v._v("注意事项：")])]),v._v(" "),t("p",[v._v("每一个域都使用数字，但还可以出现如下特殊字符，它们的含义是：")]),v._v(" "),t("p",[v._v("（1）"),t("em",[v._v("：表示匹配该域的任意值。假如在Minutes域使用")]),v._v(", 即表示每分钟都会触发事件。")]),v._v(" "),t("p",[v._v("（2）?：只能用在DayofMonth和DayofWeek两个域。它也匹配域的任意值，但实际不会。因为DayofMonth和DayofWeek会相互影响。例如想在每月的20日触发调度，不管20日到底是星期几，则只能使用如下写法： 13 13 15 20 * ?, 其中最后一位只能用？，而不能使用*，如果使用*表示不管星期几都会触发，实际上并不是这样。")]),v._v(" "),t("p",[v._v("（3）-：表示范围。例如在Minutes域使用5-20，表示从5分到20分钟每分钟触发一次")]),v._v(" "),t("p",[v._v("（4）/：表示起始时间开始触发，然后每隔固定时间触发一次。例如在Minutes域使用5/20,则意味着5分钟触发一次，而25，45等分别触发一次.")]),v._v(" "),t("p",[v._v("（5）,：表示列出枚举值。例如：在Minutes域使用5,20，则意味着在5和20分每分钟触发一次。")]),v._v(" "),t("p",[v._v("（6）L：表示最后，只能出现在DayofWeek和DayofMonth域。如果在DayofWeek域使用5L,意味着在最后的一个星期四触发。")]),v._v(" "),t("p",[v._v("（7）W:表示有效工作日(周一到周五),只能出现在DayofMonth域，系统将在离指定日期的最近的有效工作日触发事件。例如：在 DayofMonth使用5W，如果5日是星期六，则将在最近的工作日：星期五，即4日触发。如果5日是星期天，则在6日(周一)触发；如果5日在星期一到星期五中的一天，则就在5日触发。另外一点，W的最近寻找不会跨过月份 。")]),v._v(" "),t("p",[v._v("（8）LW:这两个字符可以连用，表示在某个月最后一个工作日，即最后一个星期五。")]),v._v(" "),t("p",[v._v("（9）#:用于确定每个月第几个星期几，只能出现在DayofWeek域。例如在4#2，表示某月的第二个星期三。")]),v._v(" "),t("p",[t("strong",[v._v("三、常用表达式例子")])]),v._v(" "),t("p",[v._v("（0）"),t("strong",[v._v("0/20 * * * * ?")]),v._v("  表示每20秒 调整任务")]),v._v(" "),t("p",[v._v("（1）"),t("strong",[v._v("0 0 2 1 * ?")]),v._v("  表示在每月的1日的凌晨2点调整任务")]),v._v(" "),t("p",[v._v("（2）"),t("strong",[v._v("0 15 10 ? * MON-FRI")]),v._v("  表示周一到周五每天上午10:15执行作业")]),v._v(" "),t("p",[v._v("（3）"),t("strong",[v._v("0 15 10 ? 6L 2002-2006")]),v._v("  表示2002-2006年的每个月的最后一个星期五上午10:15执行作")]),v._v(" "),t("p",[v._v("（4）"),t("strong",[v._v("0 0 10,14,16 * * ?")]),v._v("  每天上午10点，下午2点，4点")]),v._v(" "),t("p",[v._v("（5）"),t("strong",[v._v("0 0/30 9-17 * * ?")]),v._v("  朝九晚五工作时间内每半小时")]),v._v(" "),t("p",[v._v("（6）"),t("strong",[v._v("0 0 12 ? * WED")]),v._v("   表示每个星期三中午12点")]),v._v(" "),t("p",[v._v("（7）"),t("strong",[v._v("0 0 12 * * ?")]),v._v("  每天中午12点触发")]),v._v(" "),t("p",[v._v("（8）"),t("strong",[v._v("0 15 10 ? * *")]),v._v("   每天上午10:15触发")]),v._v(" "),t("p",[v._v("（9）"),t("strong",[v._v("0 15 10 * * ?")]),v._v("   每天上午10:15触发")]),v._v(" "),t("p",[v._v("（10）"),t("strong",[v._v("0 15 10 * * ? *")]),v._v("   每天上午10:15触发")]),v._v(" "),t("p",[v._v("（11）"),t("strong",[v._v("0 15 10 * * ? 2005")]),v._v("   2005年的每天上午10:15触发")]),v._v(" "),t("p",[v._v("（12）"),t("strong",[v._v("0 * 14 * * ?")]),v._v("   在每天下午2点到下午2:59期间的每1分钟触发")]),v._v(" "),t("p",[v._v("（13）"),t("strong",[v._v("0 0/5 14 * * ?")]),v._v("   在每天下午2点到下午2:55期间的每5分钟触发")]),v._v(" "),t("p",[v._v("（14）"),t("strong",[v._v("0 0/5 14,18 * * ?")]),v._v("   在每天下午2点到2:55期间和下午6点到6:55期间的每5分钟触发")]),v._v(" "),t("p",[v._v("（15）"),t("strong",[v._v("0 0-5 14 * * ?")]),v._v("   在每天下午2点到下午2:05期间的每1分钟触发")]),v._v(" "),t("p",[v._v("（16）"),t("strong",[v._v("0 10,44 14 ? 3 WED")]),v._v("   每年三月的星期三的下午2:10和2:44触发")]),v._v(" "),t("p",[v._v("（17）"),t("strong",[v._v("0 15 10 ? * MON-FRI")]),v._v("   周一至周五的上午10:15触发")]),v._v(" "),t("p",[v._v("（18）"),t("strong",[v._v("0 15 10 15 * ?")]),v._v("   每月15日上午10:15触发")]),v._v(" "),t("p",[v._v("（19）"),t("strong",[v._v("0 15 10 L * ?")]),v._v("   每月最后一日的上午10:15触发")]),v._v(" "),t("p",[v._v("（20）"),t("strong",[v._v("0 15 10 ? * 6L")]),v._v("   每月的最后一个星期五上午10:15触发")]),v._v(" "),t("p",[v._v("（21）"),t("strong",[v._v("0 15 10 ? * 6L 2002-2005")]),v._v("  2002年至2005年的每月的最后一个星期五上午10:15触发")]),v._v(" "),t("p",[v._v("（22）"),t("strong",[v._v("0 15 10 ? * 6#3")]),v._v("  每月的第三个星期五上午10:15触发")]),v._v(" "),t("p",[t("strong",[v._v("注：")])]),v._v(" "),t("p",[v._v("（1）有些子表达式能包含一些范围或列表")]),v._v(" "),t("p",[v._v("例如：子表达式（天（星期））可以为 “MON-FRI”，“MON，WED，FRI”，“MON-WED,SAT”")]),v._v(" "),t("p",[v._v("“*”字符代表所有可能的值")]),v._v(" "),t("p",[v._v("因此，“"),t("em",[v._v("”在子表达式（月）里表示每个月的含义，“")]),v._v("”在子表达式（天（星期））表示星期的每一天\n“/”字符用来指定数值的增量\n例如：在子表达式（分钟）里的“0/15”表示从第0分钟开始，每15分钟\n在子表达式（分钟）里的“3/20”表示从第3分钟开始，每20分钟（它和“3，23，43”）的含义一样")]),v._v(" "),t("p",[v._v("“？”字符仅被用于天（月）和天（星期）两个子表达式，表示不指定值\n当2个子表达式其中之一被指定了值以后，为了避免冲突，需要将另一个子表达式的值设为“？”")]),v._v(" "),t("p",[v._v("“L” 字符仅被用于天（月）和天（星期）两个子表达式，它是单词“last”的缩写\n但是它在两个子表达式里的含义是不同的。\n在天（月）子表达式中，“L”表示一个月的最后一天\n在天（星期）自表达式中，“L”表示一个星期的最后一天，也就是SAT")]),v._v(" "),t("p",[v._v("如果在“L”前有具体的内容，它就具有其他的含义了\n例如：“6L”表示这个月的倒数第６天，“FRIL”表示这个月的最一个星期五\n注意：在使用“L”参数时，不要指定列表或范围，因为这会导致问题")])])}),[],!1,null,null,null);_.default=o.exports}}]);