// 커서를 모래시계로 변경하는 함수
function changeCursor() {
  if (!document.getElementById("chat-content").value) {
    document.body.style.cursor = "wait";
  }
}
// 커서를 기본 상태로 되돌리는 함수
function resetCursor() {
  document.body.style.cursor = "default";
}

// 답변을 받은 후 커서를 기본 상태로 되돌림
document.addEventListener("DOMContentLoaded", resetCursor);
