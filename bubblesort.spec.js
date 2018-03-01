describe("Bubble Sort", function(){

  beforeEach(function() {
    spyOn(window, 'bubbleSort').and.callThrough();
    spyOn(window, 'swap').and.callThrough();
    spyOn(window, 'compare').and.callThrough();
  });

  it("handles and empty array", function(){
    expect(bubbleSort([])).toEqual([]);
    expect(window.swap.calls.count()).toEqual(0);
    expect(window.compare.calls.count()).toEqual(0);
  });
  it("handles an array with one item", function(){
    expect(bubbleSort([1])).toEqual([1]);
    expect(window.swap.calls.count()).toEqual(0);
    expect(window.compare.calls.count()).toEqual(0);
  });
  it("handles an array with multiple items", function(){
    expect(bubbleSort([2,1])).toEqual([1,2]);
    expect(window.swap.calls.count()).toEqual(1);
    expect(window.compare.calls.count()).toEqual(1);
  });
  it("handles an array with many items", function(){
    expect(bubbleSort([1,2,3,4])).toEqual([1,2,3,4]);
    expect(window.swap.calls.count()).toEqual(0);
    expect(window.compare.calls.count()).toEqual(3);
  });
});

