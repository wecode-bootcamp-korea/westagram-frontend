window.onload = function(){
	//검색용
	const searchBar = document.querySelector(".search-bar");
	const searchBarPlaceholder = document.querySelector(".search-bar-placeholder");
	const searchBoxCloseBtn = document.querySelector(".search-box-close-button");
	const searchBoxWrap = document.querySelector(".search-box-wrap");
	const searchBoxList = document.querySelector(".search-box-list");

	//마이페이지 박스용
	const mypageBtn = document.querySelector(".mypage-button");
	const mypageBoxWrap = document.querySelector(".mypage-box-wrap");
	const mypageBoxList = document.querySelector(".mypage-box-list");

	//피드용
	const feedComments = document.getElementsByClassName("feed-comments");
	const feedHeartBtn = document.getElementsByClassName("feed-heart-button");
	const feedBookmarkBtn = document.getElementsByClassName("feed-bookmark-button");
	const feedLikeNum = document.getElementsByClassName("feed-like-num");
	const myComment = document.getElementsByClassName("my-comment");
	const commentSubmitBtn = document.getElementsByClassName("comment-submit-button");

	//유동변수
	let commenting = "";
	let searching = "";

	//search 실험용 객체
	const searchObj = [
		{
			img: "망붕배경.jpg",
			id: "goodmin0973",
			name: "이재원"
		},
		{
			img: "망붕배경.jpg",
			id: "goodjung0973",
			name: "이재원"
		},
		{
			img: "망붕배경.jpg",
			id: "kimjis1004",
			name: "김지선"
		},
		{
			img: "망붕배경.jpg",
			id: "kimjis314",
			name: "김지선"
		},
		{
			img: "망붕배경.jpg",
			id: "cjswotls1234",
			name: "정영민"
		}
	];

	document.addEventListener("click", (e) => {
		let tar = e.target;

		//검색창 열고닫기
		if((tar !== searchBar && tar !== searchBoxList) || tar == searchBoxCloseBtn) {
			searchBoxWrap.classList.remove("show");
			searchBoxCloseBtn.classList.remove("show");
			searchBarPlaceholder.style.display = "flex";
			searchBar.value = "";
		} else {
			searchBoxWrap.classList.add("show");
			searchBoxCloseBtn.classList.add("show");
			searchBarPlaceholder.style.display = "none";
		}

		//마이페이지 박스 열고닫기
		if(tar == mypageBtn.firstChild || tar == mypageBoxList) {
			mypageBoxWrap.classList.toggle("show");
		} else {
			mypageBoxWrap.classList.remove("show");
		}

		//댓글 좋아요
		if(tar.parentNode.classList.contains("feed-comment-heart-button")) {
			tar.classList.toggle("far");
			tar.classList.toggle("fas");
			tar.classList.toggle("heart-button-click");
		}
		
		//댓글 삭제
		if(tar.parentNode.classList.contains("feed-comment-delete-button")) {
			tar.parentNode.parentNode.parentNode.remove();
		}
	});

	//검색창 구현
	function matchingSearchItem(searching) {
		let newSearchArr = new Array();

		searchObj.forEach(el => {
			for(prop in el) {
				if((el[prop].indexOf(searching) !== -1)) {
					let yn = 0;
					newSearchArr.forEach(newEl => {
						if(newEl == el) {
							yn = 1;
						}
					});
					if(!yn) {
						newSearchArr.push(el);
					}
				}
			}
		});

		for(let i = 0; i < newSearchArr.length; i++) {
			let newSearchItem = document.createElement("a");
			newSearchItem.className = "search-box-item";
			newSearchItem.setAttribute("href", "");
			newSearchItem.innerHTML = `<img alt="검색된 계정 프로필 사진" src="${newSearchArr[i].img}" />
										<div class="nametag">
											<span class="id non-hover-id">${newSearchArr[i].id}</span>
											<span class="name">${newSearchArr[i].name}</span>
										</div>`;
			searchBoxList.append(newSearchItem);
		}
	}
	
	searchBar.addEventListener("keyup", () => {
		searchBoxList.innerHTML = "";

		searching = searchBar.value;
		if(searching) {
			matchingSearchItem(searching);
		}
	});

	//피드 좋아요 버튼 클릭
	for(let i = 0; i < feedHeartBtn.length; i++) {
		feedHeartBtn[i].addEventListener("click", () => {
			let thisHeart = feedHeartBtn[i].firstChild;

			//하트 아이콘 변경
			thisHeart.classList.toggle("far");
			thisHeart.classList.toggle("fas");
			thisHeart.classList.toggle("heart-button-click");

			//좋아요수 변경
			if(thisHeart.classList.contains("heart-button-click")) {
				feedLikeNum[i].innerHTML = parseInt(feedLikeNum[i].innerHTML) + 1;
			} else {
				feedLikeNum[i].innerHTML = parseInt(feedLikeNum[i].innerHTML) - 1;
			}
		});
	}
	

	//피드 북마크 버튼 클릭
	for(let i = 0; i < feedBookmarkBtn.length; i++) {
		feedBookmarkBtn[i].addEventListener("click", () => {
			let thisBookmark = document.getElementsByClassName("fa-bookmark")[i + 1];

			//북마크 아이콘 변경
			thisBookmark.classList.toggle("far");
			thisBookmark.classList.toggle("fas");
		});
	}

	//댓글 창에 내용이 있는지 확인해서 버튼 변경
	function checkCommenting(commenting, i) {
		if(commenting) {
			commentSubmitBtn[i].disabled = false;
			commentSubmitBtn[i].classList.add("comment-submit-button-active");
		} else {
			commentSubmitBtn[i].disabled = true;
			commentSubmitBtn[i].classList.remove("comment-submit-button-active");
		}
	}

	for(let i = 0; i < myComment.length; i++) {
		myComment[i].addEventListener("keyup", () => {
			commenting = myComment[i].value;
			myComment[i].style.height = "18px";
			myComment[i].style.height = myComment[i].scrollHeight + "px";
			checkCommenting(commenting, i);
		});
	}

	//댓글 추가
	function registComment(commenting, i) {
		let newFeedComment = document.createElement("div");
		newFeedComment.className = "feed-comment-line";
		newFeedComment.innerHTML = `<div><a class="id" href="">nylee9621</a> <span>${commenting}</span></div>
									<div>
										<button class="feed-comment-delete-button"><i class="fas fa-ellipsis-h"></i></button>
										<button class="feed-comment-heart-button"><i class="far fa-heart"></i></button>
									</div>`;
		feedComments[i].append(newFeedComment);

		//코멘트창 초기화
		myComment[i].value = "";
		myComment[i].style.height = "18px";
	}
	
	for(let i = 0; i < commentSubmitBtn.length; i++) {
		commentSubmitBtn[i].addEventListener("click", () => {
			registComment(commenting, i)
		});

		myComment[i].addEventListener("keyup", (e) => {
			if(e.keyCode == 13) {
				registComment(commenting, i)
			}
		});
	}
}