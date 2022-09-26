
//CRIAR POSTS

let ulPosts = document.querySelector(".posts")

function postCreate(){
    for(let i = 0; i < userPosts.length; i++){
        let post_id = userPosts[i].id_post;
        let post_user =  userPosts[i].user;
        let post_title =  userPosts[i].title;
        let post_description = userPosts[i].description;
        let post_text =  userPosts[i].text;


        for(let u = 0; u < users.length; u++){
            let user_id = users[u].id;
            let user_name =  users[u].user;
            let user_stack =  users[u].stack;
            let user_img =  users[u].img;

            if(post_user == user_id){
            let postLi = document.createElement('li')
                postLi.classList.add('post')

                let postCreatorSection = document.createElement('section')
                    postCreatorSection.classList.add('postCreator')

                    let userImgDiv = document.createElement('div')
                        userImgDiv.classList.add('userImg')

                        let userImg = document.createElement('img')
                            userImg.setAttribute('id', 'user-img')
                            userImg.src = user_img
                            userImg.alt = 'Foto do usuário'
                    
                    let creatorInfo = document.createElement('section')
                        creatorInfo.classList.add('creatorInfo')
                    
                        let userNameDiv = document.createElement('div')
                            userNameDiv.classList.add('userName')

                            let userNameH2 = document.createElement('h2')
                                userNameH2.setAttribute('id', 'user-name')
                                userNameH2.innerText = user_name
                        
                        let userDescDiv = document.createElement('div')
                            userDescDiv.classList.add('userDescription')

                            let descriptionParagraph = document.createElement('p')
                                descriptionParagraph.setAttribute('id', 'user-description')
                                descriptionParagraph.innerText = user_stack
                //POST CREATOR APPENDS
                userDescDiv.append(descriptionParagraph)
                userNameDiv.append(userNameH2)
                creatorInfo.append(userNameDiv, userDescDiv)
                userImgDiv.append(userImg)

                postCreatorSection.append(userImgDiv, creatorInfo)

            //POST SECTION
            let postTitleSection = document.createElement('section')
                postTitleSection.classList.add('postTitle')

                let postTitle = document.createElement('h2')
                    postTitle.innerText = post_title

            let postDescriptionSection = document.createElement('section')
                postDescriptionSection.classList.add('postDescription')

                let articleDescription = document.createElement('article')
                    
                    let articleParagraph = document.createElement('p')
                        articleParagraph.innerText = post_description

            let postButtonsSection = document.createElement('section')
                postButtonsSection.classList.add('postButtons')

                let postOpenButton = document.createElement('button')
                    postOpenButton.classList.add('postOpen')
                    postOpenButton.innerText = 'Abrir post'

                let postLikeButton = document.createElement('button')
                    postLikeButton.classList.add('postLike')
                    let likeImg = document.createElement('img')
                        likeImg.src = '/assets/bttn/like.png'
                    
                let likeCount = document.createElement('div')
                    likeCount.classList.add('contagemLikes')

                    let countParagraph = document.createElement('p')
                        countParagraph.innerText = '0'

// postOpenButton EVENT
postOpenButton.addEventListener('click', () => {
let showPostSection = document.createElement('section')
    showPostSection.classList.add('showPost')

    let modalWindow = document.createElement('section')
        modalWindow.classList.add('modal-window')

        let modalHeader = document.createElement('header')
            modalHeader.classList.add('modal-header')

            let modalUser = document.createElement('div')
                modalUser.classList.add('modal-user')

                let modalImg = document.createElement('div')
                    modalImg.classList.add('modal-img')

                    let image = document.createElement('img')
                        image.src = user_img
                
                let modalInfos = document.createElement('div')
                    modalInfos.classList.add('modal-user-infos')

                    let modalInfosH2 = document.createElement('h2')
                        modalInfosH2.id = 'user-name'
                        modalInfosH2.innerText = user_name

                    let modalInfosParagraph = document.createElement('p')
                        modalInfosParagraph.id = 'user-description'
                        modalInfosParagraph.innerText = user_stack

            let modalCloser = document.createElement('div')
                modalCloser.classList.add('close-modal')

                let closerButton = document.createElement('button')
                    closerButton.innerText = 'X'

        let modalPost = document.createElement('div')
            modalPost.classList.add('modal-post')

            let modalPostTitle = document.createElement('h2')
                modalPostTitle.classList.add('title-post')
                modalPostTitle.innerText = post_title

            let modalArticle = document.createElement('article')
                modalArticle.classList.add('modal-article')

                let articleParagraph = document.createElement('p')
                    articleParagraph.innerText = post_text

//CLOSER BUTTON EVENT
closerButton.addEventListener('click', () => {
    showPostSection.remove()
})


//MODAL APPENDS
modalCloser.append(closerButton)
modalInfos.append(modalInfosH2, modalInfosParagraph)
modalImg.append(image)
modalUser.append(modalImg, modalInfos)
modalHeader.append(modalUser, modalCloser)

modalArticle.append(articleParagraph)
modalPost.append(modalPostTitle, modalArticle)

modalWindow.append(modalHeader, modalPost)

showPostSection.append(modalWindow)

ulPosts.append(showPostSection)

})



            //POST APPENDS
                postTitleSection.append(postTitle)

                articleDescription.append(articleParagraph)
                postDescriptionSection.append(articleDescription)

                likeCount.append(countParagraph)
                postLikeButton.append(likeImg)

                postButtonsSection.append(postOpenButton, postLikeButton, likeCount)
                

            //LI APPENDS      
            postLi.append(postCreatorSection, postTitleSection, postDescriptionSection, postButtonsSection)

            //UL APPEND

            ulPosts.append(postLi)
            }
        }
    }
}
postCreate()

//ASIDE

function socialMedia(){

    let ulSocial = document.querySelector('.socialMedia')

    for(let i = 0; i < users.length; i++){
        let user_img = users[i].img
        let user_name = users[i].user
        let user_description = users[i].stack

    let socialLi = document.createElement('li')
        
        let socialUserSection = document.createElement('section')
            socialUserSection.classList.add('socialUser')

            let socialImgDiv = document.createElement('div')
                socialImgDiv.classList.add('socialImg')

                let socialImg = document.createElement('img')
                    socialImg.src = user_img

            let socialInfosDiv = document.createElement('div')
                socialInfosDiv.classList.add('socialInfos')

                let nameH2 = document.createElement('h2')
                    nameH2.id = 'user-name'
                    nameH2.innerText = user_name

                let descriptionParagraph = document.createElement('p')
                    descriptionParagraph.id = 'user-description'
                    descriptionParagraph.innerText = user_description

            let followDiv = document.createElement('div')
                followDiv.classList.add('followUser')

                let followButton = document.createElement('button')
                    followButton.id = 'follow-button'
                    followButton.innerText = 'Seguir'

    //APENDS
    followDiv.append(followButton)
    socialInfosDiv.append(nameH2, descriptionParagraph)
    socialImgDiv.append(socialImg)

    socialUserSection.append(socialImgDiv, socialInfosDiv)

    socialLi.append(socialUserSection, followDiv)
    
    ulSocial.append(socialLi)
    }
}
socialMedia()