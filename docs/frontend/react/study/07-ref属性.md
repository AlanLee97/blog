# ref属性

ref属性是直接操作DOM的，不推荐经常使用

```html
<input id="inp" className="input" type="text"
       onChange={this.handleChange}
       value={this.state.inputValue}
       ref={(input) => {this.input = input}}
/>
```

```js
handleChange(e) {
  // const value = e.target.value;
  const value = this.input.value;
  this.setState(() => ({
    inputValue: value
  }))
```

