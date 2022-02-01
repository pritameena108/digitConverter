function Cmtoinches(value) {
  return (document.querySelector("#Cmtoinches").innerHTML = `Result = ${
    0.393700787 * value /// window.innerHeight
  }inch`);
}
// }
function Inchtocm(value) {
  return (document.querySelector("#Inchtocm").innerHTML = `Result = ${
    2.5400000025908 * value /// window.innerWidth
  }cm`);
  // }
  // function vhToPixel(value) {
  //   return (document.querySelector("#vhToPixel").innerHTML = `Result = ${
  //     (window.innerHeight * value) / 100
  //   }px`);
  // }
  // function vwToPixel(value) {
  //   return (document.querySelector("#vwToPixel").innerHTML = `Result = ${
  //     (window.innerWidth * value) / 100
  //   }px`);
  // }

  window.addEventListener("resize", updateMeasurements);
  function updateMeasurements() {
    const Cmtoinches = document.querySelector(".Cmtoinches").value;
    const InchtocmValue = document.querySelector(".Inchtocm").value;
    const vhToPixelValue = document.querySelector(".vhToPixel").value;
    const vwToPixelValue = document.querySelector(".vwToPixel").value;
    Cmtoinches(CmtoinchesValue);
    Inchtocm(InchtocmValue);
    vhToPixel(vhToPixelValue);
    vwToPixel(vwToPixelValue);
  }
}
///********************************Drop down
