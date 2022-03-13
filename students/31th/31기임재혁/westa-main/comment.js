        const inputText = document.getElementById('input-text')
        const btnSubmit = document.getElementById('btn-submit')
        const commentView = document.getElementById('input-comment-view')

        btnSubmit.addEventListener('click',(e)=>{
            e.preventDefault()

            // inputText.len === 0 alert()

            const commentValue = inputText.value

            // create element

            /**
             * <div class="comment-child">
             *      <p>id</p>
             *      <p>value</p>
             * </div>
             */
            
            const div = document.createElement('div')
            div.setAttribute("class","comment-child") 

            const namePtag = document.createElement('p')
            const descPtag = document.createElement('p')

            namePtag.textContent = 'Jaehyuksssss'
            descPtag.textContent = commentValue

            div.appendChild(namePtag)
            div.appendChild(descPtag)

            // styling p tag

            // inject
            commentView.appendChild(div)

            // init
            inputText.value = ''
            
        })