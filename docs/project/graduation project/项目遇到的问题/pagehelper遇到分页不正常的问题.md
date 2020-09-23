# PageHelper分页不正常，pages始终等于1，total 始终等于pageSize的问题

## 问题

**`pages`始终等于1，`total` 始终等于`pageSize`**

![image-20200912095549024](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200912095549024.png)



## 原因

原因是我在查询到list数据之后，对list做了操作，导致分页不正常

```java
// 这是service层的类
public PageInfo<TUiWork> getAllByPagination(Integer pageNum, Integer pageSize) {
    PageHelper.startPage(pageNum, pageSize);
    List<TUiWork> workList = workMapper.getAll();
    
    // 问题就在这里，我对workList做了操作
    List<TUiWork> newWorkList = new ArrayList<>();
    for (TUiWork work : workList) {
        List<String> imageUrlList = getImageUrlListByIds(work.getImageId());
        work.setImageUrls(imageUrlList);
        newWorkList.add(work);
    }

    // 把新的list传递给了PageInfo，导致分页不正常
    PageInfo<TUiWork> tUiWorkPageInfo = new PageInfo<>(newWorkList);
    return tUiWorkPageInfo;
}
```



## 解决

解决方法就是从数据库中查询出的list数据不要做其他操作，直接把list给`PageInfo`（这种做法不推荐，下面有更好的做法）

```java
// 这是service层的类
public PageInfo<TUiWork> getAllByPagination(Integer pageNum, Integer pageSize) {
    PageHelper.startPage(pageNum, pageSize);
    List<TUiWork> workList = workMapper.getAll();
    PageInfo<TUiWork> tUiWorkPageInfo = new PageInfo<>(workList);
    return tUiWorkPageInfo;
}
```

![image-20200912093915935](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200912093915935.png)



**然而上面这种方法并不推荐，因为我们有的业务确实需要对查询后的`list`进行操作**



**推荐下面这种做法**

```java
// 这是service层的类
public PageInfo<TUiWork> getAllByPagination(Integer pageNum, Integer pageSize) {
    PageHelper.startPage(pageNum, pageSize);
    List<TUiWork> workList = workMapper.getAll();
    // 对list做一些操作，新的list是newWorkList
    List<TUiWork> newWorkList = new ArrayList<>();
    for (TUiWork work : workList) {
        List<String> imageUrlList = getImageUrlListByIds(work.getImageId());
        work.setImageUrls(imageUrlList);
        newWorkList.add(work);
    }

    // 这里还是对数据中查询的list数据workList做分页
    PageInfo<TUiWork> tUiWorkPageInfo = new PageInfo<>(workList);
    // 重新设置PageInfo的list即可，把新的list数据newWorkList设置到PageInfo
    tUiWorkPageInfo.setList(newWorkList);
    
    return tUiWorkPageInfo;
}
```

