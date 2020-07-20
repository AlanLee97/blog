# 我自己对HashMap的理解



## 一些问题

- 容量为什么一定是2的次方数？
- 如何扩容？
- 计算hash值时为什么要无符号右移16位？
- 为什么使用求数组下标时使用 `(n - 1) & hash` 而不用 `hash % n` 的方式？
- 为什么负载因子默认值是0.75？
- 为什么默认初始值是16？
- HashMap中是如何解决hash冲突的？
- 阈值如何计算？
- 什么时候将链表转化为红黑树？
- 为什么线程不安全？



答案在文章底部写出

---



## 一些重要属性

```java
//默认初始容量-必须为2的幂。
static final int DEFAULT_INITIAL_CAPACITY = 1 << 4; // aka 16
```



```java
//在构造函数中未指定时使用的负载系数。
static final float DEFAULT_LOAD_FACTOR = 0.75f;
```



```java
//对该HashMap进行结构修改的次数结构修改是指更改HashMap中的映射数或以其他方式修改其内部结构（例如重新哈希）的修改。
//此字段用于使HashMap的Collection-view上的迭代器快速失败。 
//（请参阅ConcurrentModificationException）。
transient int modCount;
```



```java
//下一个要调整大小的大小值（容量*负载系数）
//（javadoc描述在序列化时为true。
//此外，如果尚未分配表数组，则此字段
//保留初始数组容量，或零表示
// DEFAULT_INITIAL_CAPACITY。）
int threshold;
```



```java
//哈希表的负载因子
final float loadFactor;
```



```java
//map的大小
transient int size;
```



## 构造方法

```java
//用指定的初始容量和负载因子的空HashMap中 
public HashMap(int initialCapacity, float loadFactor) {
    if (initialCapacity < 0)
        throw new IllegalArgumentException("Illegal initial capacity: " +
                                           initialCapacity);
    if (initialCapacity > MAXIMUM_CAPACITY)
        initialCapacity = MAXIMUM_CAPACITY;
    if (loadFactor <= 0 || Float.isNaN(loadFactor))
        throw new IllegalArgumentException("Illegal load factor: " +
                                           loadFactor);
    this.loadFactor = loadFactor;
    this.threshold = tableSizeFor(initialCapacity);
}
```



```java
//用指定的初始容量和默认加载因子（0.75）的空HashMap中
public HashMap(int initialCapacity) {
    this(initialCapacity, DEFAULT_LOAD_FACTOR);
}
```



```java
//构造具有默认初始容量（16）和默认负载因数（0.75）的空HashMap中 
public HashMap() {
    this.loadFactor = DEFAULT_LOAD_FACTOR; // all other fields defaulted
}
```



```java
//构造一个具有相同的映射关系与指定Map一个新的HashMap。 
//HashMap中与默认负载因数（0.75）和初始容量足以容纳在指定的map的映射创建。
public HashMap(Map<? extends K, ? extends V> m) {
    this.loadFactor = DEFAULT_LOAD_FACTOR;
    putMapEntries(m, false);
}
```



## put方法

```
put(K key, V value) -> putVal(int hash, K key, V value, boolean onlyIfAbsent, boolean evict)
```



**putVal()**

```java
final V putVal(int hash, K key, V value, boolean onlyIfAbsent,
                   boolean evict) {
    Node<K,V>[] tab; Node<K,V> p; int n, i;
    //如果tab为null或tab的长度为0，则进入判断（第一次put），利用resize()方法计算了tab的长度，并赋值给n
    if ((tab = table) == null || (n = tab.length) == 0)
        n = (tab = resize()).length;
    //判断Node对象是否null，为null就要调用构造方法初始化一下
    //(n - 1) & hash是为了计算tab的下标
    if ((p = tab[i = (n - 1) & hash]) == null)
        tab[i] = newNode(hash, key, value, null);
    else {//Node对象p不为null
        Node<K,V> e; K k;
        //判断是否有相同的key，
        //如果 hash值相同，key相同，
        //则进入这里面的代码，作用是替换新值
        if (p.hash == hash &&
            ((k = p.key) == key || (key != null && key.equals(k))))
            //将p的值赋给新的Node节点e
            e = p;
        else if (p instanceof TreeNode)
            e = ((TreeNode<K,V>)p).putTreeVal(this, tab, hash, key, value);
        else {
            for (int binCount = 0; ; ++binCount) {
                if ((e = p.next) == null) {
                    p.next = newNode(hash, key, value, null);
                    if (binCount >= TREEIFY_THRESHOLD - 1) // -1 for 1st
                        treeifyBin(tab, hash);
                    break;
                }
                if (e.hash == hash &&
                    ((k = e.key) == key || (key != null && key.equals(k))))
                    break;
                p = e;
            }
        }
        //如果e不为null，
        if (e != null) { // existing mapping for key
            V oldValue = e.value;
            if (!onlyIfAbsent || oldValue == null)
                e.value = value;
            afterNodeAccess(e);
            return oldValue;
        }
    }
    //记录修改数据结构的次数
    ++modCount;
    
    //如果map的size大于阈值，要进行resize
    if (++size > threshold)
        resize();
    afterNodeInsertion(evict);
    return null;
}
```

>  
>
>  ```java
>  if ((p = tab[i = (n - 1) & hash]) == null)
>  ```
>
>  **(n - 1) & hash**：求tab数组的下标index
>
>  ```
>  假设
>  n = 16
>  hash = 97
>  (n - 1) & 97 即 15 & 97
>  15 = 0000 0000 0000 0000 0000 0000 0000 1111
>  &
>  97 = 0000 0000 0000 0000 0000 0000 0110 0001
>  结果  0000 0000 0000 0000 0000 0000 0000 0001
>  ```
>
>  
>
>  为什么不用%取余呢
>
>  因为位运算速度更快
>
>  



**hash(Object key)**

```java
static final int hash(Object key) {
    int h;
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}
```

>计算key.hashCode（），并将（XOR）散列的较高位扩展到较低位。
>
>由于该表使用2的幂次掩码，因此仅在当前掩码上方的位中发生变化的散列集总是会发生冲突。 
>
>（众所周知的例子是Float键集在小表中保存连续的整数。）
>
>因此，我们应用了一种变换，向下扩展了较高位的影响。在速度，效用和比特扩展质量之间需要权衡。因为许多常见的哈希集已经合理地分布了（所以不能从扩展中受益），并且由于我们使用树来处理大量的hash冲突(碰撞)，所以我们仅以最简单的方式对一些移位后的位进行XOR运算，减少系统损失，以及合并最高位的影响，否则由于表的限制，这些位将永远不会用于索引计算。

(h = key.hashCode()) ^ (h >>> 16)

>假设h = 97
>
>97 ^ (97 >>> 16)
>
>97 >>> 16
>
>```
>97二进制 0000 0000 0000 0000 0000 0000 0110 0001
>右移     >>> 16
>结果     0000 0000 0000 0000 0000 0000 0000 0000
>```
>
>97 ^ 0
>
>```
>（97）    0000 0000 0000 0000 0000 0000 0110 0001
>异或 ^    0000 0000 0000 0000 0000 0000 0000 0000
>结果      0000 0000 0000 0000 0000 0000 0110 0001 = 97
>```
>
>**h >>> 16 是为了计算得到的数组下标更散列一些**



**resize()**

```java
final Node<K,V>[] resize() {
    Node<K,V>[] oldTab = table;
    int oldCap = (oldTab == null) ? 0 : oldTab.length;
    int oldThr = threshold;
    int newCap, newThr = 0;
    //第1次put时，不会进入该判断，
    //扩容时会进入该判断
    if (oldCap > 0) {
        if (oldCap >= MAXIMUM_CAPACITY) {
            threshold = Integer.MAX_VALUE;
            return oldTab;
        }
        //将新容量newCap和新阈值newThr翻倍
        else if ((newCap = oldCap << 1) < MAXIMUM_CAPACITY &&
                 oldCap >= DEFAULT_INITIAL_CAPACITY)
            newThr = oldThr << 1; // double threshold
    }
    else if (oldThr > 0) // initial capacity was placed in threshold
        newCap = oldThr;
    else {               // zero initial threshold signifies using defaults
        newCap = DEFAULT_INITIAL_CAPACITY;
        newThr = (int)(DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY);
    }
    if (newThr == 0) {
        float ft = (float)newCap * loadFactor;
        newThr = (newCap < MAXIMUM_CAPACITY && ft < (float)MAXIMUM_CAPACITY ?
                  (int)ft : Integer.MAX_VALUE);
    }
    threshold = newThr;
    @SuppressWarnings({"rawtypes","unchecked"})
    Node<K,V>[] newTab = (Node<K,V>[])new Node[newCap];
    table = newTab;
    if (oldTab != null) {
        //将旧的table中的数据转移到新的table中
        for (int j = 0; j < oldCap; ++j) {
            Node<K,V> e;
            if ((e = oldTab[j]) != null) {
                oldTab[j] = null;
                if (e.next == null)
                    newTab[e.hash & (newCap - 1)] = e;
                else if (e instanceof TreeNode)
                    ((TreeNode<K,V>)e).split(this, newTab, j, oldCap);
                else { // preserve order
                    Node<K,V> loHead = null, loTail = null;
                    Node<K,V> hiHead = null, hiTail = null;
                    Node<K,V> next;
                    do {
                        next = e.next;
                        if ((e.hash & oldCap) == 0) {
                            if (loTail == null)
                                loHead = e;
                            else
                                loTail.next = e;
                            loTail = e;
                        }
                        else {
                            if (hiTail == null)
                                hiHead = e;
                            else
                                hiTail.next = e;
                            hiTail = e;
                        }
                    } while ((e = next) != null);
                    if (loTail != null) {
                        loTail.next = null;
                        newTab[j] = loHead;
                    }
                    if (hiTail != null) {
                        hiTail.next = null;
                        newTab[j + oldCap] = hiHead;
                    }
                }
            }
        }
    }
    return newTab;
}
```



> ```java
> newCap = DEFAULT_INITIAL_CAPACITY;
> newThr = (int)(DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY);
> ```
>
> resize方法主要计算了
>
> - 新容量newCap（默认的初始容量）
> - 新阈值newThr（默认的负载因子 * 默认的初始容量）
>
> 并返回一个新table





## 一些问题

- 容量为什么一定是2的次方数？

    > 因为只有长度是2的N次方，进行减一操作得到的数的二进制结果的低位进行按位与运算才能拿到全部是1的值，在进行按位与运算才能快速的拿到数组的下标，并且分布是均匀的。
    >
    > 当计算`(n - 1) & hash`时，可以提高计算效率也可以快速定位
    >
    > 如果不是2的次方数，扩容时会变成比该容量的最小2的次方数，比如3会变成4, 11会变成16

- 如何扩容？

    >  将新容量newCap和新阈值newThr翻倍

- 为什么使用求数组下标时使用 `(n - 1) & hash` 而不用 `hash % n` 的方式？

    > 位运算速度快

- 为什么负载因子默认值是0.75？

    > 负载因子是0.75的时候，空间利用率比较高，而且避免了相当多的Hash冲突，使得底层的链表或者是红黑树的高度比较低，提升了空间效率。

- 为什么默认初始值是16？

- HashMap中是如何解决hash冲突的？

    > 使用链表

- 阈值如何计算？