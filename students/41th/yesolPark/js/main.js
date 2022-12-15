const $ = (selector) => document.querySelector(selector);

function App() {
  // 자동 새로고침 방지
  $('#commentForm').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('hi');
  });

  // 댓글 추가
  const addComment = () => {
    if ($('#comment').value === '') {
      alert('댓글을 입력하세요!');
      return;
    }

    // 댓글 추가 양식
    const commentDetail = $('#comment').value;
    const commentTemplate = (commentDetail) => {
      return `
      <li class='comment-list'>
      <span class='comment-list-item'>${commentDetail}</span>
      <button
        type="button"
        class='edit-button'
      >
        수정
      </button>
      <button
        type="button"
        class='remove-button'
      >
        삭제
      </button>
      </li>`;
    };

    $('#commentList').insertAdjacentHTML(
      'afterbegin',
      commentTemplate(commentDetail)
    );
  };

  // 확인 버튼으로 메뉴 입력
  $('#commentSubmit').addEventListener('click', (e) => {
    addComment();
    $('#comment').value = '';
  });

  // enter 버튼으로 메뉴 입력
  $('#commentSubmit').addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    addComment();
    $('#comment').value = '';
  });

  $('#commentList').addEventListener('click', (e) => {
    // 수정 버튼 완성(이벤트위임을 활용하여 구현)
    if (e.target.classList.contains('edit-button')) {
      // 미리 적어둔 댓글 가져오기
      const $comment = e.target
        .closest('li')
        .querySelector('.comment-list-item');
      const nowComment = $comment.innerText;

      // 수정 메뉴 적용하기
      const updateComment = prompt('댓글을 수정하세요', nowComment);
      $comment.innerText = updateComment;
    }

    // 삭제 버튼 완성(이벤트위임을 활용)
    if (e.target.classList.contains('remove-button')) {
      if (confirm('삭제하시겠습니까?')) {
        e.target.closest('li').remove();
        updateComment();
      } else {
        return;
      }
    }
  });
}
App();
