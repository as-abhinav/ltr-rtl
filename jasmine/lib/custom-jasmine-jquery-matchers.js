+function (window, jasmine, $) { "use strict";

  beforeEach(function () {
    jasmine.addMatchers({

      toCompareLeftValues : function () {
        return {
          compare: function (actualLeft, otherLeft) {
            return {pass: (isRtl ? (otherLeft > actualLeft) : (otherLeft < actualLeft))}
          }
        }
      },

      toBeFloatedRight: function () {
        return {
          compare: function (actual, dirValue) {
            dirValue = dirValue || rightDir;
            return {pass: ($(actual).css('float') == dirValue)}
          }
        }
      },

      toBeFloatedLeft: function () {
        return {
          compare: function (actual, dirValue) {
            dirValue = dirValue || leftDir;
            return {pass: ($(actual).css('float') == dirValue)}
          }
        }
      },

      toHaveTextAlignedLeft: function () {
        return {
          compare: function (actual, dirValue) {
            dirValue = dirValue || leftDir;
            return {pass: ($(actual).css('text-align') == dirValue)}
          }
        }
      },

      toHaveTextAlignedRight: function () {
        return {
          compare: function (actual, dirValue) {
            dirValue = dirValue || rightDir;
            return {pass: ($(actual).css('text-align') == dirValue)}
          }
        }
      },

      toHaveTextAlignedCenter: function () {
        return {
          compare: function (actual) {
            return {pass: ($(actual).css('text-align') == 'center')}
          }
        }
      },

      toHaveLtrDirection: function () {
        return {
          compare: function (actual) {
            return {pass: ($(actual).css('direction') == 'ltr')}
          }
        }
      },

      toHaveRtlDirection: function () {
        return {
          compare: function (actual) {
            return {pass: ($(actual).css('direction') == 'rtl')}
          }
        }
      },

      toBeOnLeftOf: function () {
        return {
          compare: function (actual, otherElement) {
            return {pass: (isRtl ? ($(otherElement).offset().left > $(actual).offset().left) : ($(otherElement).offset().left < $(actual).offset().left))}
          }
        }
      },

      toHavePaddingLeftGreaterThan: function () {
        return {
          compare: function (actual, val, dirValue) {
            dirValue = dirValue || leftDir;
            return {pass: (parseInt($(actual).css('padding-'+dirValue)) > val )}
          }
        }
      },

      toHaveBorderRightWidthEqualTo: function () {
        return {
          compare: function (actual, val, dirValue) {
            dirValue = dirValue || rightDir;
            return {pass: (parseInt($(actual).css('border-'+dirValue+'-width')) == val )}
          }
        }
      },

      toHaveMarginLeftGreaterThan: function () {
        return {
          compare: function (actual, val, dirValue) {
            dirValue = dirValue || leftDir;
            return {pass: (parseInt($(actual).css('margin-'+dirValue)) > val )}
          }
        }
      },
      toHaveMarginLeftEqualToZero: function () {
        return {
          compare: function (actual, dirValue) {
            dirValue = dirValue || leftDir;
            return {pass: (parseInt($(actual).css('margin-'+dirValue)) == 0 )}
          }
        }
      },
      toHaveMarginLeftEqualTo: function () {
        return {
          compare: function (actual, value, dirValue) {
            dirValue = dirValue || leftDir;
            return {pass: (parseInt($(actual).css('margin-'+dirValue)) == value )}
          }
        }
      },

      toHaveMarginRightEqualToZero: function () {
        return {
          compare: function (actual, dirValue) {
            dirValue = dirValue || rightDir;
            return {pass: (parseInt($(actual).css('margin-'+dirValue)) == 0 )}
          }
        }
      },
      toHaveMarginRightGreaterThanZero: function () {
        return {
          compare: function (actual, dirValue) {
            dirValue = dirValue || rightDir;
            return {pass: (parseInt($(actual).css('margin-'+dirValue)) > 0 )}
          }
        }
      },

      toHaveTopEqualTo: function () {
        return {
          compare: function (actual, val) {
            return {pass: (parseInt($(actual).css('top')) == val )}
          }
        }
      },

      toHaveLeftAuto: function () {
        return {
          compare: function (actual, dirValue) {
            dirValue = dirValue || leftDir;
            return {pass: ($(actual).css(dirValue) == 'auto' )}
          }
        }
      },
      toHaveLeftEqualTo: function () {
        return {
          compare: function (actual, val, dirValue) {
            dirValue = dirValue || leftDir;
            return {pass: (parseInt($(actual).css(dirValue)) == val )}
          }
        }
      },
      toHaveLeftEqualToZero: function () {
        return {
          compare: function (actual, dirValue) {
            dirValue = dirValue || leftDir;
            return {pass: (parseInt($(actual).css(dirValue)) == 0 )}
          }
        }
      },
      toHaveLeftGreaterThanZero: function () {
        return {
          compare: function (actual, dirValue) {
            dirValue = dirValue || leftDir;
            return {pass: (parseInt($(actual).css(dirValue)) > 0 )}
          }
        }
      },

      toHaveRightAuto: function () {
        return {
          compare: function (actual, dirValue) {
            dirValue = dirValue || rightDir;
            return {pass: ($(actual).css(dirValue) == 'auto')}
          }
        }
      },
      toHaveRightEqualTo: function () {
        return {
          compare: function (actual, val, dirValue) {
            dirValue = dirValue || rightDir;
            return {pass: (parseInt($(actual).css(dirValue)) == val )}
          }
        }
      },
      toHaveRightEqualToZero: function () {
        return {
          compare: function (actual, dirValue) {
            dirValue = dirValue || rightDir;
            return {pass: (parseInt($(actual).css(dirValue)) == 0 )}
          }
        }
      },
      toHaveRightLessThanZero: function () {
        return {
          compare: function (actual, dirValue) {
            dirValue = dirValue || rightDir;
            return {pass: (parseInt($(actual).css(dirValue)) < 0 )}
          }
        }
      },
      toHaveRightGreaterThanZero: function () {
        return {
          compare: function (actual, dirValue) {
            dirValue = dirValue || rightDir;
            return {pass: (parseInt($(actual).css(dirValue)) > 0 )}
          }
        }
      }
    });
  });
}(window, window.jasmine, window.jQuery);

