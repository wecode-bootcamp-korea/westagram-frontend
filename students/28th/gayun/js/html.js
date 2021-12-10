export class Html {
    constructor() {
        this.defaultImgUrl = 'images/default_profile-img.png';
    }

    addTopStory(data) {
        return data.map((i) => {
            return `
            <span class="top-story__container">
                <div class="top-story__img-container profile-container">
                    <img class="top-story__img profile-img" src="${i.profileImg}" alt="story-img">
                </div>
                <div class="top-story__id">
                    ${i.profileId}
                </div>
            </span>
        `
        }).join('');
    }

    writeComment(id, value) {
        return `
            <span class="comment_item">
                <span class="comment__id">${id}</span>
                <span class="comment__text">${value}</span>
            </span>
            <button class="comment__delete-button">
                <i class="fas fa-times"></i>
            </button>
        `
    }

    searchResult(targetVal, idArr) {
        const filteredId = idArr.filter((id) => {
            return id[1].includes(targetVal);
        })

        return filteredId.map((id) => {
            return `
                <li class="search__result--item">
                    <img src="${id[0] ?? this.defaultImgUrl}" alt="" class="search__result--img">
                    <span class="search__result--text">
                        <p class="search__result--title">${id[1]}</p>
                        <p class="search__result--subtitle">${id[2] ?? ''}</p>
                    </span>
                </li>
            `
        }).join('')
    }

    addSkeleton() {
        return `
            <div class="skeleton__header">
                <span class="skeleton__header--profileImg"></span>
                <span class="skeleton__header--id"></span>
            </div>
            <div class="skeleton__img">
                <img class="loading" src="images/loading.gif" alt="">
            </div>
            <div class="skeleton__comment">
                <span class="skeleton__comment--id"></span>
                <span class="skeleton__comment--text"></span>
            </div>
            <div class="skeleton__comment">
                <span class="skeleton__comment--id"></span>
                <span class="skeleton__comment--text" id="comment--text2"></span>
            </div>
            <div class="skeleton__comment--input"></div>
        `
    }

    addComment(data) {
        return data.map((data) => {
            return `
                <ul class="comment">
                    <span class="comment__item">
                        <span class="comment__id">${data.commentId}</span>
                        <span class="comment__text">${data.commentText}</span>
                    </span>
                    <button class="comment__delete-button">
                        <i class="fas fa-times"></i>
                    </button>
                </ul>`
        }).join('');
    }

    addFeed(data, index) {
        function handleTextContent(text) {
            if(text.length > 30) {
                text = text.slice(0, 30);
                return `
                    ${text}<button class="feed__more-text">...더보기</button>
                `
            } else {
                return text;
            }

        }

        return `
                <section class="feed__header">
                    <span class="feed__header--user">
                        <span class="feed__header--img-container profile-container">
                            <img class="feed__header--img profile-img" src="${data.profileImg}" alt="">
                        </span>
                        <span class="feed__header--id">${data.feedId}
                        </span>
                    </span>
                    <button class="feed_header--button">
                        <i class="fas fa-ellipsis-h"></i>
                    </button>
                </section>
                <section class="feed__img-container">
                    <img src="${data.imgContent}" alt="" class="feed-img">
                </section>
                <section class="feed__contents-wrap">
                    <div class="feed__buttons">
                        <span class="feed__buttons1">
                            <button class="feed__button">
                                <i class="far fa-heart"></i>
                            </button>
                            <button class="feed__button">
                                <i class="far fa-comment"></i>
                            </button>
                            <button class="feed__button">
                                <i class="far fa-share-square"></i>
                            </button>
                        </span>
                        <span class="feed__buttons2">
                            <button class="feed__button">
                                <i class="far fa-bookmark"></i>
                            </button>
                        </span>
                    </div>
                    <div class="people-who-like">
                        <img src="images/profile-img2.jpg" alt="" class="people-who-like__img">
                        <p class="people-who-like__comment" data-num=${index}>${data.likesCount[0]}님 외 ${data.likesCount.length}명이 좋아합니다.</p>
                    </div>
                    <div class="feed__textContent">${handleTextContent(data.textContent)}</div>
                    <li class="comments">
                        ${this.addComment(data.comment)}
                    </li>
                </section>
                <form class="comment__input">
                    <input type="text" placeholder=" 댓글 달기..." name="" id="" class="comment__input--text">
                    <button class="comment__input--button">게시</button>
                </form>
        `
    }

    handleNoFeed() {
        return `
        <div class="noFeed">
            <i id="noFeed__icon" class="fas fa-exclamation-circle"></i>
            <p class="noFeed__text">불러올 피드가 없습니다.</p>
        </div>
    `
    }

    addStory(data) {
        function calculateDateGap(date) {
            const uploadDate = new Date(date).getDate();
            const today = new Date().getDate();
            return today - uploadDate;
        }

        return data.map((i) => {
            return `
            <li class="story__item">
                <span class="story__img-container profile-container">
                    <img src="${i.profileImg}" alt="story-profile-img" class="story__item--img profile-img">
                </span>
                <span class="story__item--text">
                    <p class="story__item--id">${i.profileId}</p>
                    <p class="story__item--time">${calculateDateGap(i.uploadDate)}일 전</p>
                </span>
            </li>
            `
        }).join('');
    }
}
