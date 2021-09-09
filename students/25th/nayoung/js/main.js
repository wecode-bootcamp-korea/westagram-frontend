window.onload = function(){
	const feedText = document.getElementsByClassName("feed-text");
	const feedSubmitBtn = document.getElementsByClassName("feed-text-submit");
	const feedComments = document.getElementsByClassName("feed-comments");
	const feedHeartBtn = document.getElementsByClassName("feed-button-heart");
	const feedBookmarkBtn = document.getElementsByClassName("feed-button-bookmark");
	const feedLike = document.getElementsByClassName("feed-like");
	const feedLikeNum = document.getElementsByClassName("feed-like-num");
	const feedCommentHeart = document.getElementsByClassName("feed-comment-heart");
	
	let userText = "";

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

	//댓글 창에 내용이 있는지 확인해서 버튼 변경
	function checkInput(userText, i) {
		if(userText) {
			feedSubmitBtn[i].disabled = false;
			feedSubmitBtn[i].style.color = "#0095f6";
			feedSubmitBtn[i].style.cursor = "pointer";
		} else {
			feedSubmitBtn[i].disabled = true;
			feedSubmitBtn[i].style.color = "#c4e1fb";
			feedSubmitBtn[i].style.cursor = "default";
		}
	}

	for(let i = 0; i < feedText.length; i++) {
		feedText[i].addEventListener("keyup", () => {
			userText = feedText[i].value;
			feedText[i].style.height = "18px";
			feedText[i].style.height = feedText[i].scrollHeight + "px";
			checkInput(userText, i);
		});
	}

	//댓글 추가
	function registComment(userText, i) {
		let newFeedComment = document.createElement("div");
		newFeedComment.className = "feed-comment-line";
		newFeedComment.innerHTML = `<div><a class="feed-id" href="">nylee9621</a> <span>${userText}</span></div>
									<div>
										<button class="feed-comment-delete"><i class="fas fa-ellipsis-h"></i></button>
										<button class="feed-comment-heart"><i class="far fa-heart"></i></button>
									</div>`;
		feedComments[i].append(newFeedComment);
	}
	
	for(let i = 0; i < feedSubmitBtn.length; i++) {
		feedSubmitBtn[i].addEventListener("click", () => {
			registComment(userText, i)
			feedText[i].value = "";
			feedText[i].style.height = "18px";
		});

		feedText[i].addEventListener("keyup", (e) => {
			if(e.keyCode == 13) {
				registComment(userText, i)
				feedText[i].value = "";
				feedText[i].style.height = "18px";
			}
		});
	}

	
	//피드 좋아요 버튼 클릭
	for(let i = 0; i < feedHeartBtn.length; i++) {
		feedHeartBtn[i].addEventListener("click", () => {
			let thisHeart = feedHeartBtn[i].firstChild;

			//하트 변경
			thisHeart.classList.toggle("far");
			thisHeart.classList.toggle("fas");
			thisHeart.classList.toggle("heart-click");

			//좋아요수 변경
			if(thisHeart.classList.contains("heart-click")) {
				feedLikeNum[i].innerHTML = parseInt(feedLikeNum[i].innerHTML) + 1;
			} else {
				feedLikeNum[i].innerHTML = parseInt(feedLikeNum[i].innerHTML) - 1;
			}
		});
	}
	

	//피드 북마크 버튼 클릭
	for(let i = 0; i < feedBookmarkBtn.length; i++) {
		feedBookmarkBtn[i].addEventListener("click", () => {
			let thisBookmark = document.getElementsByClassName("fa-bookmark")[i];

			thisBookmark.classList.toggle("far");
			thisBookmark.classList.toggle("fas");
		});
	}

	document.addEventListener("click", (e) => {
		let tar = e.target;

		//댓글 좋아요
		if(tar.parentNode.classList.contains("feed-comment-heart")) {
			tar.classList.toggle("far");
			tar.classList.toggle("fas");
			tar.classList.toggle("heart-click");
		}
		
		//댓글 삭제
		if(tar.parentNode.classList.contains("feed-comment-delete")) {
			tar.parentNode.parentNode.parentNode.remove();
		}
	});

	//nav go-mypage 토글
	document.getElementById("go-mypage").addEventListener("click", () => {
		document.getElementById("go-mypage-wrap").classList.toggle("go-mypage-open");
	});


	//검색창 구현
	const searchWrap = document.getElementById("search-wrap");
	const searchList = document.getElementById("search-list");
	const searchBar = document.getElementById("search-bar");
	let searching = "";

	function matchingSearchItem(searching) {
		let newSearchArr = new Array();

		for(let i = 0; i < searchObj.length; i++) {
			for(prop in searchObj[i]) {
				if((searchObj[i][prop].indexOf(searching) !== -1)) {
					let tf = 0;
					for(let j = 0; j < newSearchArr.length; j++) {
						if(newSearchArr[j] == searchObj[i]) {
							tf = 1;
						}
					}	
					if(!tf) {
						newSearchArr.push(searchObj[i]);
					}
				}
			}
		}

		for(let i = 0; i < newSearchArr.length; i++) {
			let newSearchItem = document.createElement("a");
			newSearchItem.className = "search-item";
			newSearchItem.setAttribute("href", "");
			newSearchItem.innerHTML = `<img class="profile-image" src="${newSearchArr[i].img}">
										<div class="search-from">
											<span class="search-id">${newSearchArr[i].id}</span>
											<span class="search-name">${newSearchArr[i].name}</span>
										</div>`;
			searchList.append(newSearchItem);
		}
	}
	
	searchBar.addEventListener("keyup", () => {
		searchList.innerHTML = "";

		searching = searchBar.value;
		if(searching) {
			matchingSearchItem(searching);
		}
	});

	//검색창 리스트 제어
	const closeSearchListBtn = document.getElementById("close-search-wrap");
	const searchText = document.getElementById("search-text");
	
	closeSearchListBtn.addEventListener("click", () => {
		searchWrap.style.display = "none";
		closeSearchListBtn.style.display = "none";
		searchText.style.display = "flex";
		searchBar.value = "";
	})

	searchBar.addEventListener("click", () => {
		let focusEle = document.activeElement;
		searchWrap.style.display = "block";
		closeSearchListBtn.style.display = "block";
		searchText.style.display = "none";
	});
}