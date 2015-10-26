MethodWithScroll
================

Call to a Meteor method with a incrementing skip param when onInfinite event of
 InfiniteScroll is fired.

## Usage
Client:
```js
Template.Foo.onRendered(function(){
  this.MethodWithScroll = new MethodWithScroll;

  this.MethodWithScroll = new MethodWithScroll({
    methodName: 'getFooItems',
    limit: 10,
    maxLimit: 100,
    threshold: '.overflow-scroll',
    increment: 20,
    template: this,
    methodCallback(error, response){
      console.log('More nice data here!', response);
    }
  });
});
```
Server:
```js
Meteor.methods({
  getFooItems(settings){
    let {limit, skip, maxLimit} = settings;

    return Foos.find({}, {
      limit,
      skip
    });
  }
});
```
