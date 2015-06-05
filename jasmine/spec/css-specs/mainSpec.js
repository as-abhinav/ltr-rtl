define(function () {

  describe("Main Page", function () {

    beforeEach(function () {
      loadFixtures("index.html");
    });

    it("should have logo floated on " + leftDir + " side", function(){
    	var $logo = $("#logo");
      expect($logo).toBeFloatedLeft();
    });
  });
});