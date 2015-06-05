define(function () {

  describe("Main Page", function () {

    beforeEach(function () {
      loadFixtures("index.html");
    });

    it("should have logo floated on " + leftDir + " side", function(){
    	var $logo = $("#logo");
      	expect($logo).toBeFloatedLeft();
    });

    it("should have main nav floated on " + rightDir + " side", function(){
    	var $nav = $(".nav.nav-pills");
      	expect($nav).toBeFloatedRight();
    });

    it("should have hero container floated on " + leftDir + " side", function(){
    	var $box = $(".jumbotron .box");
      	expect($box).toBeFloatedLeft();
    });

    it("should have hero container box's text on " + leftDir + " aligned", function(){
    	var $box = $(".row.marketing");
      	expect($box).toHaveTextAlignedLeft();
    });

    it("should have footer content floated on " + leftDir + " side", function(){
    	var $footer = $(".footer p");
      	expect($footer).toBeFloatedLeft();
    });
  });
});