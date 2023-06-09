function modal(id) {
  let zIndex = 9999;
  let modal = document.getElementById(id);

  // 모달 div 뒤 희미한 레이어
  let bg = document.createElement("div");
  bg.setStyle({
    position: "fixed",
    zIndex: zIndex,
    left: "0px",
    top: "0px",
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0,0,0,0.4)",
  });
  document.body.append(bg);

  // 닫기 버튼 처리, 희미한 레이어와 모달 div 지우기
  modal
    .querySelector(".modal-close-btn")
    .addEventListener("click", function () {
      bg.remove();
      modal.style.display = "none";
    });

  modal.setStyle({
    position: "fixed",
    display: "block",

    // 희미한 레이어 위에 보이기
    zIndex: zIndex + 1,

    // div center 정렬
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  });
}

// Element 에 style 한번에 오브젝트로 설정하는 함수 추가
Element.prototype.setStyle = function (styles) {
  for (let k in styles) this.style[k] = styles[k];
  return this;
};

document.getElementById("login-btn").addEventListener("click", function () {
  // 모달창 띄우기
  modal("login-modal");
});
