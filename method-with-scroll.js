/* globals InfiniteScroll */

MethodWithScroll = class {
  /**
   * [constructor description]
   * @param  {Object} options
   *         options {
   *         	limit: Optional(Number),
   *         	skip: Optional(Number),
   *         	maxLimit: Optional(NUmber),
   *         	methodCallback: Function,
   *         	methodName: String,
   *         	threshold: String
   *         	template: Optional(Blaze.TemplateInstance)
   *         }
   * @return {MethodWithScroll}
   */
  constructor(options){
    this.infiniteScroll =
      new InfiniteScroll(options.threshold, options.template);
    this.methodName = options.methodName;
    this.methodCallback = options.methodCallback || function(){};
    this.limit = options.limit || 10;
    this.skip = options.skip || 0;
    this.increment = options.increment || 10;
    this.maxLimit = options.maxLimit || 100;
    this.isLoading = false;

    return this;
  }

  loadData(){
    if(!this.isLoading){
      this.isLoading = true;

      Meteor.call(this.methodName, {
        limit: this.limit,
        maxLimit: this.maxLimit,
        skip: this.skip
      }, (error, response) => {
        this.isLoading = false;
        this.methodCallback(error, response);
        this.skip += this.limit >= this.maxLimit ? 0 : this.increment;
      });
    }
  }

  destroy(){
    this.infiniteScroll.destroy();
  }

  run(){
    this.infiniteScroll.onInfinite(() => {
      this.loadData();
    });

    this.infiniteScroll.run();
  }
};
