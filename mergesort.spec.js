describe('merge sort function', function() {

  describe('split array function', function(){
    it('is able to splite an array into two halves', function(){
      expect(split([1,2,3,4])).toEqual([[1,2], [3,4]]);
    });
    it('can deal with odd-length arrays', function() {
      expect(split([1,2,3,4,5])).toEqual([[1,2,3], [4,5]]);
    });
  });

  describe('merge function', function() {
    it('is able to merge two sorted arrays into one sorted array', function() {
      expect().toEqual();
    });
  });

});
